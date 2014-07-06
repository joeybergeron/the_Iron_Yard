/**
 * PART 1
 *
 * Write a JavaScript program that takes two numbers as parameters and computes the sum of those two numbers
 *
 * For example, if the user input 3 and 6, then the answer would be: "9 (3+6)".
 */

function sum(a, b) {
    return a + b + " " + "(" + a + "," + b + ")";
}

console.log(sum(8, 11));

//console.log(sum);

/**
 * PART 2
 *
 * Write a JavaScript program that calculates the average time for this marathoner to complete the full marathon (26.2mi)
 */

var marathoner = {
    finishingTime1: 240, //in minutes
    finishingTime2: 210.4,
    finishingTime3: 235.1,
    finishingTime4: 208.9,
    finishingTime5: 197.5
};

function getAverageTime(a, b) {
    totalTime = a.finishingTime1 + a.finishingTime2 + a.finishingTime3 + a.finishingTime4 + a.finishingTime5;
    return totalTime / b;
}
console.log("Average of your run is", "");
console.log(getAverageTime(marathoner, 5));



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

function addToBank(account, savings, retirement, checking) {
    account.savings = account.savings + savings;
    account.retirement = account.retirement + retirement;
    account.checking = account.checking + checking;
}

function getSumOfAccounts(account) {
    var sum = account.savings + account.checking + account.retirement;
    return sum;
}

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
console.log(getSumOfAccounts(RobertosBankAccount) + getSumOfAccounts(MattsBankAccount)); // --> same as above

// get the differenceof both accounts
console.log("Roberto's account after Matt withdraws.");
console.log(sumOfRobertosAccounts - sumOfMattsAccounts);
console.log("Matt's account after Roberto withdraws.");
console.log(sumOfMattsAccounts - sumOfRobertosAccounts);
