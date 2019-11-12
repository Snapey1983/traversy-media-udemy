// single line comment

/*
multi
line 
comment
*/



// Log to console
console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1, b:2});
console.table({a:1, b:2});

console.error('This is an error');
console.clear();
console.warn('This is a warning');

console.time('Hello'); //time how long code takes to exicute
console.log('Hello World'); //  / \
console.log('Hello World'); //   |
console.log('Hello World'); //   |
console.log('Hello World'); //   |
console.log('Hello World'); //   |
console.log('Hello World'); //  \ /
console.timeEnd('Hello'); //time how long code takes to exicute

// var, let, const

// var name = 'John Doe';
// console.log(name);

// name = "Steve Smith"; // reasign variable or let... not const
// console.log(name);

// //init var - set to undefined
// var greeting;
// console.log(greeting);
// greeting = 'Hello'; // asign value to undefined var
// console.log(greeting);

// // variables can include - letters, numbers, _, $
// // cannot start with a number 


// // multi-word vars

// var firstName = 'John'; // Camel Case 
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal Case



// // let

// var name = 'John Doe';
// console.log(name);

// name = "Steve Smith"; // reasign variable or let... not const
// console.log(name);

// Const - MUST ASIGN A VALUE IMMEDIATELY

const name = 'John';
console.log(name);
// name = 'sara';
// console.log(name); // will not reasign 

const person = {
    name: 'John',
    age: 30,
}

person.name = 'Sara';

console.log(person); // can change the data in the data set, but cannot change the const

const numbers = [1,2,3,4,5];

numbers.push(6);

console.log(numbers);



// DATA TYPES 

// Primitive Data Types - Stored directly in the location the varable accesses, Stored on the stack
// Strings - sequences of charactors (letters, numbers, symbols)
// Numbers - Numbers (integers, decimals, floats)
// Boolean - True & False
// Null - intentional empty value
// Undefined - all variables are undefined by default
// Symbols (ES6) - ?


// Reference Data Types - Accesses by reference, objects that are stored on the heap, a pointer to a location in memory

// Arrays
// Object Literals
// Functions
// Dates
// Anything Else
