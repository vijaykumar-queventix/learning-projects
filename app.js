const express = require('express');
const { send } = require('process');
const app = express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const userroutes = require('./routes/usersroutes')
const bodyParser = require('body-parser');



const users = require('./model/userschema')

// connecting to db
const db = require('./db');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use('/', userroutes);

app.listen(3000, () => {
    console.log(`server running on port 3000`)
});