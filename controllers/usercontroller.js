const usermodel = require('../model/userschema');
const passport = require('passport');
const { body, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

exports.register_get = (req, res) => {
    req.flash('message', 'Success!!');      // sending a flash message while redirecting
    res.redirect('/login');
}

exports.login_get = (req, res) => {
    res.send(req.flash('message'));

}

exports.dashboard_get = (req, res) => {
    res.status(200).json({
       'statusCode' : 200,
       'message' : 'this is dashboard page'
    })
}

/**
 * post register api
 * 
 */
exports.register_post = async (req, res) => {

    // checking if user existense
    let validuser = await usermodel.findOne({ email: req.body.email });
    if (validuser) return res.status(200).send({
        'status': 400,
        'message': 'user already exists',
        'date': validuser
    });


    // password hassing
    let hasspassword = await bcrypt.hash(req.body.password, 10);

    // geting data from body
    let registerUser = new usermodel({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        phone_number: req.body.phone_number,
        email: req.body.email,
        password: hasspassword,
        access_token: "",
        status: 0,
        created_date: Date.now(),
        last_login: ""
    });

    try {


        // saving data in db and sending response
        let saveData = registerUser.save();
        res.status(200).send({
            'status': 200,
            'message': 'user registered successfully',
            'date': registerUser
        })
    } catch (error) {
        console.log(error);
    }
}



/**
 * post register api
 * 
 */
exports.login_post = async (req, res) => {

    let loginEmail = req.body.email;
    let loginPassword = req.body.password;


    // checking user existence
    let validuser = await usermodel.findOne({ email: loginEmail });
    if (!validuser)
        return res.status(200).send({
            'status': 404,
            'message': 'user not find '
        });

    // comparing password
    let validpass = await bcrypt.compare(loginPassword, validuser.password);
    if (!validpass)
        return res.status(200).send({
            'status': 404,
            'message': 'Password not matched '
        });

    // Generating token for access_token update
    let token = await jwt.sign({ email: validuser.email, phone_number: validuser.phone_number }, process.env.JWT_SCRT_KEY)


    // updating access_token, last_login and status
    try {
        await validuser.updateOne({
            status : 1,
            access_token: token,
            last_login : Date.now()
        }, { new: true })
    } catch (error) {
        console.log(error);
    }


    return res.status(200).send({
        'status': 200,
        'message': 'user logged in ',
        'data': validuser
    });
}


exports.update_put = (req, res)=>{

}



