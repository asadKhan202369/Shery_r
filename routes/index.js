var express = require("express");
var router = express.Router();
const userModel = require("./users");
const vehicleModel = require("./vehicle");
const reviewModel = require("./review");
const passport = require("passport");
const localStrategy = require("passport-local");
var mongoose = require("mongoose");
const config = require("../config/config");
const multer = require("multer");
// const vehicle = require("./vehicle");
const bookingModel = require("./booking");
const querystring = require("querystring");
const mailer = require("../nodemailer");
const mailer1 = require("../nodemailer1");
const mailer2 = require("../nodemailer2");
const crypto = require("crypto");
// const vehicle = require("./vehicle");
const url = require("url");
var Razorpay = require("razorpay");
var fs = require("fs");

const userimagesupload = multer({ storage: config.userimagesstorage });
const vehicleimagesupload = multer({ storage: config.vehiclesstorage });
// const vehicleeditimagesupload = multer({storage: config.vehicleeditsstorage});

passport.use(
  new localStrategy(
    {
      usernameField: "email",
      usernameQueryFields: ["email"],
    },
    userModel.authenticate()
  )
);

// googlee authenticate

const GoogleStrategy = require("passport-google-oidc");
// const vehicle = require("./vehicle");

require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env["GOOGLE_CLIENT_ID"],
      clientSecret: process.env["GOOGLE_CLIENT_SECRET"],
      callbackURL: "/oauth2/redirect/google",
      scope: ["email", "profile"],
    },
    async function verify(issuer, profile, cb) {
      console.log(profile);
      let user = await userModel.findOne({ email: profile.emails[0].value });
      if (user) {
        return cb(null, user);
      } else {
        let newUser = await userModel.create({
          name: profile.displayName,
          email: profile.emails[0].value,
        });
        newUser.save();
        return cb(null, newUser);
      }
    }
  )
);

router.get("/login/federated/google", passport.authenticate("google"));

router.get(
  "/oauth2/redirect/google",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/login",
  })
);

// googlee authenticate
// Razorpay

//razorpay instance
//payment

var instance = new Razorpay({
  key_id: "rzp_test_e0p4ROsVzyQ7xL",
  key_secret: "DwGCKSi05b7yDJc6VijYVM6Y",
});

router.get("/success", function (req, res) {
  res.render("success");
});

router.post("/create/orderId/:v/:b", async function (req, res) {
  let vehiclep = await vehicleModel.findOne({ _id: req.params.v });
  let BookinD = await bookingModel.findOne({ _id: req.params.b });
  var price = vehiclep.RentalPrice * BookinD.totalDays * 100;
  var tax = (price * 18) / 100;
  var ins = ((vehiclep.RentalPrice * 5) / 100) * 100;
  var totalPrice = price + tax + ins;
  var options = {
    amount: totalPrice, // amount in the smallest currency unit
    currency: "INR",
    receipt: "order_rcptid_11",
  };
  instance.orders.create(options, function (err, order) {
    console.log(order);
    res.send(order);
    // res.redirect('/profile');
  });
});

router.post("/api/payment/verify", (req, res) => {
  let body =
    req.body.response.razorpay_order_id +
    "|" +
    req.body.response.razorpay_payment_id;

  var crypto = require("crypto");
  var expectedSignature = crypto
    .createHmac("sha256", "DwGCKSi05b7yDJc6VijYVM6Y")
    .update(body.toString())
    .digest("hex");
  console.log("sig received ", req.body.response.razorpay_signature);
  console.log("sig generated ", expectedSignature);
  var response = { signatureIsValid: "false" };
  if (expectedSignature === req.body.response.razorpay_signature)
    response = { signatureIsValid: "true" };
  res.send(response);
  // res.redirect('/profile');
});

//payment

//create vehicle

