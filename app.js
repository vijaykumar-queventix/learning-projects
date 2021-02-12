// decompressing the stream

const fs = require('fs');
const zlib = require('zlib');

// decompress the input.txt.gz file to input.txt

const readerStream = fs.createReadStream('input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('input.txt'));

console.log('File decompressed');
