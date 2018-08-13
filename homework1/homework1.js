// Write a function below with the name "pow" that accepts 2 arguments and returns the
// result of the first argument raised to the power of the second argument.
// For example: if argument1 = 2 and argument2 = 8, the function should return 2^8.

function pow(argument1, argument2) {
  return Math.pow(argument1, argument2);
}

let myResult = pow(2,8);
console.log(myResult);

//---------------------------------------------------

// Fill in the function body below, which accepts an array as an argument.
// The function should:
// * loop through the array
// * if, while looping through the array, we encounter a non-numeric
//   value, we should return a boolean, false.
// * If all the values are numbers, return true.

function numberArrayValidator(arr) {
  for (var i=0; i<arr.length; i++) {
  }
}

let arr = [1,2,4,6,8,9,"hi"];

if (isNaN(arr)) {
  console.log("False")
}
else {
  console.log("True")
}

//---------------------------------------------------

// Create a function below with the name "objectHasNameProp" that accepts
// 1 argument, an object, and checks if the object has a property with the
// name, "name".
// If it does, return true. Otherwise, return false.

function objectHasNameProp(argument1) {
  return argument1
}

 let argument1 = objectHasNameProp(object);
 var object = {name:"name"};

if (object.name !== "name") {
  console.log("False")
}

else {
  console.log("True")
}


//---------------------------------------------------

// Create a function below named "addNamePropToObject". This function should:
// * accept 1 argument
// * You must check the type of argument you receive--if the type is
//   not 'object', then you must return null.
// * If the type IS 'object', then add a property, "name", to the object
// * and set its value to be your full name as a string.
// * Return the object.

function addNamePropToObject(argument3) {
  return argument3
}

let argument3 = addNamePropToObject(object)
var object = {age:19}

if (typeof argument3 !== "object") {
  return null
}

else {
  argument3.name = "Hui Ji Joyce Lee"
  return argument3.name
}


//---------------------------------------------------

// Write a JavaScript program to list the properties of a JavaScript object.
// Sample object:
/*
const student = {
name : "David Rayy",
sclass : "VI",
rollno : 12 };

Sample Output: name,sclass,rollno
*/

const sibling = {
  name: "Hilary Lee",
  age: "18",
}

console.log(sibling.name+","+sibling.age+"years old")

//---------------------------------------------------

// Write a function named "deletePropFromObj", which accepts 2 arguments:
// an object and a string, which represents the property to be deleted from the
// object.
// If the property does not exist, return false. Otherwise, return the deleted object.

function deletePropFromObj(argument4, argument5) {
  return argument4, argument5
}

let argument4 = deletePropFromObj(object);
var object = {name:"name"};
let argument5 = "name";

delete object.name

if (object.name === "undefined") {
 console.log("False")
}

else {
 return argument5
}

//---------------------------------------------------

// Create a function named "Person". You should add a function to Person's
// prototype, named "sayHello". This prototype function should log out
// "Hello, my name is <name>" (with your name in place of "<name>").
// If you're confused, reference this link:
//
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
//

function Person(name, age, gender) {
  }

const person1 = new Person("joyce", 19, "female")

Person.prototype.sayHello = function () {
  this.name = "joyce"
  return "Hello, my name is " + this.name
}

let myPerson = person1.sayHello();
console.log(myPerson);

//this.name keeps causing an error, saying it's undefined OR function logs "Hello, my name is undefined" - why?

//---------------------------------------------------

// Create a function named "specialLoop" that loops through an array and
// console.log's out each element in the array. You CANNOT use a standard
// for, while, or do-while loop. (Find a way to loop through an array
// without using the methods mentioned above.)

const myArray = ["tea", "milk", "coffee", "juice", "water"];

function specialloop(argument1){
  return myArray.map.call(myArray, function(x){return x})
}

let myspecialloop = specialloop(myArray);
console.log(myspecialloop);

//---------------------------------------------------

// Create a function named "weatherChecker". This function should:
// * Accept 1 argument, which should have one of the following values:
//   "rainy", "sunny", "cloudy", "snowy", "windy"
// * Your goal is to tell the user how to best prepare themselves for
//   the weather (via console.log). If it's sunny, tell the user to
//   "wear sunscreen!".
// * If it's cloudy or windy, tell them to bring some kind of outerwear.
// * If it's rainy, tell them to bring an umbrella, and if its snowy,
//   tell them to to wear a thick coat and snow boots.
// * You MUST use a switch statement to finish this function.
// * The function doesn't return anything.

function weatherChecker(argument1){
  const weather = "Rainy"

  switch(weather) {
    case "Rainy":
      console.log("Bring an umbrella!");
      break;

    case "Sunny":
      console.log("Wear sunscreen!");
      break;

    case "Cloudy":
      console.log("Carry a light jacket!");
      break;

    case "Snowy":
      console.log("Wear a thick coat and snow boots!");
      break;

    case "Windy":
      console.log("Wear a windbreaker!");
      break;
  }
}

//---------------------------------------------------

// Create a function named "makeChristmasTree". This function should:
// * Accept 1 argument, a number. This number represents the height of
//   a tree. Remember, you should check to make sure that the argument
//   you receive is valid (that it is a number). This number must also be
//   positive (or zero)!
// * The function will create a tree, represented as a string, with the
//   asterisk (*) character.
// * The function should create a tree, as seen below. It should both
//   log out the result AND return the result as a string.

function makeChristmasTree(argument1){
  if (isNaN(argument1)) {
    console.log("ERROR!")
  }
  else {
    if (Math.sign(argument1) === 0, 1){
      return argument1
    }
    else {
      console.log("ERROR!")
    }
  }

//I couldn't figure out how to actually log the asterisks and shape them into
//the example below.

}

let myChristmasTree = makeChristmasTree(3);
console.log(myChristmasTree);

// Example:
/*
// Calling makeChristmasTree...
makeChristmasTree(5);
// Output:
    *
   ***
  *****
 *******
    *

makeChristmasTree(1);
// Output:
  *

makeChristmasTree(2);
// output:
  *
  *

makeChristmasTree(3):
// output:

  *
 ***
  *

makeChristmasTree(0):
// Output:

(nothing should be outputted)


makeChristmasTree(-1):
// Output:

ERROR!
*/
