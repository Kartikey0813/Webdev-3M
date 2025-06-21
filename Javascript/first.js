//learnig about console stamtements. 

console.log("Hello World");
console.log("This is a message in the console.");
console.log("This is a message in the console with a variable: ", 42);
console.log("This is a message in the console with a variable: ", "Hello, World!");
console.log("This is a message in the console with multiple variables: ", 42, "and", "Hello, World!");
console.log("This is a message in the console with an object: ", { key: "value" });
console.log("This is a message in the console with an array: ", [1, 2, 3, 4, 5]);
console.log("This is a message in the console with a boolean: ", true);
console.log("This is a message in the console with null: ", null);
console.log("This is a message in the console with undefined: ", undefined);
console.log("This is a message in the console with a symbol: ", Symbol("symbol description"));
console.log("This is a message in the console with a bigint: ", BigInt(12345678901234567890));
console.log("This is a message in the console with a date: ", new Date());
console.log("This is a message in the console with a regular expression: ", /abc/);
console.log("This is a message in the console with a custom object: ", { namee: "John", age: 30 });
console.log("This is a message in the console with a nested object: ", { person: { namee: "John", age: 30 }, address: { city: "New York", state: "NY" } });
console.log("This is a message in the console with a nested array: ", [[1, 2], [3, 4], [5, 6]]);


//learnig about Variables stamtements. 

// --> Variables are used to store data that can be used later in the program. In JavaScript, We can declare variables using `var`, `let`, or `const`.

let name = "John"; // Using let to declare a variable that can be reassigned

const age = 30; // Using const to declare a variable that cannot be reassigned

var isStudent = true; // Using var to declare a variable that can be reassigned

console.log("Name:", name); // This will print "Name: John"
// We can also declare multiple variables in one line
let city = "New York", country = "USA", occupation = "Developer";
console.log("City:", city, "Country:", country, "Occupation:", occupation);
// Variables can also be declared without an initial value
let hobby; // Declaring a variable without an initial value
console.log("Hobby:", hobby); // This will print undefined since hobby is not assigned a value yet
// We can assign a value to a variable later in the code
hobby = "Reading"; // Assigning a value to the hobby variable
console.log("Hobby after assignment:", hobby); // This will print "Reading"
// Variables can also be reassigned to a new value
name = "Jane"; // Reassigning a new value to the name variable
console.log("Name after reassignment:", name); // This will print "Jane"
// We can also use variables in expressions
let a = 10;
let b = 5;
let sum = a + b; // Using variables in an expression
console.log("Sum of a and b:", sum); // This will print 15
// Variables can also be used in functions
function greet() {
    console.log("Hello, " + name + "!"); // Using the name variable in a function
}
greet(); // Calling the greet function, which will print "Hello, Jane!"
// We can also use variables in conditional statements
if (isStudent) {
    console.log(name + " is a student."); // This will print "Jane is a student."
} else {
    console.log(name + " is not a student.");
}
// Variables can also be used in loops
for (let i = 0; i < 5; i++) {
    console.log("Loop iteration:", i); // This will print the loop iteration number
}
// Variables can also be used to store functions
function sayHello() {
    console.log("Hello, world!");
}
// Assigning a function to a variable
let helloFunction = sayHello; // Assigning the function to a variable
// Calling the function using the variable
helloFunction(); // This will print "Hello, world!"
// Variables can also be used to store objects
let person = {
    name: "John",
    age: 30,
    isStudent: true
};
// Accessing object properties using variables
console.log("Person's name:", person.name); // This will print "John"
console.log("Person's age:", person.age); // This will print 30
console.log("Is person a student?", person.isStudent); // This will print true
// We can also use variables to store arrays
let numbers = [1, 2, 3, 4, 5]; // Declaring an array variable
// Accessing array elements using variables
console.log("First number:", numbers[0]); // This will print 1
console.log("Second number:", numbers[1]); // This will print 2
// We can also use variables to store functions in arrays
let functionsArray = [sayHello, function() { console.log("This is an anonymous function!"); }];
// Calling the functions stored in the array
functionsArray[0](); // This will print "Hello, world!"
functionsArray[1](); // This will print "This is an anonymous function!"

