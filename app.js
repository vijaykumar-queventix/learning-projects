const example=()=>{
    var name = 'demo'; // can be accessed to nearest function;
    var name1 = 'demo1';
          
    console.log("The string in variable name is : " + name );       // without template string
    console.log(`The string in variable name is : ${name}`)         // template string example

    // template string methods
    console.log(`The string in variable name is : ${name}`.startsWith('d'));     // if the variable string start with 'd' returns true otherwise false
    console.log(`The string in variable name is : ${name}`.endsWith('o'));      // if the variable string ends with 'o' returns true otherwise false
    console.log(`The string in variable name is : ${name}`.includes('em'));       // if the variable string includes  'e' returns true otherwise false
    console.log(`The string in variable name is : ${name} `.repeat(5));           // it will repeat the string 5 times   
    //  console.log(name).startsWith('d');

    console.log(name);

   
}
example();
