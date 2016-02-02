
var account = {
    balance: 0
};

// deposit
function deposit(accountName, amount) {
    return accountName.balance += amount;
}

// withdraw
function deposit(accountName, amount) {
    if (amount < accountName.balance){
        console.log("I am sorry, you do not have enough funds");
    } else {
        return accountName.balance += amount;
    }
}

// getBalance


deposit(account, 25);


