// creates an empty buffer of lenth 15
var buff = Buffer.alloc(15)
console.log(buff);

// convert string into binary data
const b = Buffer.from('abc');
console.log(b);

const b1 = Buffer.from('abcd');
console.log(b1);

// creates buffer of 10 byte
const c = Buffer.allocUnsafe(10);
console.log(c);


// it compares two buffers and return
// 0 if equal
// 1 if first buffer is higher than second buffer
// -1 if first buffer is lower than second buffer
const b3 = Buffer.compare(b, b1);
console.log(b3);

// joins array buffer in single buffer
const arr = [b, b1]
const combinedbuff = Buffer.concat(arr);
console.log(combinedbuff);

console.log('<-------------------------------------------->');

// data encoding
let originalString = 'this is original string';
let buffobj = Buffer.from(originalString, 'utf-8');
console.log(buffobj);

let base64String = buffobj.toString('base64');
console.log(`This is encoded base64 string is : ${base64String}`);

let utf8String = buffobj.toString('utf-8');
console.log(`This is encoded utf-8 string : ${utf8String}`);

let hexString = buffobj.toString('hex');
console.log(`This is encoding hex string is : ${hexString}`);



console.log('<-------------------------------------------->');

// decoding hex string to utf-8 string
let hexbuffObj = Buffer.from(hexString, 'hex');           // converting hexstring to buffer object
let decodedString = hexbuffObj.toString('utf-8');       // decoding

console.log(`This is decoding hex string to utf-8 string : ${decodedString}`);


