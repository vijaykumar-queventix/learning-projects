const mongoose = require('mongoose');


const DbConnecition = mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Db connected succussfully");
});

module.exports = DbConnecition;