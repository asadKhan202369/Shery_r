var mongoose = require('mongoose');

var bookingSchema = mongoose.Schema({
     vehicleId:{
          type: mongoose.Schema.Types.ObjectId, 
          ref:"vehicle"
     },
     BookerId:{
        type: mongoose.Schema.Types.ObjectId, 
          ref:"user"
     },
     totalDays:Number,
     fromLocation:String,
     toLocation:String,
     startDate:{ 
        type: Date,
        required: true
     },
     endDate:{ 
        type: Date,
        required: true
     }

},{timestamps:true,})

module.exports = mongoose.model("booking", bookingSchema);





