var accounts = [];

// Account Object
// amount
// username

// createAccount(account)
// push onto accounts array
// return account
function createAccount(accountName, username, amount) {
    var accountName = {
        username: username,
        balance: amount          
    }
    accounts.push(accountName);
}


// getAccount(username);
// find matching account 
function getAccount(username) {
    var foundUser;
    accounts.forEach(function (element, index) {
        if (element.username === username){
            foundUser = element;
        } 
    });
    return foundUser;
}

// check amount is a number
function checkAmount (amount) {
    var valid;
    if (typeof amount === "number"){
        valid = true;
    } else {
        valid = false;
    }
    return valid;
}
// Deposits amount to account
function deposit(username, amount) {
    var valid = checkAmount(amount);
    var foundUser = getAccount(username, accounts);
    if (valid && foundUser) {
        var deposited = foundUser.balance + amount;
        console.log("You have deposited $" + amount + ". Your account balance is $" + deposited +".");
        return foundUser.balance += amount;
    } else {
        console.log("Please enter a number to deposit");                   
    }
}

// Withdraws amount from account
function withdraw(username, amount) {
    var valid = checkAmount(amount);
    var foundUser = getAccount(username, accounts);
    if (valid && foundUser) {
        if (amount > foundUser.balance){
            console.log("I am sorry, you do not have enough funds");
        } else {
            return foundUser.balance -= amount;
        }
    } else {
        console.log("Please enter a number to deposit");        
    }
}

// Gets account balance
function getBalance(username) {
    var foundUser = getAccount(username, accounts);
    if (foundUser) {
        console.log("Your account currently has $" + foundUser.balance + " balance.");       
    } else {
        console.log("There is no account matching");
    }    
}
createAccount("account1", "joesmith", 25);
getBalance("joesmith");
withdraw("joesmith", 5);
getBalance("joesmith");
deposit("joesmith", 45);
createAccount("account2", "ritamcclaren", 1000)
getBalance("joesmith");
getBalance("ritamcclaren");
withdraw("ritamcclaren", 999);
getBalance("ritamcclaren");
withdraw("ritamcclaren", 999);
