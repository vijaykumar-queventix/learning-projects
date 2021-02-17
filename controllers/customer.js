const users = require('../models/Users');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const { findOne, findOneAndUpdate } = require('../models/Users');


exports.customer_registration_get =(req, res)=>{
    console.log("request");
    res.status(200).send('get api gfs')
}

exports.customer_registration_post = async (req, res) => {

    const validno = await users.findOne({ phone_number: req.body.phone_number });
    console.log(validno);
    if (validno) {
        // generating token if phone no. already registerd
        let token = await jwt.sign({ phone_number: req.body.phone_number, otp: "1234" }, 'loginUser')

        // updated generated token in database
        let updatedData = await users.findOneAndUpdate({ phone_number: req.body.phone_number }, { 
            access_token: token,
            otp_isverified : false
         }, { new: true });

        // sending response
        res.status(200).send({
            'statusCode': 200,
            'message': "Phone no. already registerd",
            'token' : 'new token generated and updated'
        });
    } else {
        //let generateotp = (Math.floor(1000 + Math.random() * 9000)).toString();
        const token = await jwt.sign({ phone_number: req.body.phone_number, otp: "1234" }, 'loginUser');

        const register = new users({
            firstname: "",
            lastname: "",
            phone_number: req.body.phone_number,
            email: "",
            access_token: token,
            device_token: "",
            device_type: "",
            status: 0,
            created_on: Date.now(),
            last_login: Date.now(),
            otp: "1234",
            otp_isverified: false
        })

        try {
            const registered = await register.save();
            res.status(200).send(registered);

        } catch (error) {
            console.log("error : " + error);
        }
    }
}


// verifying otp  /login api
exports.customer_verify_otp = async (req, res) => {
    const validNo = await users.find({ phone_number: req.body.phone_number });
    const validOtp = await users.find({ otp: req.body.otp });

    if (validNo.length != 0 && validOtp.length != 0) {

        let updatedData = await users.findOneAndUpdate({ phone_number: req.body.phone_number }, {
            otp_isverified: true,
        }, { new: true });

        res.status(200).send({
            'statusCode': 200,
            'message': 'otp varified',
            'isverified': 'true',
            'data': updatedData
        });
    } else if (validNo.length == 0) {
        return res.status(200).send({
            'statusCode': 403,
            'message': "Invalid phone Number"
        });
    } else if (validOtp.length == 0) {
        res.send({
            'statusCode': 403,
            'message': "Invalid otp"
        });
    }


}


exports.customer_update = async (req, res) => {
    let userId = req.params.id;
    
    console.log(userId);
    try {
        let updateUser = await users.findOneAndUpdate({ _id: userId }, {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            status : 1
        }, { new: true });
        res.status(200).send({
            'statuscode': 205,
            'message': 'Profile Updated Successfully',
            "data": updateUser
        });
    } catch (error) {
        console.log(error)
    }
}
