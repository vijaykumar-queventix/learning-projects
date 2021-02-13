// array destructing

const myproglang = ['js','php','java','python','c'];

// ES5

// var top1 = myproglang[0];    
// var top2 = myproglang[1];
// var top3 = myproglang[2];
// var top4 = myproglang[3];

// console.log(top1);
// console.log(top2);
// console.log(top3);

// Es6

let [top1, top2, top3, top4] = myproglang ;             // assigns the array values to variable respectively in one line
let [top5,,,top6] = myproglang ;                        // top5's index in array is [0] and top6's index in array is [4] bcz of ,,,
console.log(top1);
console.log(top2);
console.log(top3);
console.log(top6);
