// single line comment

 /*
multi
line 
comment
 */



// Log to console
// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is an error');
// console.clear();
// console.warn('This is a warning');

// console.time('Hello'); //time how long code takes to exicute
// console.log('Hello World'); //  / \
// console.log('Hello World'); //   |
// console.log('Hello World'); //   |
// console.log('Hello World'); //   |
// console.log('Hello World'); //   |
// console.log('Hello World'); //  \ /
// console.timeEnd('Hello'); //time how long code takes to exicute

// var, let, const

// var name = 'John Doe';
// console.log(name);

// name = "Steve Smith"; // reasign variable or let... not const
// console.log(name);

//init var - set to undefined
// var greeting;
// console.log(greeting);
// greeting = 'Hello'; // asign value to undefined var
// console.log(greeting);

// variables can include - letters, numbers, _, $
// cannot start with a number 


// multi-word vars

// var firstName = 'John'; // Camel Case 
// var first_name = 'Sara'; // Underscore
// var FirstName = 'Tom'; // Pascal Case


// let

// var name = 'John Doe';
// console.log(name);

// name = "Steve Smith"; // reasign variable or let... not const
// console.log(name);

// Const - MUST ASIGN A VALUE IMMEDIATELY
// const name = 'John';
// console.log(name);
// name = 'sara';
// console.log(name); // will not reasign 

// const person = {
//     name: 'John',
//     age: 30,
// }

// person.name = 'Sara';

// console.log(person); // can change the data in the data set, but cannot change the const

// const numbers = [1,2,3,4,5];

// numbers.push(6);

// console.log(numbers);



// DATA TYPES 

// Primitive Data Types - Stored directly in the location the varable accesses, Stored on the stack

// Strings - sequences of charactors (letters, numbers, symbols)
// const name = 'John doe';

// console.log(typeof name)

// Numbers - Numbers (integers, decimals, floats)
// const age = 45;

// console.log(typeof age)

// Boolean - True & False
// const hasKids = true;

// console.log(typeof hasKids)

// Null - intentional empty value
// const car = null;

// console.log(typeof car)

// Undefined - all variables are undefined by default
// let test;

// console.log(typeof test)
// Symbols (ES6) - ?
// const sym = symbol();

// console.log(typeof sym)
// Reference Data Types - Accesses by reference, objects that are stored on the heap, a pointer to a location in memory

// Arrays
// const hobbies = ['movies', 'music']

// console.log(typeof hobbies);

// Object Literals
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }

// console.log(typeof address);

// Dates
// const today = new Date();
// console.log(today);
// console.log(typeof today);

// Functions
// Anything Else

// TYPE CONVERSION

// let val;

// number to string

// val = 5;

// val = string(5); // 5 as a string rather than a number
// val = string (4 + 4); // 8 as a string with length = 1

// boolean to string
// val = string(true);

// date to string
// val = string(new Date());

// array to string
// val = ([1,2,3,4]);

// toString() method
// val = (5).toString();
// val = (true).toString();

// string to number
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3]);

// val = parsInt('100.30'); // will parse whole number 
// val = parsFloat('100.30'), //will parse decimal places



//output
// console.log(val);
// console.log(typeof val);
// console.log(val.length);

// const val1 = string(5);
// const val2 = 6;
// const sum = val1 + val2;

// console.log(sum);
// console/log(typeof sum);

// SIMPLE MATHS WITH NUMBERS
// const num1 = 100;
// const num2 = 50;
// let val;

// val = num1 + num2;
// val = num1 - num2;
// val = num1 * num2;
// val = num1 / num2;
// val = num1 % num2; 

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(2,33,4,1,55,6,3);
// val = Math.max(2,33,4,1,55,6,3);
// val = Math.random(); //decimal random

// val = Math.floor(Math.random() * 20 + 1);


// console.log(val);

// STRING METHODS AND CONCATENATION

// const firstName = 'William';
// const lastName = 'johnston';
// const age = 36;
// const str = 'Hello. My name is Dave';
// const tags = 'web design,web development,html,css';
// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// // Append

