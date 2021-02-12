// chaning the stream
// compressing the stream and creating new .gz file

const fs = require('fs');
const zlib = require('zlib');

// compress the input.txt file to input.txt.gz

const readerStream = fs.createReadStream('input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('input.txt.gz'))

console.log(`file compressed`);
