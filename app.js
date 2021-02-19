const express = require('express');
const { send } = require('process');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const userroutes = require('./routes/usersroutes')
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');  
const users = require('./model/userschema')

// defining port
const port = process.env.PORT || 3000;

// connecting to db
const {dbConnection} = require('./db');
dbConnection();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Express session
app.use(session({ 
    secret:process.env.SESSION_SCRT_KEY, 
    saveUninitialized: true, 
    resave: true
})); 

app.use(flash());


app.use('/', userroutes);

app.listen(port, () => {
    console.log(`server running on port ${port}`);
});