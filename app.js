// object destructing

const bioData = {
    name : "demo",
    age : 20,
    degree : 'Msc',
    hobbies :{
        first : 'playing',
        second : 'learning'
    }
}

let{name, age, degree} = bioData;       // variable can be same as in object

let{name:myname, age:myage} = bioData   // here we can change variable names seprated by :

let {first, second} = bioData.hobbies;     // object from object    

console.log(`Hi my name is ${name}, My age is ${age}, And my highest qualification is ${degree}`);
console.log(`Hi my name is ${myname}, My age is ${myage}, And my highest qualification is ${degree}`);
console.log(name);
console.log(age);

console.log(first);
console.log(second);