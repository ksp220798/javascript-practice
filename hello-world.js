console.log("hello world.");

// use of instanceof 

//let languages = ["HTML", "CSS", "JavaScript"];
let languages = {
    name : "kundan"
};

console.log(languages instanceof Array);
console.log(languages instanceof Object);
console.log(languages instanceof String);
console.log(languages instanceof Number);


//use of break with outerloop concept
outerLoop:
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;  
        }
        console.log(`i: ${i}, j: ${j}`);
    }
}

// map declaration
const m = new Map([
    ["name", "Akash"],
    ["age", 25],
    ["city", "Noida"]]
);

for (let [key, value] of m) {
    console.log(`${key}: ${value}`);
}

//OOPS in js with object

// Defining object
let person = {
    first_name: 'Mukul',
    last_name: 'Latiyan',

    //method
    getFunction: function () {
        return (`The name of the person is 
          ${person.first_name} ${person.last_name}`)
    },
    //object within object
    phone_number: {
        mobile: '12345',
        landline: '6789'
    }
}
console.log(person.getFunction());
console.log(person.phone_number.landline);



// Object.create() example a
// simple object with some properties
const coder = {
    isStudying: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am I 
              studying?: ${this.isStudying}.`)
    }
}
// Object.create() method
const me = Object.create(coder);

// "name" is a property set on "me", but not on "coder"
me.name = 'Mukul';

// Inherited properties can be overwritten
me.isStudying = true;

me.printIntroduction();


// Defining class using es6
class Vehicle {
    constructor(name, maker, engine) {
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails() {
        return (`The name of the bike is ${this.name}.`)
    }
}
// Making object with the help of the constructor
let bike1 = new Vehicle('Hayabusa', 'Suzuki', '1340cc');
let bike2 = new Vehicle('Ninja', 'Kawasaki', '998cc');

console.log(bike1.name);    // Hayabusa
console.log(bike2.maker);   // Kawasaki
console.log(bike1.getDetails());




// Encapsulation example
class person {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    add_Address(add) {
        this.add = add;
    }
    getDetails() {
        console.log(`Name is ${this.name},
        Address is: ${this.add}`);
    }
}

let person1 = new person('Mukul', 21);
person1.add_Address('Delhi');
person1.getDetails();




// Abstraction example
function person(fname, lname) {
    let firstname = fname;
    let lastname = lname;

    let getDetails_noaccess = function () {
        return (`First name is: ${firstname} Last 
            name is: ${lastname}`);
    }

    this.getDetails_access = function () {
        return (`First name is: ${firstname}, Last 
            name is: ${lastname}`);
    }
}
let person2 = new person('Mukul', 'Latiyan');
console.log(person2.firstname);
console.log(person2.getDetails_noaccess);
console.log(person2.getDetails_access());




// Inheritance example
class person {
    constructor(name) {
        this.name = name;
    }
    // method to return the string
    toString() {
        return (`Name of person: ${this.name}`);
    }
}
class student extends person {
    constructor(name, id) {
        // super keyword for calling the above 
        // class constructor
        super(name);
        this.id = id;
    }
    toString() {
        return (`${super.toString()},
        Student ID: ${this.id}`);
    }
}
let student1 = new student('Mukul', 22);
console.log(student1.toString());

