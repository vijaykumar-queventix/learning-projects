const example=()=>{
    var name = 'demo'; // can be accessed to nearest function;
    name = 'demoChanged';
    var name = 'created again with var';        // vARiable declared with var keyword can be redeclare

    console.log(name);

    let name1 = 'demo2';
    name1 = 'demo2Changed';
    //let name1 = "Cannot create again with let keyword";         // vARiable declared with let keyword cannot be redeclare

    const name2 = 'demo3';
    //name2 = 'demo3Changed';     // connot reassign value bcz of const keyword


    console.log(name1);
    console.log(name2);
}

//console.log(name + "ahjka");
//console.log(name1 + "let")

example();

let name1 = "Can declared outside of blocked scope";
console.log(name1);

const name2 = "can be redeclare outside of blocked scope";
console.log(name2);
