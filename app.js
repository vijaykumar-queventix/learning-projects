var fs = require('fs');

console.log('first console output');

fs.readFile('test.txt', (err, data)=>{
    if(err) throw err;
    console.log(`The data is comming from test.txt is : ${data}`);
});

console.log('This is last console output');