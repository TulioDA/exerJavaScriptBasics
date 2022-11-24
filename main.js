/*console.log('Hello World');
console.error('This is an error');
//Variables
let age = 30;
age=31;
console.log(age);*/
const name = 'TDA';
const age = 30;
/*const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; 
console.log(typeof age);*/

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template 
console.log(`My name is ${name} and I am ${age}`);

// String methods & properties
const s = 'Hello World!';
console.log(s.substring(0,5).toUpperCase())
console.log(s.split(''))

// ARRAYS - Store multiple values in a variable
const numbers = [1,2,3,4,5];
const fruits = ['apples', 'oranges', 'pears',10,true];
console.log(numbers, fruits);
fruits[3]='grapes'
console.log( fruits);
console.log( fruits[1]);

//Add value using push()
fruits.push('magos');
fruits.unshift('strawberries');
// Remove last value
fruits.pop();
// Check if array
console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));
// Get index
console.log(fruits.indexOf('oranges'));

// OBJECT LITERALS
const person = {
    firstName: 'John',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    }
  }
console.log(person)
// Get single value
console.log(person.firstName)
// Get array value
console.log(person.hobbies[1]);
// Get embedded object
console.log(person.address.city);
const {firstName,lastName,address: {city}}=person;
console.log(city);
// Add property
person.email = 'TDA@gmail.com';
console.log(person);
// Array of objects
const todos = [
    {
      id: 1,
      text: 'Take out trash',
      isComplete: false
    },
    {
      id: 2,
      text: 'Meet with boss',
      isComplete: false
    },
    {
      id: 3,
      text: 'Dentist appt',
      isComplete: true
    }
  ];
  console.log(todos);
  console.log(todos[1].text);

  // Format as JSON
const todosJSON=JSON.stringify(todos);
console.log(todosJSON);

// LOOPS

// For
for(let i = 0; i <= 10; i++){
    console.log(`For Loop Number: ${i}`);
  }
  
  // While
let i = 0
while(i <= 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

// Loop Through Arrays
// For Loop
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
  }
  // For of Loop
for(let todo of todos) {
    console.log(todo.text);
  }

  // forEach() - Loops through array
todos.forEach(function(todo, i, myTodos) {
    console.log(todo.text);
    
  });

  // map
const todoText = todos.map(function(todo) {
    return todo.text;
  });
  console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todo) {
    
    return todo.isComplete === true; 
  }).map(function(todo) {
    return todo.text;
  });
  console.log(todoCompleted);


// CONDITIONALS

const x = 6;
const y=11;

if(x === 10) {
  console.log('x is 10');
} else if(x > 10) {
    console.log('x is greater than 10');
}else {
  console.log('x is less than 10')
};

if(x>5 || y> 10) {
    console.log('x is more than 5 or y is more than 10');}
if(x>5 && y> 10) {
    console.log('x is more than 5 and y is more than 10');}

// Ternary operator 
const z=10;
const color = z >10? 'red':'blue';
console.log(color);

// Switch
switch(color) {
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
    console.log('color is blue');
    break;
  default:  
    console.log('color is not red or blue')
}

// FUNCTIONS
function addNums(num1,num2) {
  console.log(num1+num2)
  }
addNums(5,4)

function addNums(num1=1,num2=2) {
  console.log(num1+num2)
  }
addNums()

function addNums(num1,num2) {
  return num1+num2;
  }
console.log(addNums(5,5))

// ARROW FUNCTIONS
const addNum= (num1,num2)=> {
  return num1+num2;
  }
console.log(addNum(5,15))

const addNum2= (num1,num2)=> num1+num2;
  
console.log(addNum2(5,13))

// OOP

// Constructor Function
function Person(firstName, lastName, dob) {
  // Set object properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function(){
  return this.dob.getFullYear();
   }
   this.getFullName = function() {
      return `${this.firstName} ${this.lastName}`
     }
}

// Get Birth Year
Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
}
// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`
}

// Instantiate an object from the class
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('TDA', 'Smith', '8-2-1990');

console.log(person2.getFullName());

console.log(person1)
console.log(person1.dob.getFullYear())
console.log(person2.lastName)
console.log(person1.getBirthYear());
console.log(person1.getFullName());

// CLASSES
class PersonX {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }
// Get Birth Year
  getBirthYear() {
    return this.dob.getFullYear();
  } 
  // Get Full Name
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

// Instantiate an object from the class
const person11 = new PersonX('Cara', 'Doe', '4-3-1980');
const person12 = new PersonX('Mala', 'Smith', '8-2-1990');

console.log(person11.getFullName());

// ELEMENT SELECTORS
// Single Element Selectors
console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));

// Multiple Element Selectors
console.log(document.querySelectorAll('.item'));
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));

const items = document.querySelectorAll('.item');
items.forEach((item) => console.log(item));

// MANIPULATING THE DOM
const ul = document.querySelector('.items');
//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].innerText = 'Brad';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

const btn = document.querySelector('.btn');
btn.style.background = 'red';

// EVENTS

// Mouse click
/*btn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  //document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

// Mouse hover
btn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  //document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});

// Mouse out
btn.addEventListener('mouseout', (e) => {
  e.preventDefault();
  console.log(e.target.className);
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');
  //document.querySelector('.items').lastElementChild.innerHTML = '<h1>Hello</h1>';
});*/

// USER FORM SCRIPT

// Put DOM elements into variables
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');
// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));

    // Append to ul
    userList.appendChild(li);

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}