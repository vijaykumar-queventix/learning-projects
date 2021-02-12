//promises

function addition(val){
return (val+5);
}
function Subtract(val){
return (val-3);
}
function multiplication(val){
return (val*5);
}

var promise = new Promise((resolve, reject)=>{ + 
    resolve(5);
    reject("error");
});


promise.then((value)=>{
    var  a =  addition(value);
    console.log(`value come from addtion : ${a}`);
    return a;
})
.then((a)=>{
    var b = Subtract(a)
    console.log(`Value comes from subtract : ${b}`)
    return b;
})
.then((b)=>{
    let c = multiplication(b)
    console.log(`Value come from multplication : ${c}`);
    return (msg=c);
})
.then((msg)=>{
    console.log(`The final output is ${msg}`)
})
.catch((err)=>{
    console.log(err);
})