// reading from a stream

const fs = require('fs');
let data = "";

// creating reading stream
let readerStream = fs.createReadStream('test.txt');
//console.log(readerStream);

// set encoding to be utf-8
readerStream.setEncoding('utf-8');

// handle stream events data, end and error 

readerStream.on('data', (chunk)=>{
    data+=chunk;
});


readerStream.on('end', ()=>{
    console.log(data);
});

readerStream.on('error', (error)=>{
    console.log(`ERROR : ${error}`)
});


console.log('Program end');
