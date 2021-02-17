var express = require('express');
var router = express.Router();
const users = require('../models/Users');
const jwt = require('jsonwebtoken');



// token authentication
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    console.log('Auth Hearder : ' + authHeader);
    const token = authHeader && authHeader.split(' ')[1];
    console.log("token :" + token);
    if (token == null) return res.status(200).send({
        'statusCode': 404,
        'messsage': 'token not found'
    })

    jwt.verify(token, "loginUser", (err, decoded) => {
        if (err) return res.status(200).send({
            'statusCode': 401,
            'message': 'Invalid token'
        });
        //res.send(decoded);
        next();
    })
}

// require controller module
const custmor_controller = require('../controllers/customer');



/**
 * @swagger
 * /login:
 * get : 
 *  description: cutomers get request
 * responses : 
 *      200:
 *              description : a successful response
 */

 router.get('/login', (req, res )=>{
     console.log('hello this is login route');
     res.send('hello');
 })


// router.get('/', custmor_controller.customer_registration_get);

// /* GET customer listing */
// router.post('/', custmor_controller.customer_registration_post);


// // router.get('/login', custmor_controller.customer_login_get);
// router.post('/login', custmor_controller.customer_verify_otp);

// // update profile
// router.put('/update/:id', authenticateToken, custmor_controller.customer_update);

module.exports = router;
