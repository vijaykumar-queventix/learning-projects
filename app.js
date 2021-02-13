// Default parametes

// Es5

const Arrowfunction = (parameter1,parameter2)=>{
    parameter2 = (typeof(parameter2) !== "undefined") ? parameter2 : 20 ;       // difind value of parameter2 is 20 if not defined on calling function
    let c = parameter1+ parameter2;
    console.log(c);
}

Arrowfunction(2);

// Es6

const Defultfunction = (parameter1,parameter2=20)=>{            // difind value of parameter2 is 20 if not defined on calling function
    let c = parameter1+ parameter2;
    console.log(c);
}

Defultfunction(4);

// rest parameters 

const sum = (...inputs)=>{                      // converts the arguments in an array 
    let total = 0;
    for(let i of inputs){
        total += i; 
        //console.log(total);
    }
    console.log(inputs);
    console.log(total);
}

sum(1,2,4,5,8,6);               // we can give infinte no. of arguments 
sum(1,2,4,5,8,6,5,7,8,4,7);  