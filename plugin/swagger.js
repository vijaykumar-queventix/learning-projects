var express = require('express');
const router = express.Router();

// setup swagger
var swaggerUi = require('swagger-ui-express');
var swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi : "3.0.0",
        inf0: {
            title: "Customer API",
            description : "Customer api information"
        },
        servers: ["http://localhost:3000"]
    },
    apis: ['./routes/*.js']  
}



const swaggerDocs = swaggerJSDoc(options);

 app.use('/api-docs', swaggerUi.serve);
 app.get('/api-docs', swaggerUi.setup(swaggerDocs))
  
//router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
