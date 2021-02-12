// Piping the stream

const fs = require('fs');

// creating read stream
const readerStream = fs.createReadStream('input.txt');

// creating writing stream
const writingStream = fs.createWriteStream('output.txt');


// pipe read the stream and write to stream
// read input.txt and write content of imput.txt to output.txt
readerStream.pipe(writingStream);
console.log('program ended');
