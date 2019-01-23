/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding
* 2. Implicit Binding
* 3. New Binding
* 4. Explicit Binding
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
    name: "Tristan"
    age: 27
};

sayName.call(tristan);
 