router.post("/create/vehicle",isLoggedIn,
  vehicleimagesupload.array("vehiclephoto", 5),
  async function (req, res) {
    const loginuser = await userModel.findOne({ email: req.user.email });

    let createdvehicle = await vehicleModel.create({
      vehicleType: req.body.Vt,
      Shopname: req.body.Sname,
      Shopaddress: req.body.Sadd,
      vehicleName: req.body.Vn,
      vehicleColor: req.body.Vc,
      vehicleNumber: req.body.VN,
      vehicleBrand: req.body.Vb,
      YOM: req.body.YOM,
      fuelType: req.body.Ft,
      transmissionType: req.body.Tt,
      RentalPrice: req.body.Price,
      SecurityDeposit: req.body.Sd,
      seating: req.body.Sc,
      Luggage: req.body.Lc,
      Ac: req.body.Ac,
      Es: req.body.Es,
      Gps: req.body.Gps,
      Des: req.body.Des,
      TC: req.body.Terms,
      insuranceP: req.body.Ip,
      insuranceSD: req.body.Ist,
      insuranceED: req.body.Ied,
      owerId: loginuser._id,
      pic: req.files.map((pic) => pic.filename),
    });
    loginuser.vehicles.push(createdvehicle);
    await loginuser.save();
    res.redirect("/allvehicles");
  }
);

router.post("/update/images/:id",isLoggedIn,vehicleimagesupload.array("vehiclephoto1", 5),
  async function (req, res) {
    try {
      if (!req.files || req.files.length === 0) {
        console.log("not uploaded");
      }
      // pic:req.files.map(pic => pic.filename)

      console.log(req.files, "iysbjbjs");
      const vehicleId = req.params.id;
      const newImages = req.files.map((file) => file.filename);

      // Find the vehicle by ID
      const vehicle = await vehicleModel.findById(vehicleId);

      // Remove previous images from the public folder
      vehicle.pic.forEach((image) => {
        fs.unlinkSync(`public/images/uploads/vehicleimages/${image}`);
      });

      vehicle.pic = [];

      // Update the vehicle's images array with the new images
      vehicle.pic = newImages;
      await vehicle.save();

      res.redirect("/profile");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
);

router.post("/update/vehicle/:id", isLoggedIn, async function (req, res) {
  vehicleModel
    .findOneAndUpdate(
      { _id: req.params.id },
      {
        vehicleType: req.body.Vt,
        Shopname: req.body.Sname,
        Shopaddress: req.body.Sadd,
        vehicleName: req.body.Vn,
        vehicleColor: req.body.Vc,
        vehicleBrand: req.body.Vb,
        YOM: req.body.YOM,
        RentalPrice: req.body.Price,
        SecurityDeposit: req.body.Sd,
        seating: req.body.Sc,
        Luggage: req.body.Lc,
        Ac: req.body.Ac,
        Es: req.body.Es,
        Gps: req.body.Gps,
        Des: req.body.Des,
        TC: req.body.Terms,
        insuranceP: req.body.Ip,
        insuranceSD: req.body.Ist,
        insuranceED: req.body.Ied,
      }
    )
    .then(function () {
      res.redirect("/profile");
    });
});

//create vehicle

/* GET home page. */

router.post("/register", function (req, res) {
  var userdata = new userModel({
    name: req.body.name,
    email: req.body.email,
    contactnumber:req.body.phoneNumber,
    isRental: req.body.isRental,
  });
  userModel.register(userdata, req.body.password).then(function (u) {
    passport.authenticate("local")(req, res, function () {
      res.redirect("/");
    });
  });
});


// {/* <input type="file" multiple="" class="form-control" id="images" accept="image/*" name="images"></input> */}

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
  }),
  function (req, res) {}
);

router.get("/logout", function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.clearCookie("connect.sid");
    delete req.session;
    res.redirect("/");
  });
});

// route

router.get("/", async function (req, res, next) {
  if (req.isAuthenticated()) {
    let user = await userModel.findOne({ email: req.user.email });
    let vehicles = await vehicleModel.find().limit(7)
    let Reviews = await reviewModel.find().populate('ownerId')
    res.render("homem", { user: user,vehicles:vehicles,Reviews:Reviews });
  } else {
    let vehicles = await vehicleModel.find();
    let Reviews = await reviewModel.find().populate('ownerId')
    res.render("homem", { user: null,vehicles:vehicles,Reviews:Reviews });
  }
});

// / route

//cars

router.get("/cars", async function (req, res, next) {
  if (req.isAuthenticated()) {
    let user = await userModel.findOne({ email: req.user.email });
    let allVehicles = await vehicleModel.find();
    res.render("Cars", { allVehicles: allVehicles, user: user });
  } else {
    let allVehicles = await vehicleModel.find();
    res.render("Cars", { allVehicles: allVehicles, user: null });
  }
});

//cars

//vehicleSelect

