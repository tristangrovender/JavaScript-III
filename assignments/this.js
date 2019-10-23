
/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding

    Binding to the entire window object. Global binding.

* 2. Implicit Binding

    Binding to the function that the this keyword is originally used in. Think of "this" as whatever object is to the left of the .(function)

* 3. New Binding

    When using the new keyword to create a new object based off of a constructor functon "this" is bound to the new object.

* 4. Explicit Binding

    By using .call .bind. or .apply you can force this to be bound to something in particular.

*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
let me = {
    name: "Tristan", 
    age: 27,
    sayName: function() {
        console.log(this.name);
    }
};

sayName();


// Principle 2
// code example for Implicit Binding

let me = {
    name: "Tristan", 
    age: 27,
    sayName: function() {
        console.log(this.name);
    }
};

me.sayName();

// Principle 3
// code example for New Binding

let person = function(sex, name, age) {
    this.sex = sex;
    this.name = name;
    this.age = age;
};

const tristan = new person("Male", "Tristan", 27);

// Principle 4
// code example for Explicit Binding

let sayName = function(){
    console.log("My name is" + this.name);
};

let tristan = {
    name: "Tristan",
    age: 27
};

sayName.call(tristan);
 