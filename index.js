// let balance = 500.00;
class Account {

  constructor(username) {
    this.username = username;
    this.transactions = [];
  }

  get balance() {
    let total = 0;
    this.transactions.forEach((input) => {
      total += input.value;
    })
     return total;
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }
}

class Transaction {

  constructor(amount, account) {
    this.amount = amount;
    this.account = account;
  }

  commit() {

    this.time = new Date();

    if (this.account.balance + this.value >= 0){
      this.account.addTransaction(this);
    }
    else {
      console.log("You do not have the necessary funds.");
    }
  }
}

// GOOD
class Deposit extends Transaction {

  get value() {
  return this.amount;
  }

}

// GOOD
class Withdrawal extends Transaction {

  get value() {
    return -this.amount;
  }

}

// DRIVER CODE BELOW
// We use the code below to "drive" the application logic above and make sure it's working as expected

const myAccount = new Account('billybob');

console.log('Starting Balance:', myAccount.balance);

const t1 = new Deposit(120.00, myAccount);
t1.commit();

const t2 = new Withdrawal(50.00, myAccount);
t2.commit();

console.log('Ending Balance:', myAccount.balance);

const t3 = new Withdrawal(200.00, myAccount);
t3.commit();

console.log("T3 Balance:", myAccount.balance)