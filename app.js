var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const mongoose = require('mongoose');
const { hostname } = require('os');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');

  

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(()=>{
    console.log(`MongoDB connected : ${hostname}`)
});
    

// setup swagger
// var swaggerUi = require('swagger-ui-express');
// var swaggerJSDoc = require('swagger-jsdoc');

// const options = {
//     definition: {
//         //openapi : "3.0.3",
//         inf0: {
//             title: "Customer API",
//             description : "Customer api information"
//         },
//         servers: ["http://localhost:3000"]
//     },
//     apis: ['./routes/users.js']  
// }



// const swaggerDocs = swaggerJSDoc(options);

//  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
 //app.get('/api-docs', swaggerUi.setup(swaggerDocs));
 swaggerJsdoc = require("swagger-jsdoc"),
 swaggerUi = require("swagger-ui-express");
 const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Test",
        version: "0.0.1",
        description:
          "For testing",
        
      },
      servers: [
        {
          url: "http://localhost:3000/",
        },
      ],
    },
    apis: ["./routes/swagger.js"],
  };
  
  const specs = swaggerJsdoc(options);
  app.use(
    "/api-testing",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );



// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', usersRouter);
//app.use('/users', usersRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
