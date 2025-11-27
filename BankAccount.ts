// 2. Bank Account
// Create a class BankAccount with a private property balance (number). Add methods:
// · deposit(amount: number): void
// · withdraw(amount: number): void
// · getBalance(): number
// Ensure that withdrawing more than the balance is not allowed.

class BankAccount {
   private balance: number;

   constructor(balance: number) {
      this.balance = balance;
   }

   deposit(amount: number): void {
      if (amount > 0) {
         this.balance += amount;
      }
   }

   withdraw(amount: number): void {
      amount > this.balance
         ? console.log(
              `Insufficient funds: your balance is ${this.balance}$, but you requested ${amount}$.`
           )
         : (this.balance -= amount);
   }

   getBalance(): number {
      return this.balance;
   }
}

const account1 = new BankAccount(100);
account1.deposit(50);
account1.withdraw(30);
console.log(account1.getBalance());

const account2 = new BankAccount(20);
account2.withdraw(30);
console.log(account2.getBalance());
