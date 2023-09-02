var mongoose = require('mongoose');

var vehicleSchema = mongoose.Schema({
     ownerId:{
          type: mongoose.Schema.Types.ObjectId, 
          ref:"user"
     },
     BookingId:[{
          type: mongoose.Schema.Types.ObjectId, 
          ref:"booking"
     }],
     pic:{
        type:Array,
        default:[]
     },     
     Shopname:String,
     Shopaddress:String,
     vehicleType:String,
     vehicleName:String,
     vehicleColor:String,
     vehicleNumber:String,
     YOM:{ type: Date, required: true },
     vehicleBrand:String,
     fuelType:String,
    //  picId:String,  
     transmissionType:String,
     RentalPrice:{ type: Number, default: false },
     SecurityDeposit:Number,
     seating:Number,
     Luggage:Number,
     Ac:{ type: Boolean, default: false },
     Es:{ type: Boolean, default: false },
     Gps:{ type: Boolean, default: false },
     Des:String,
     TC:String,
     insuranceP:String,
     insuranceSD:{ type: Date, required: true },
     insuranceED:{ type: Date, required: true }

},{timestamps:true,})

module.exports = mongoose.model("vehicle", vehicleSchema);
