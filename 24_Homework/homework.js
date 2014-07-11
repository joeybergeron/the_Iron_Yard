/**
 * ====================================================================
 * HOMEWORK for Thursday - Sunday, July 10-13, 2014
 *
 * Part 1:
 * - Create a Cat, Dog, Horse, and Barn function.
 * - add two functions each to Cat, Dog, and Horse; one of whch should be a speak() function.
 * - ALL PROTOTYPE FUNCTIONS (i.e. speak()) MUST HAVE AT LEAST 1 ARGUMENT
 * - I've added a function to Barn that .shelter()'s any animal, and stores that animal in an array on `this`...
 * - write a function on Barn's prototype (called .rollCall()) that makes all animals speak()
 *
 * ! some starter code below
 *
 * Part 2: create a Calculator class and define / use all the functions
 *
 * BONUS: rewrite your ColorClock homework with Functions/Prototypes/Single-Responsibility-Principle
 * ====================================================================
 */

/////////////////////////////////////////////////////////////////
////////////////////////// PART I ///////////////////////////////
/////////////////////////////////////////////////////////////////

function Cat(first) {
    this.first = first;
}

Cat.prototype.speak = function() {
    console.log('meow')
}

Cat.prototype.sleep = function() {
    console.log(this.first + ' is sleeping. Come back later.')
}

function Dog(first) {
    this.first = first;
}

Dog.prototype.speak = function() {
    console.log('woof')
}

Dog.prototype.sleep = function() {
    console.log(this.first + ' is sleeping. Come back later.')
}

function Horse(first) {
    this.first = first;
}

Horse.prototype.speak = function() {
    console.log('neigh')
}

Horse.prototype.sleep = function() {
    console.log(this.first + ' is sleeping. Come back later.')
}

//////

function Barn() {
    this.shelteredAnimals = [];
}

Barn.prototype.shelter = function(animal) {
    this.shelteredAnimals.push(animal)
}

Barn.prototype.rollCall = function() {
    this.shelteredAnimals.forEach(function(el) {
        console.log(el.speak());
    })
}

var heathcliff = new Cat("Heathcliff");
var clifford = new Dog("Clifford");
var ed = new Horse("Ed");

//////////// WELCOME TO THE Barn

var stable = new Barn();

console.log(stable)

stable.shelter(ed);
stable.shelter(heathcliff);
stable.shelter(clifford);

stable.rollCall();


/////////////////////////////////////////////////////////////////
///////////////////////// PART II ///////////////////////////////
/////////////////////////////////////////////////////////////////

function Calculator(value) {
    this.value = value || 0;
}

Calculator.prototype.multiply = function(x, y) {
    return (x * y);
}
Calculator.prototype.add = function(x, y) {
    return (x + y);
    
    // try {
    //     return (x + y)
    //     if (typeof x !== 'number')
    //         throw new Error("Try again and remember to use numbers only.")
    //     if (isNaN(x))
    //         throw new Error("Not a number.")
    // } catch (err) {
    //     console.log("ERROR" + err + )
    // }
}
Calculator.prototype.subtract = function(x, y) {
    return (x - y);
}
Calculator.prototype.divide = function(x, y) {
    return (x / y);
}

var c = new Calculator(10);

console.log(c.multiply(5, 10));
console.log(c.add(5, 10));
console.log(c.subtract(5, 10));
console.log(c.divide(5, 10));
console.log(c.add(5, 4, 3, 1, 10));
console.log(c.add('a'));

/////////////////////////////////////////////////////////////////
///////////////////////// PART II ///////////////////////////////
////////////////////////// BONUS ////////////////////////////////
/////////////////////////////////////////////////////////////////

var sum = function() {
    var vault = 0;
    for (var i = 0; i < arguments.length; i++) {
        vault += parseInt(arguments[i]);
    }
    return vault;
}

console.log(sum(5, 4, 3, 1, 10));

// Bonus^2: c.add(5,4,3,1,10); //--> handle multiple arguments

// c.add('a') --> throw new Error("...")
