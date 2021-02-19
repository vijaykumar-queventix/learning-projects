const usermodel = require('../model/userschema');
const passport = require('passport');
const { body, validationResult } = require('express-validator');

const bcrypt = require('bcrypt');


exports.register = async (req, res) => {

    // checking if user existense
    let validuser = await usermodel.findOne({ name: req.body.name });
    if (validuser) return res.status(200).send({
        'status': 400,
        'message': 'user already exists',
        'date': validuser
    });


    // password hassing
    let hasspassword = await bcrypt.hash(req.body.password, 10);

    // geting data from body
    let registerUser = new usermodel({
        name: req.body.name,
        password: hasspassword
    });

    try {

        // console.log(check(req.body.name).isEmail());

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


exports.login = async (req, res) => {


    let validuser = await usermodel.findOne({ name: req.body.name });
    if (!validuser)
        return res.status(200).send({
            'status': 404,
            'message': 'user not find '
        });


    let validpass = await bcrypt.compare(req.body.password, validuser.password);
    if (!validpass)
        return res.status(200).send({
            'status': 404,
            'message': 'Password not matched '
        });

    return res.status(200).send({
        'status': 200,
        'message': 'user logged in ',
        'data': validuser
    });
}




