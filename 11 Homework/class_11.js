// Objects

var obj = {}; //Object
var obj2 = {
	student1: '',
	student2: '',
	numOfStudents: 7
	//....
}


// functions can be in Objects
var dog = {
	bark: function(){
		console.log("woof");
	},
	sit: function(){
		console.log("Yes, master.");
	},
	bark2: function(){
		console.log("Yip!");
	}
}

// //dog.woof(); //--> ERROR / NOT EXISTS
dog.bark(); //--> "woof"

var b = 'bark';
var i = "2";
dog[b](); //--> dog.bark()
dog[b+2]; //--> dog.bark2()
dog[b+i]; //--> dog.bark2()

dog.sit();


// functions can be passed as parameters

[].sort( function(){} );


// Arrays
// var listOfItems = [];//Array
var list2 = [0, '1', 2, 4, 5, 10, 9];
list2.push("last item"); //----------------- add dog to end of array
var d = list2.pop(); //--> last item removed from array, stored in d
d; // "last item"

// http://www.referenced.co.uk/wp-content/uploads/2012/05/push-pop-01.jpg

['aardvark', 'arctic', 'a', 'a0', 'aa', 60, 0, '0', 6, '00'].sort()

//--> [0, "0", "00", 6, 60, "a", "a0", "aa", "aardvark", "arctic"]
// alphabetically sorts after comparing all items AS STRINGS

// [function(){}, 1, 2, 4, 5, 10] WAT WE CAN PUT FUNCTIONS IN ARRAYS?
//
// yes :-)

////// parseFloat and parseInt
/**
 *
	parseInt("0")
	// 0

	parseInt("0.7")
	// 0

	parseInt("1.74")
	// 1

	parseFloat("1.74")
	// 1.74

	parseFloat("1.74a")
	// 1.74

	parseFloat("a")
	// NaN

	parseFloat("0a")
	// 0

	parseFloat("0.45010102102a")
	// 0.45010102102

	parseFloat("0.45010102102 a")
	// 0.45010102102

	parseFloat("1a2")
	// 1
 */

var numerical = [1, 2, 3, 6, 10, 9, 7];
var compareInOrder = function(a, b){return a - b};
var compareInReverse = function(a, b){return b - a};
/**
 * if compare for a and b, returns -1 or less, a is before b
 * if compare for a and b, returns 0, maintain same order
 * if compare for a and b, returns 1 or more, a is after b
 */
numerical.sort(compare);

// comparing and sorting objects
var objectArray = [{
    a: 1
}, {
    a: 1
}, {
    a: 7,
    b: 4
}, {
    a: 39
}, {
    a: 21
}, {
    a: 5
}, {
    a: 10
}];

var compareObjectsByA = function(obj1, obj2){
	return parseInt(obj1.a) - parseInt(obj2.a);
}
objectArray.sort(compareObjectsByA);
// finding numerical values in strings and adding them



/**
 ******************* accessing array indexes
 */

var dog2 = {
	name: "Sparky"
}

dog2.name;
dog2['name'];

var dog3 = {
	name: "Jace"
}

var dogs = [dog2, dog3];

dogs[0]; //--> dog2
dogs[1]; //--> dog3