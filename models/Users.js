const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstname : String,
    lastname : String,
    phone_number : Number,
    email : String,
    access_token : String,
    device_token : String,
    device_type : String,
    status : Number,
    created_on : Date,
    last_login : Date,
    otp : String,
    otp_isverified : Boolean
});

module.exports = mongoose.model('customers', userSchema);