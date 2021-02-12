// callback hell

addition(2, (addData,err)=>{
    if(!err) {
        Subtract(addData, (subData, err)=>{
        if(!err) {
            multiplication(subData,(multData, err)=>{
                if(!err){
                    console.log(multData);
                }
        });
       
    }
    });
}
});

function addition(val,callback){
callback(val+5);
}
function Subtract(val,callback){
callback(val-3);
}
function multiplication(val,callback){
callback(val*5);
}
