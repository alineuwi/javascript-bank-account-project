var accounts = [];

// Account Object
// amount
// username

// createAccount(account)
// push onto accounts array
// return account

// getAccount(username);
// find matching account 


// check amount is a number
function checkAmount (amount) {
    if (typeof amount === "number"){
        return true;
    } else {
        return false;
    }
}
// Deposits amount to account
function deposit(accountName, amount) {
    var valid = checkAmount(amount);
    if (valid) {
        var deposited = accountName.balance += amount;
        console.log("You have deposited $" + amount + ". Your account balance is $" + deposited +".");
        return 
    } else {
        console.log("Please enter a number to deposit");                   
    }
}

// Withdraws amount from account
function withdraw(accountName, amount) {
    var valid = checkAmount(amount);
    if (valid) {
        if (amount > accountName.balance){
            console.log("I am sorry, you do not have enough funds");
        } else {
            return accountName.balance -= amount;
        }
    } else {
        console.log("Please enter a number to deposit");        
    }
}

// Gets account balance
function getBalance(accountName) {
    console.log("Your account currently has $" + account.balance + " balance.");
}

deposit(account, 35);
deposit(account, "Fred");
withdraw(account, "fred");
withdraw(account, 21);

getBalance(account);
