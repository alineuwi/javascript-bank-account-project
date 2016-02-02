
var account = {
    balance: 0
};

// Deposits amount to account
function deposit(accountName, amount) {
    return accountName.balance += amount;
}

// Withdraws amount from account
function withdraw(accountName, amount) {
    if (amount > accountName.balance){
        console.log("I am sorry, you do not have enough funds");
    } else {
        return accountName.balance -= amount;
    }
}

// Gets account balance
function getBalance(accountName) {
    console.log("Your account currently has $" + account.balance + " balance.");
}

