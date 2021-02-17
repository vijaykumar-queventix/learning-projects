const mongoose = require('mongoose');

const dbConnection = mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(()=>{
        console.log(`MongoDB connected : ${hostname}`)
    });

module.exports = dbConnection;