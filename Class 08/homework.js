/**
 * PART 1
 *
 * Write a JavaScript program that takes two numbers as parameters and computes the sum of those two numbers
 *
 * For example, if the user input 3 and 6, then the answer would be: "9 (3+6)".
 */

function sum(a, b){
	var sum = a + b;
	return sum+" "+"("+a+","+b+")";
}

console.log(sum(8, 11));

/**
 * PART 2
 *
 * Write a JavaScript program that calculates the average time for this marathoner to complete the full marathon (26.2mi)
 */

var matt = {
	finishingTime1: 240, //in minutes
	finishingTime2: 210.4,
	finishingTime3: 235.1,
	finishingTime4: 208.9,
	finishingTime5: 197.5
};
var keya = {
	finishingTime1: 140, //in minutes
	finishingTime2: 110.4,
	finishingTime3: 135.1,
	finishingTime4: 108.9,
	finishingTime5: 97.5
};
var getSum = function(person){
	var f = "finishingTime";
	return person.[f+1] + person.[f+2] + person.[f+3] + person.[f+4] + person.[f+5];
}
var getAverageTime = function(person){
	return getSum(person) / 5; 
}

console.log( getAverageTime(matt) );
console.log( getAverageTime(keya) );


/**
 * PART 3
 *
 *
 * Modify our in-class JavaScript program to calculate the difference between the two accounts.
 */

/**
 * declarations
 */

var MattsBankAccount = {
	checking: 0,
	savings: 0,
	retirement: 0
};

var RobertosBankAccount = {
	checking: 0,
	savings: 0,
	retirement: 0
};

function addToBank(account, savings, retirement, checking){
   account.savings = account.savings + savings;
   account.retirement = account.retirement + retirement;
   account.checking = account.checking + checking;
}

function getSumOfAccounts(account){
	var sum = account.savings + account.checking + account.retirement;
	return sum;
}

addToBank(MattsBankAccount, 100, 10, 1);
addToBank(RobertosBankAccount, 200, 50, 19)

var sumOfMatts = getSumOfAccounts(MattsBankAccount);
var sumOfRobertos = getSumOfAccounts(RobertosBankAccount);

// add 100, 200, 300 to RobertosBankAccount
addToBank(RobertosBankAccount, 100, 200, 300);
console.log(RobertosBankAccount); //--> Object {checking: 300, savings: 100, retirement: 200}

// add 500, 200, 1000 to MattsBankAccount
addToBank(MattsBankAccount, 500, 200, 1000);
console.log(MattsBankAccount); //--> Object {checking: 1000, savings: 500, retirement: 200}

// get the sum of RobertosBankAccount
var sumOfRobertosAccounts = getSumOfAccounts(RobertosBankAccount);
console.log(sumOfRobertosAccounts); //--> 600

// get the sum of MattsBankAccount
var sumOfMattsAccounts = getSumOfAccounts(MattsBankAccount);
console.log(sumOfMattsAccounts);

// get the sum of both accounts
console.log(sumOfRobertosAccounts + sumOfMattsAccounts); // --> same as below
console.log( getSumOfAccounts(RobertosBankAccount) + getSumOfAccounts(MattsBankAccount) ); // --> same as above