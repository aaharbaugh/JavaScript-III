/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding. By default. this is bound to the window which is the browser object. 

* 2. Implicit binding is when we are within  object and we are referring to itself. A value within that object is referenced using dot notation. 

* 3. a new binding is when you have an object and via parameters you define each part of the object and you refer to the values  as .this.something 

* 4. explicit. you have already bound the object and are doing it again through another function outside of the object. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this.GLOBALS)

// Principle 2
// code example for Implicit Binding
const myFace = {
    size: "round",
    hairColor: "brown",
    describeFace: function() {
        console.log(`My face is ${this.size} and my hair is ${this.hairColor}`)
    }
};

myFace.describeFace();

// Principle 3
// code example for New Binding

function Vehicle(type, year){
    this.type = type;
    this.year = year;

    this.description = function () {
        console.log(`This is a ${this.type} car that was made in ${this.year}`)
    }
}

const myFirstCar = new Vehicle('Nissan Altima', '2015')

// Principle 4

// code example for Explicit Binding

const mySecondCar = new Vehicle('BMW', '2018')

myFirstCar.description.apply(mySecondCar) //now refers to mysecondcar when going through MFC object. 