router.get("/car/:id", async function (req, res) {
  if (req.isAuthenticated()) {
    let user = await userModel.findOne({ email: req.user.email });
    let car = await vehicleModel.findOne({ _id: req.params.id });
    res.render("carD", { car: car, user: user });
  } else {
    let car = await vehicleModel.findOne({ _id: req.params.id });
    res.render("carD", { car: car, user: null });
  }
});

//vehucleSelect

//vehucleBook

router.get("/checkout/:id", async function (req, res, next) {
  if (req.isAuthenticated()) {
    let v = await vehicleModel.findOne({ _id: req.params.id });
    let user = await userModel.findOne({ email: req.user.email });
    res.render("vehiclec", { v: v, user: user });
  } else {
    res.redirect("/login");
  }
});

//vehucleBook

//create booking

router.post("/create/booking", isLoggedIn, async function (req, res) {
  let user = await userModel.findOne({ email: req.user.email });
  let Vhcle = await vehicleModel.findOne({ _id: req.body.id });
  const startDate = new Date(req.body.pickD);
  const endDate = new Date(req.body.RetD);

  // Calculate the time difference in milliseconds
  const timeDiff = endDate.getTime() - startDate.getTime();

  // Convert the time difference to days
  const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  let createBooking = await bookingModel.create({
    vehicleId: req.body.id,
    BookerId: user._id,
    fromLocation: req.body.from,
    toLocation: req.body.to,
    startDate: req.body.pickD,
    totalDays: totalDays,
    endDate: req.body.RetD,
  });
  user.Bookmark.push(createBooking);
  user.BookedvID.push(createBooking.vehicleId);
  Vhcle.BookingId.push(createBooking);
  await user.save();
  await Vhcle.save();
  const queryParams = new URLSearchParams(createBooking).toString();
  let vhcl = createBooking.vehicleId;
  let book = createBooking._id;
  res.redirect("/confirm?book=" + book + "&vhcl=" + vhcl);
});

router.post("/review", isLoggedIn, async function (req, res) {
  let user = await userModel.findOne({ email: req.user.email });
  let createReview = await reviewModel.create({
      ownerId:user._id,
      name:req.body.name,
      review:req.body.message,
  });
  user.ReviewID.push(createReview);
  await user.save();
  res.redirect("/");
});

//create booking

//receipt

router.get("/confirm", isLoggedIn, async function (req, res) {
  let user = await userModel.findOne({ email: req.user.email });
  let v = await vehicleModel.findOne({ _id: req.query.vhcl });
  let b = await bookingModel.findOne({ _id: req.query.book });
  res.render("confirm", { user, v, b });
});

//receipt

//bikes

router.get("/bikes", async function (req, res, next) {
  if (req.isAuthenticated()) {
    let user = await userModel.findOne({ email: req.user.email });
    let allVehicles = await vehicleModel.find();
    res.render("Bikes", { allVehicles: allVehicles, user: user });
  } else {
    let allVehicles = await vehicleModel.find();
    res.render("Bikes", { allVehicles: allVehicles, user: null });
  }
});

router.get("/allvehicles", async function (req, res, next) {
  if (req.isAuthenticated()) {
    let user = await userModel.findOne({ email: req.user.email });
    let allVehicles = await vehicleModel.find().limit(6).skip(0);
    res.render("All vehicles", { allVehicles: allVehicles, user: user });
  } else {
    let allVehicles = await vehicleModel.find();
    res.render("All vehicles", { allVehicles: allVehicles, user: null });
  }


});

//bikes

//addVehicle

router.get("/av", async function (req, res, next) {
  if (req.isAuthenticated()) {
    let user = await userModel.findOne({ email: req.user.email });
    if (user.isRental === true) {
      res.render("addv", { user: user });
    } else {
      res.redirect("/invalid");
      // res.render('invalid')/;
    }
  } else {
    res.redirect("/login");
  }
});

//addVehicle

//profile

router.get("/profile", async function (req, res, next) {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("vehicles");
  res.render("My profile", { user });
});

router.get("/myvehicle", async function (req, res, next) {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("vehicles");
  res.render("My vehicle", { user });
});

//profile

//rented

