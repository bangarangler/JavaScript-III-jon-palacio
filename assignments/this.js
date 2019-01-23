/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. if it's in global scope value will be the window object
 * 2. object to the left of the dot will be what this refers to
 * 3. empty obj created and referenced by this, it will inherit prototype
 * of function. properties and methods are added to obj.
 * 4. force a function call to use a particular object for this
 * binding. so I explicitlly say to a function what object it should
 * use for this.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
//function myName(name) {
//console.log("Hey " + name);
//console.log(this);
//}
//console.log(myName("Jon"));

// Principle 2

// code example for Implicit Binding
//function boo() {
//console.log(this.g);
//}

//const obj = {
//g: 12,
//boo: boo
//};

//console.log(obj.boo());

// Principle 3

// code example for New Binding
//function Worker(name, age) {
//this.name = name;
//this.age = age;
//}
//const one = new Worker("Jon", 30);
//console.log(one);

// Principle 4

// code example for Explicit Binding
function greet() {
  console.log(this.name);
}

const person = {
  name: "Jon"
};

console.log(greet.call(person, arg1, arg2, arg3)); // Jon apply simialr to call but for apply function arguments are passed as array
//greet.apply(person, [args]);
//bind creates a new function that will act as original function but with
//this predefined.
