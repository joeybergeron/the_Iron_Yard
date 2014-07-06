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

/**
 * USE THEM...
 *
 * WISELY
 */

/**
 * Tasks:
 * 1. set some values on both bank accounts
 * 2. get the sum of each account
 */

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