router.get("/myrented", async function (req, res, next) {
  // let user = await userModel
  //   .findOne({ email: req.user.email })
  //   .populate({
  //     path: "Bookmark",
  //     populate: {
  //       path: "vehicleId",
  //       populate: {
  //         path: "BookingId",
  //       },
  //     },
     
  //   }).populate("BookedvID");

    let user = await userModel
    .findOne({ email: req.user.email })
    .populate({
      path: "Bookmark",
      populate: {
        path: "vehicleId",
      },
     
    }).populate("BookedvID");

  const uniqueVehicleIds = new Set();
  user.BookedvID.forEach((vehicle) => {
    uniqueVehicleIds.add(vehicle._id.toString());
  });

  // Convert the Set back to an array of unique vehicle IDs
  const uniqueVehicles = Array.from(uniqueVehicleIds);
  // let vehicles = await vehicleModel.find();
  res.render("My rented", { user, uniqueVehicles });
});

//rented

router.get("/myv/:id", async function (req, res) {
      let user = await userModel.findOne({email:req.user.email}).populate({
        path: "Bookmark",
        populate: {
          path: "vehicleId",
        },
      });
       
     let myv = await vehicleModel
     .findOne({ _id: req.params.id })
     .populate("BookingId");
  
      res.render("myv", { user:user, myv:myv });
});

router.get("/sv/:id", async function (req, res, next) {
  let user = await userModel.findOne({ email: req.user.email }).populate({
    path: "Bookmark",
    populate: {
      path: "vehicleId",
    },
  });
  let sv = await vehicleModel
    .findOne({ _id: req.params.id })
    .populate("BookingId");
  res.render("sv", { user, sv });
});

//profile

//invalid

router.get("/invalid", async function (req, res, next) {
  if (req.isAuthenticated()) {
    let user = await userModel.findOne({ email: req.user.email });
    res.render("urental", { user });
  } else {
    res.redirect("/login");
  }
});

//invalid

//about

router.get("/about", async function (req, res, next) {
  if (req.isAuthenticated()) {
    let user = await userModel.findOne({ email: req.user.email });
    res.render("about", { user ,user});
  } else {
    res.render("about",{user:null});
  }
});

//about

router.get("/service", async function (req, res, next) {
  if (req.isAuthenticated()) {
    let user = await userModel.findOne({ email: req.user.email });
    res.render("services", { user:user });
  } else {
    res.render("services",{user:null});
  }
});

router.get("/homelogin", isLoggedIn, async function (req, res) {
  let user = await userModel.findOne({ email: req.user.email });
  res.render("homelogin", { user });
});

// /update photu/

router.post("/uploadphotu",isLoggedIn,userimagesupload.single("filenames"),
  async function (req, res) {
    let user = await userModel.findOne({ email: req.user.email });
    user.userProfileimg = req.file.filename;
    user.save();
    res.redirect("back");
  }
);

// update photu

// update user.

router.post("/update", isLoggedIn, function (req, res) {
  userModel
    .findOneAndUpdate(
      { email: req.user.email },
      {
        name: req.body.name,
        lastname:req.body.lastName,
        contactnumber: req.body.contactnumber,
        email: req.body.email,
        dob: req.body.DOB,
        isRental: req.body.isRental,
      }
    )
    .then(function () {
      res.redirect("/profile");
    });
});

// update user

router.get("/login", function (req, res) {
  res.render("login",{user:null});
});

router.get("/edit", async function (req, res) {
  let user = await userModel.findOne({ email: req.user.email });
  console.log(user.dob);
  res.render("edit", { user });
});

router.get("/sign", function (req, res) {
  res.render("sign",{user:null});
});

router.get("/editV/:id", async function (req, res) {
  let user = await userModel.findOne({ email: req.user.email });
  let vehicle = await vehicleModel.findOne({ _id: req.params.id });
  res.render("editV", { vehicle, user });
});

// delete vehicle

router.get("/delete/vehicle/:id", isLoggedIn, async function (req, res) {
  const deletedId = req.params.is;
  let deleted = await vehicleModel.findOneAndDelete({ _id: req.params.id });
  let user = await userModel.findOne({ email: req.user.email });
  user.vehicles.splice(deletedId, 1);
  user.save();
  res.redirect("/profile");
});

router.get("/delete/Booking/:vehicle/:book", isLoggedIn, async function (req, res) {
  const deletedId = req.params.book;
  let deleted = await bookingModel.findOneAndDelete({ _id: deletedId });
  let user = await userModel.findOne({ email: req.user.email });
  let v = await vehicleModel.findOne({ _id:req.params.vehicle});
  v.BookingId.splice(deletedId, 1);
  v.save();
  // let user = await userModel.findOne({ email: req.user.email });
  var date = Date.now();
  if (user) {
    crypto.randomBytes(17, async function (err, buff) {
      var rnstr = buff.toString("hex");
      await user.save();
      mailer2(user.email, user._id,user.name,v.vehicleBrand,v.vehicleName,deleted.startDate,deleted.endDate,deleted.fromLocation,deleted.toLocation,date, rnstr).then(function () {});
    });
  } else {
    res.send("no account!");
  }
  res.redirect("/");
});

