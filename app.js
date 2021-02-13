// classes in javascript

// Defing class
class student {
    constructor (name, age , Class){            // constructor of class
        this.name = name,
        this.age = age,
        this.Class = Class
    }
    // instence method
    bioData(){
        console.log(`name : ${this.name}, age : ${this.age}, class : ${this.Class}`);
    }

    static accessBioData(){                         // static mathod cannot be accessed by obj created by student class
        console.log(`name is : ${this.name}, age is : ${this.age}, class is : ${this.Class}`);
    }
}

// creating object (instance of class)

var obj1 = new student('demo',15,'bca');
console.log(obj1);
obj1.bioData();
//obj1.accessBioData();


// creating another object with student class
let obj2 = new student('demo2',45, 'Mcs');
obj2.bioData();

// inherting student class properties
class player extends student{
    constructor(name, age , Class,hobbies, city){
        super(name, age , Class);           // inheritng constructor properties of student constructor
        this.hobbies = hobbies,
        this.city = city
    }

    // instence method
    about(){
        console.log(` hey my name is ${this.name} and my game is ${this.hobbies}.`);
    }
}

let obj3 = new player('demo',43,'abc','cricket','mohali');
obj3.bioData();
obj3.about();
//obj3.accessBioData();