// Spread Operator

var ArrayValues = [1,2,4,2,5,1,4];
var array2 = [4,4,"a","s"];

const sum = (a,b,c)=>{
    let total = a+b+c;
    console.log(total)
}
console.log(...ArrayValues);        // returns array values only

sum(...ArrayValues);        // it will assign values of Array as an parameter in sum function

sum();


// spread operator also replaces concat function

ArrayValues = [...ArrayValues, array2];         // ES6 Way
console.log(ArrayValues);

ArrayValues = ArrayValues.concat(array2);           // ES5 Way
console.log(ArrayValues);

// spread operator also replaces copy function

let arrc1 = [1,2,1];            // Esc 5 way
let arrc2 = arrc1;
console.log(arrc1);
console.log(arrc2);

arrc2.push('20',5,8);               // this will also push in arrc1
console.log(arrc2);                 
console.log(arrc1);


// ES6 way

let arr1 = [1,5,2];
let arr2 = [...arr1, 5, 5];              // this will add values only in arr2
console.log(arr1);
console.log(arr2);
console.log(typeof(arr2));
