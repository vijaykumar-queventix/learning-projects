// working with async
const fs = require('fs');
const { resolve } = require('path');
let obj = {};

const doA = ()=>{
    return new Promise((reslove, reject)=>{
        fs.readFile('test.txt', 'utf-8', (err, data)=>{
            if(err) throw err;
            reslove(data.toString());
    
        })
    })
    
}

const doB = ()=>{
    return new Promise((resolve, reject)=>{
        fs.readFile('test2.txt', 'utf-8', (err, data)=>{
            if(err) throw err;
            resolve (data.toString());
        })
    })
   
}

async function main (){
    obj.data1 = await doA();
    obj.data2 = await doB();
    console.log(obj)

};

main();