// val = 'Brad ';
// val += 'Traversy';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val = 'That\'s awesome, I can\'t wait';

// // Length
// val = firstName.length;

// // concat
// val = firstName.concat(' ', lastName);

// // change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[2];

// // indexOf()
// val = firstName.indexOf(l);
// val = firstName.lastIndexOf(i);

// //charAt
// val = firstName.charAt('2');

// // get last char
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0, 4);

// // slice()
// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// // split()
// val = str.split(' ');
// val = tags.split(',');

// // replace()
// val = str.replace('dave', 'mairi');


// console.log(val);


// TEMPLATE LITERALS

// const name = 'John';
// const age = 30;
// const job = 'Web Developer';
// const city = 'Miami';

// // without template strings (ES5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// // with template strings (es6)

// html = `
// <ul>
//     <li>Name: $(name)</li>
// //     <li>Age: $(age)</li>
// //     <li>Job: $(job)</li>
// //     <li>City: $(city)</li>
// // </ul>`;

// // document.body.innerHTML = html;

// // Arrays

// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'hello', true, undefined, null, {a:1, b:1}, new Date()];

// let val;

// // get array length
// val = numbers.length;

// // check if is array
// val = Array.isArray(numbers);

// // get single value
// val = numbers[3];
// val = numbers[0]; // arrays are zero based... 0,1,2,3, etc...

// // insert into array
// numbers[2] = 100;

// //find index of value
// val = numbers.indexOf(36);

// // MUTATING ARRAYS
// // // add on to end
// // numbers.push(250);

// // // add on to front
// // numbers.unshift(120);

// // //take off from end
// // numbers.pop();

// // //take off from front
// // numbers.shift();

// // // splice values
// // numbers.splice(1,3);

// // // reverse
// // numbers.reverse();

// // // concatenate array
// // val = numbers.concat(numbers2);

// // sorting array
// // val = fruit.sort();
// // val = numbers.sort();

// // // use the "compare" function
// // val = numbers.sort(function(x, y){
// //     return x - y;
// // })

// // // reverse sort
// // val = numbers.sort(function(x, y){
// //     return y - x;
// // })

// // find
// function under50(num){
//     return num < 50;
// }

// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);
// console.log(fruit);


// OBJECT LITERALS

// const person = {
//     firstname: 'Steve',
//     lastName: 'Smith',
//     age: 36,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'FL'
//     },
//     getBirthYear: function(){
//         return 2017 - this.age;
//     }
// }

// let val;

// val = person;
// //get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Mike', age: 23}
// ];

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name)
// }

// DATE OBJECT

// let val;

// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(2);
// birthday.setMinutes(2);
// birthday.setSeconds(2);


// console.log(birthday);

// IF STATEMENTS AND COMPARISON OPERATORS

// if(something){
//     do something
// } else {
//     do something else
// }

const id = 100;

// // EQUAL TO

// if(id == 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO

// if(id != 101){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE

// if(id === 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE AND TYPE

// if(id !== 100){
//     console.log('CORRECT');
// } else {
//     console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('No ID');
// }

// GREATER OR LESS THAN >, >=, ==, <=, <
if(id > 200){
    console.log('CORRECT');
} else {
    console.log('INCORRECT');
}

// IF ELSE

const color = 'red';

if (color === 'red'){
   console.log('color is red'); 
} else if(color === 'blue'){
    console.log('color is blue');
} else {
    console.log('color is not red or blue');
}

// LOGICAL OPERATORS

const name = 'Steve';
const age = 20;

// AND &&
if(age > 0 && age < 12){
    console.log(`${name} is a child`);
} else if(age >= 13 && age <= 19){
    console.log(`${name} is a teenager`);
} else {
    console.log(`${name} is an adult`)
}

// OR ||

if(age < 16 || age > 65){
    console.log(`${name} can not run in race`);
} else {
    console.log(`${name} is registered for the race`)
}

// TERNARY OPERATOR
console.log(id === 100 ? 'CORRECT' : 'INCORRECT')