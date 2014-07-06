// scope
// - global scope - "window"
// - function scope
//
// var iAmGlobal = 1;
// function someRandomFunction(){
// 		var scopedVariable = 2;
// 		console.log(iAmGlobal + scopedVariable) ;
// }
// someRandomFunction(); //--> 3
// console.log(scopedVariable) //--> ERROR, scopedVariable does not exist

// dot notation vs dictionary lookup
//
// person.finishingTime1
// person["finishingTime"+1]
//
//
// ___ consider ___
// var matt = {
// 		finishingTime1: 240
// };
// matt.finishingTime1 === matt["finishingTime"+1] //--> true :{)


// conditional statements
//
var winner = "USA";

if (winner !== 'Brazil' && winner !== 'USA') { //--> false
    console.log('CHICKEN DINNER.');
} else if (winner !== 'USA' || winner === 'Ghana') { //-> false
    console.log("Vegetarian food.");
} else if (!(true)) { //--> false
    console.log("Shiver me timberrrrrrrrrrrs");
} else if (!(winner === "USA")) { //--> false
    console.log("Shiver me timbers?");
} else if (!false) { //--> true
    console.log("Shivers. Just shivers.");
} else {
    console.log("Nobody knows the trouble I've seen.")
}

// conditional blocks

// if( ... ){
// 		...
// }

// if( ... ){
// 		...
// } else {
// 		...
// }

// // if( ... ){
// 		...
// } else if( ... ){
// 		...
// } else {
// 		...
// }

// conditional tests
// === (are they the same?)
// !== (are they NOT the same? Arrrrrrrr they different?)
// <
// <=
// >
// >=

// boolean operators
// &&
// ||
// !


// Homework:
// read these two sections of this site, play with the examples in Chrome Dev Tools
// 		1. http://bonsaiden.github.io/JavaScript-Garden/#types.equality
// 		2. http://bonsaiden.github.io/JavaScript-Garden/#types.typeof
// play with these examples, make a Codepen and explore different ways these would work
// 		http://tympanus.net/Development/HoverEffectIdeas/