/**
 * PART 1
 *
 * Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.
 */

var s1 = 5;
var s2 = 6;
var s3 = 7;

var formula = function(a,b,c){
	var s = (( a + b + c ) / 2);
	var A = Math.sqrt (s * (s-a) * (s-b) * (s-c));
	return A;
};

var Area = formula(s1,s2,s3);
console.log(Area);

//------ OR ------------------ MATTS WAY WITH ARRAYS!

var triangle = [5,6,7];

function area(triangle){
	var a = triangle[0];
	var b = triangle[1];
	var c = triangle[2];
	var s = (a + b + c) / 2;
	var A = Math.sqrt(s * (s-a) * (s-b) * (s-c));
	return A;
}

console.log(area(triangle));

//------- OR -------------------- SIMPLIFIED (THIS IS WHAT IS WANTED)

function area(a, b, c){ 
	var s = (a + b + c) / 2;
	return Math.sqrt(s * (s-a) * (s-b) * (s-c));
}

console.log(area(5,6,7));


// Example - Compare two triangles, tell me which one has larger area (This also has testing)

function compareAreaOfTriangles(triangle1, triangle2) {
	// This could be used also
	// if(triangle1 instanceof Array || triangle2 instanceof Array)
	if(typeof triangle1 !== "object" || typeof triangle2 !== "object") {
		return "That aint no triangle!"
	}

	var areaOfA = area(triangle1[0], triangle1[1], triangle1[2]);
	var areaOfB = area(triangle2[0], triangle2[1], triangle2[2]);
	
	if(areaOfA > areaOfB) {
		return "A is larger.";
	} else if (areaOfB > areaOfA) {
		return "B is larger.";
	} 
	return "IT'S A TRAP!";
}


var A = [3,3,5];
var B = [5,6,7];

console.log(compareAreaOfTriangles(A, B));
/**
 * PART 2
 *
 * Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.
 * [ Formula : c/5 = f-32/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]
 *
 * Expected Output :
 * 60°C is 140 °F
 * 45°F is 7.222222222222222°C
 */

//----- This is totally effed
var temperature = {
	convert: function(degree) {
	    if (degree == "C") {
	        F = ("c") * 9 / 5 + 32;
	    } else {
	        C = (("f") - 32) * 5 / 9;
	    }
	}
	return temperature;
}
console.log(temperature 60°C);

//-------------------------------------------- MATT's WAY

function FtoC(f){
	var c = (5/9)*(f-32);
	return c+" degrees Celsius";
}

function CtoF(c){
	var f = 9*(c/5)+32;
	return f+" degrees Fahrenheit";
}

console.log(FtoC(45));
console.log(CtoF(60));

/**
 * PART 3
 *
 * Write a JavaScript function that reverse a number.
 *
 * Example x = 32243;
 * Expected Output : 34223
 */

//--Can't figure out how to put into a funtion

		var x = [];
		x.push("3");
		x.push("2");
		x.push("2");
		x.push("4");
		x.push("3");
		var a = x.reverse();
		var Output = a.toString(); a.join("");

//------------------------------------------------MATT'S WAY

function reverse(number){
	var str = number+"";
	var arr = str.split ('');
	var rev = arr.reverse ();
	var rev_str = rev.join('');
	var rev_num = parseFloat(rev_str);
	return rev_num;
}

console.log(reverse(33243));

//------------------------------------------------
function reverse(number){
	if(typeof number === "object") { // testing if number is an object, default it to "0"
		number = "0";	
	} else if(typeof number !== "string") { // testing if it is not an object and it is not a string
		number = ""+number; 
	}

    return parseFloat(number.split("").reverse().join(""));
}

console.log(reverse(33243));




/**
 * PART 4
 *
 * Write a simple JavaScript program to join all elements of the following array into a string. Go to the editor
 *
 * Sample array : myColor = ["Red", "Green", "White", "Black"];
 *
 * Expected Output :
 * "Red,Green,White,Black"
 * "Red,Green,White,Black"
 * "Red+Green+White+Black"
 */

var myColor = ["Red", "Green", "White", "Black"];

console.log(myColor.join(","));
console.log(myColor.join(","));
console.log(myColor.join("+"));

/**
 * PART 5
 *
 * Write a JavaScript program to compute the sum and product of an array of integers.
 */

//--Incomplete
var compute = function(x, y) {
	var sum = (x + y);
	var product = (x * y);
}
parseInt


//-----------------------------------------MATT'S WAY 
//--------------This allows the function to handle as many number of values inside the array
function sum(arr){
	if(!(arr instanceof Array)){
		return "SAY ARRAY ONE MORE TIME";
	}
	var sum = 0;
	var addStuffToSum = function(value){
		if(typeof value !== "number") {
			return; //EARLY EXECUTION, GUILLOTINE STYLE
		}

		sum = sum + value;
		// sum += value
	};
	arr.forEach(addStuffToSum);

	return sum;
}
	
var myArray = [0,1, "NICKCAGECATE", "BANECAT", 3, 4, 5, 6, 7, 234, 4564];

console.log("sum",sum(myArray));







function product(arr){
	if(!(arr instanceof Array)){
		return "SAY ARRAY ONE MORE TIME";
	}
	var product = 0;
	var addStuffToSum = function(value){
		if(typeof value !== "number") {
			return; //STOP IT, GUILLOTINE STYLE
		}

		product = product * value;
		//product *= value;
	};
	arr.forEach(addStuffToSum);

	return product;
}
	
var myArray = [0,1, "NICKCAGECATE", "BANECAT", 3, 4, 5, 6, 7, 234, 4564];

console.log("product",product(myArray));


