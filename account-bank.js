class BankAccount {
    constructor(accountNumber, accountHolder, balance = 0) {
      this.accountNumber = accountNumber;
      this.accountHolder = accountHolder;
      this.balance = balance;
    }
  
    deposit(amount) {
      if (amount <= 0) {
        console.log("Invalid deposit amount. Please deposit a positive value.");
        return;
      }
      this.balance += amount;
      console.log(`${amount} deposited into the account.`);
      this.printBalance();
    }
  
    withdraw(amount) {
      if (amount <= 0) {
        console.log("Invalid withdrawal amount. Please withdraw a positive value.");
        return;
      }
      if (amount > this.balance) {
        console.log("Insufficient funds. Unable to withdraw.");
        return;
      }
      this.balance -= amount;
      console.log(`${amount} withdrawn from the account.`);
      this.printBalance();
    }
  
    printBalance() {
      console.log(`Current balance: ${this.balance}`);
    }
  }
  
  class SavingsAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance = 0, interestRate = 0.02) {
      super(accountNumber, accountHolder, balance);
      this.interestRate = interestRate;
    }
  
    applyInterest() {
      const interest = this.balance * this.interestRate;
      this.balance += interest;
      console.log(`Interest of ${interest.toFixed(2)} applied to the account.`);
      this.printBalance();
    }
  }
  
  class CheckingAccount extends BankAccount {
    constructor(accountNumber, accountHolder, balance = 0, overdraftLimit = 1000) {
      super(accountNumber, accountHolder, balance);
      this.overdraftLimit = overdraftLimit;
    }
  
    withdraw(amount) {
      if (amount > this.balance + this.overdraftLimit) {
        console.log("Transaction declined. Exceeding overdraft limit.");
        return;
      }
      super.withdraw(amount);
    }
  }
  
// Example usage:
const savingsAccount = new SavingsAccount("SAV12345", "Caio Mendonca");
savingsAccount.deposit(1000);
savingsAccount.applyInterest();
savingsAccount.withdraw(200);
  
const checkingAccount = new CheckingAccount("CHK98765", "Jane Smith", 500);
checkingAccount.deposit(300);
checkingAccount.withdraw(700);
  