// Variables can also be used to store other variables
let x = 10;
let y = x; // Assigning the value of x to y
console.log("Value of x:", x); // This will print 10
console.log("Value of y:", y); // This will print 10
// Reassigning x to a new value
x = 20; // Changing the value of x
console.log("Value of x after reassignment:", x); // This will print 20
console.log("Value of y after x reassignment:", y); // This will still print 10, since y holds the original value of x
// Variables can also be used to store functions that take parameters
function add(a, b) {
    return a + b; // Function that takes two parameters and returns their sum
}
let result = add(5, 10); // Calling the add function with parameters
console.log("Result of add function:", result); // This will print 15
// Variables can also be used to store the results of expressions
let expressionResult = (x + y) * 2; // Using variables in an expression
console.log("Result of expression (x + y) * 2:", expressionResult); // This will print 40
// Variables can also be used to store boolean values
let isTrue = true; // Declaring a boolean variable
let isFalse = false; // Declaring another boolean variable
console.log("Is true:", isTrue); // This will print true
console.log("Is false:", isFalse); // This will print false
// Variables can also be used to store null values
let nullValue = null; // Declaring a variable with a null value
console.log("Null value:", nullValue); // This will print null
// Variables can also be used to store undefined values
let undefinedValue; // Declaring a variable without an initial value
console.log("Undefined value:", undefinedValue); // This will print undefined
// Variables can also be used to store symbols
let symbolValue = Symbol("description"); // Declaring a variable with a symbol value
console.log("Symbol value:", symbolValue); // This will print the symbol value
// Variables can also be used to store BigInt values    
let bigIntValue = BigInt(12345678901234567890); // Declaring a variable with a BigInt value
console.log("BigInt value:", bigIntValue); // This will print the BigInt value
// Variables can also be used to store Date objects
let dateValue = new Date(); // Declaring a variable with a Date object
console.log("Date value:", dateValue); // This will print the current date and time
// Variables can also be used to store regular expressions
let regexValue = /abc/; // Declaring a variable with a regular expression
console.log("Regular expression value:", regexValue); // This will print the regular expression
// Variables can also be used to store custom objects
let customObject = {
    name: "Alice",
    age: 25,
    hobbies: ["reading", "traveling", "coding"]
};
console.log("Custom object:", customObject); // This will print the custom object
// Accessing properties of the custom object
console.log("Custom object's name:", customObject.name); // This will print "Alice"
console.log("Custom object's age:", customObject.age); // This will print 25
console.log("Custom object's hobbies:", customObject.hobbies); // This will print the hobbies array
// Variables can also be used to store nested objects
let nestedObject = {
    person: {
        name: "Bob",
        age: 40
    },
    address: {
        city: "Los Angeles",
        state: "CA"
    }
};
console.log("Nested object:", nestedObject); // This will print the nested object
// Accessing properties of the nested object
console.log("Nested object's person name:", nestedObject.person.name); // This will print "Bob"
console.log("Nested object's person age:", nestedObject.person.age); // This will print 40
console.log("Nested object's address city:", nestedObject.address.city); // This will print "Los Angeles"
console.log("Nested object's address state:", nestedObject.address.state); // This will print "CA"
// Variables can also be used to store nested arrays
let nestedArray = [[1, 2], [3, 4], [5, 6]]; // Declaring a variable with a nested array
console.log("Nested array:", nestedArray); // This will print the nested array
// Accessing elements of the nested array
console.log("First element of nested array:", nestedArray[0]); // This will print [1, 2]
console.log("Second element of nested array:", nestedArray[1]); // This will print [3, 4]
console.log("Third element of nested array:", nestedArray[2]); // This will print [5, 6]


                            // Now turning to Data Types in JavaScript

// Data Types in JavaScript
// JavaScript has several built-in data types that can be categorized into two main groups: primitive types and reference types.
// Primitive Types
// Primitive types are immutable values that are not objects. They include:
let stringValue = "Hello, World!"; // String
let numberValue = 42; // Number
let booleanValue = true; // Boolean
let nulllValue = null; // Null
let undefiinedValue; // Undefined
let symbolVValue = Symbol("description"); // Symbol
let bigIntVValue = BigInt(12345678901234567890); // BigInt
let dateVValue = new Date(); // Date



let regexVValue = /abc/; // Regular Expression
// Reference Types
// Reference types are mutable values that are objects. They include:
let objectValue = { key: "value" }; // Object
let arrayValue = [1, 2, 3, 4, 5]; // Array
let functionValue = function() { console.log("This is a function!"); }; // Function
let customObjectValue = { name: "John", age: 30 }; // Custom Object
let nestedObjectValue = { person: { name: "John", age: 30 }, address: { city: "New York", state: "NY" } }; // Nested Object
let nestedArrayValue = [[1, 2], [3, 4], [5, 6]]; // Nested Array
// Data Type Checking

const student = {
    fullName: "Kartikey Mishra",
    age: 25,
    college: "IIT Madras",
    address: "Noida, India"
}
