/** @format */

function outer() {
  let count = 0;

  function inner() {
    count++;
    console.log(count);
  }

  return inner;
}

const counter = outer();

counter(); // 1
counter(); // 2
counter(); // 3



function createBank() {
  let balance = 1000

  return {
    deposit(amount) {
      balance += amount
    },
    getBalance() {
      return balance
    }
  }
}

const bank = createBank()

bank.deposit(500)