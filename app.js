// writing to a stream

const fs = require('fs');
const data = "It is simply leaning";

// creating writeable stream
let writereStream = fs.createWriteStream('output.txt');         // creating empty output.txt file

// write the data to stream with encoding to be utf-8
writereStream.write(data, 'utf-8');

// handling finish and error event
writereStream.on('finish', ()=>{
    console.log(`Task is completed :
content of data written in output.txt`)
})


writereStream.on('error', (error)=>{
    console.log(error);
});

// mark the end of file
writereStream.end();


console.log('program ended');