// router.post("/cancel/booking", async function (req, res) {
//   let user = await userModel.findOne({ email: req.user.email });
//   if (user) {
//     crypto.randomBytes(17, async function (err, buff) {
//       var rnstr = buff.toString("hex");
//       await user.save();
//       mailer2(user.email, user._id,user.name, rnstr).then(function () {});
//     });
//   } else {
//     res.send("no account!");
//   }
//   res.redirect("/");
// });

// delete vehicle

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect("/");
  }
}

function isLoggedout(req, res, next) {
  if (req) {
    res.redirect("/home");
  } else {
    return next();
  }
}

router.get("/success", function (req, res) {
  res.send("logged in!");
});

router.get("/failed", function (req, res) {
  res.send("logged in failed!");
});

// forgot pass

router.get("/forgot", function (req, res) {
  res.render("forgot");
});

router.post("/forgot", async function (req, res) {
  let user = await userModel.findOne({ email: req.body.email });
  if (user) {
    crypto.randomBytes(17, async function (err, buff) {
      var rnstr = buff.toString("hex");
      (user.token = rnstr), (user.expiringTime = Date.now() + 3000000);
      await user.save();
      mailer(req.body.email, user._id,user.name, rnstr).then(function () {
        console.log("send mail!");
      });
    });
  } else {
    res.send("no account!");
  }
});

router.get("/reset/:userid/:token", async function (req, res) {
  let user = await userModel.findOne({ _id: req.params.userid });

  if (user.token === req.params.token && user.expiringTime > Date.now()) {
    res.render("newpass", { id: req.params.userid });
  } else {
    res.send("link expired!");
  }
});

router.post("/reset/:id", async function (req, res) {
  let user = await userModel.findOne({ _id: req.params.id });
  user.setPassword(req.body.newpassword, async function () {
    user.otp = "";
    await user.save();
    res.redirect("/profile");
  });
});

// forgot pass

router.post("/confirm/booking", async function (req, res) {
  let user = await userModel.findOne({ email: req.user.email });
  if (user) {
    crypto.randomBytes(17, async function (err, buff) {
      var rnstr = buff.toString("hex");
      await user.save();
      mailer1(user.email, user._id,user.name, rnstr).then(function () {});
    });
  } else {
    res.send("no account!");
  }
  res.redirect("/");
});



// update user
router.post("/update", isLoggedIn, function (req, res) {
  userModel
    .findOneAndUpdate(
      { username: req.user.username },
      {
        name: req.body.name,
        username: req.body.username,
        email: req.body.email,
        gender: req.body.gender,
        Caption: req.body.Caption,
      }
    )
    .then(function () {
      res.redirect("/profile");
    });
});

router.get("/edit", isLoggedIn, function (req, res) {
  userModel.findOne({ username: req.user.username }).then(function (data) {
    res.render("edit", { data });
  });
});

router.get("/vehicle/:vehicleBrand", async function (req, res) {
  var vb = req.params.vehicleBrand;
  if (req.isAuthenticated()) {
    let user = await userModel.findOne({ email: req.user.email });
    let data = await vehicleModel.find({
      vehicleBrand: req.params.vehicleBrand,
    });
    res.render("searchresult", { data: data, user: user, vb: vb });
  } else {
    let data = await vehicleModel.find({
      vehicleBrand: req.params.vehicleBrand,
    });
    res.render("searchresult", { data: data, user: null, vb: vb });
  }
});

router.get("/search/:value", async function (req, res) {
  const regex = new RegExp(req.params.value, "i");
  const users = await vehicleModel.find({
    $or: [{ vehicleName: regex }, { vehicleBrand: regex }],
  });
  res.json({ avail: users });
});

// chat gpt

router.get('/vehicles', (req, res) => {
  const limit = 6;
  const skip = parseInt(req.query.skip) || 0;

  vehicleModel.find().skip(skip).limit(limit).exec((err, vehicles) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Internal Server Error');
    }
    res.json(vehicles);
  });
});

module.exports = router;




