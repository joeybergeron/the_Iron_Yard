/**
 * homework:
 *
 * - create a JS program that takes the two arrays, A and B, and uses push/pop to put all elements in A into B, in reverse order
 * e.g.:
 *
 * 		at the end, A will be [],
 * 		and B will be [9,8,7,6,5,4,3,2,1,0]
 */

var A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var B = [];

B.push(A.pop());
B.push(A.pop());
B.push(A.pop());
B.push(A.pop());
B.push(A.pop());
B.push(A.pop());
B.push(A.pop());
B.push(A.pop());
B.push(A.pop());
B.push(A.pop());

console.log(A, B)
// your code here

// this is a mental tongue-twister; and you *can* do this using only push and pop together (hint! hint!)

/**
 * Part 2
 *
 * Investigate this, we'll discuss tomorrow
 *
 * Hint: write some code with push('jace'), pop('dennis'), and arr[1] = 'mark' and investigate what is happening. Just try to explain in English :-)
 */

var arr = [];
arr[999] = 'john'; //--Has a 1000 in length due to the "0" being a place holder.
arr.push('jace'); //--This adds 'jace' to the end of the array
arr.push('dennis'); //--This adds 'dennis' to the end of the array
arr.pop(); //--This will remove the last item in the Array - 'dennis'
arr[1] = 'mark'; //--This positions 'mark' as the first position in the array
console.log(arr.length);

/**
 * Part 3.OLD
 *
 * sort() an array with your own comparator (refer to notes)
 *
 * one comparator will return the objects in alphabetical order compared to their name,
 * one comparator will return the objects in reverse
 */

var myComparator = function(a, b) {
    return a.name > b.name;
}
var myComparatorReverse = function(a, b) {
    return b.name > a.name;
}
var listOfObjects = [{
    name: 'michael'
}, {
    name: 'khalid'
}, {
    name: 'amy'
}, {
    name: 'keya'
}, {
    name: 'joey'
}, {
    name: 'david'
}, {
    name: 'roberto'
}, {
    name: 'darron'
}]

listOfObjects.sort(myComparator);
listOfObjects.sort(myComparatorReverse);

/**
 * Part 3
 *
 * I'm removing this part 3 :-) on array.sort()
 *
 * I've concluded it was too fast, and I'm sorry for that oversight. We'll talk about the following in the morning, and recollect our thoughts on sort().
 *
 * instead, just play with:
 *
 * array.reverse(),
 * array.concat(),
 * array.shift(),
 * and array.unshift()
 *
 * details: http://www.w3schools.com/jsref/jsref_obj_array.asp
 */

//--Array reverse //--Lets run this in reverse
var gameConsoles = ["Atari", "NES", "SEGA", "NeoGeo"];
gameConsoles.reverse();
console.log(gameConsoles);
//--Array concat //--Combine consoles and handhelds
var gameConsoles = ["Atari", "NES", "SEGA", "NeoGeo"];
var gameHandhelds = ["Lynx", "GameBoy", "Game Gear", "Turbo Express"]
var gameDevices = gameConsoles.concat(gameHandhelds);
console.log(gameDevices);
//--Array shift //--Goodbye Atari
var gameConsoles = ["Atari", "NES", "SEGA", "NeoGeo"];
gameConsoles.shift();
console.log(gameConsoles);
//--Array unshift //--Can't forget about Commodore64
var gameConsoles = ["Atari", "NES", "SEGA", "NeoGeo"];
gameConsoles.unshift("Commodore64");
console.log(gameConsoles);
//--Array indexOf //--Find the position of SEGA
var gameConsoles = ["Atari", "NES", "SEGA", "NeoGeo"];
gameConsoles.indexOf("SEGA");
//--Array indexOf //--Find the what is in the 2nd position
var gameConsoles = ["Atari", "NES", "SEGA", "NeoGeo"];
gameConsoles[2];
//--Array join //--Joins all strings into one string (In this example we put a "-" between each word)
var gameConsoles = ["Atari", "NES", "SEGA", "NeoGeo"];
gameConsoles.join ("-");
//--Array filter //--
