/** @format */

function outer() {
  let count = 0;

  function add1() {
    count++;
  }
  return add1
}

const newFunc = outer();
newFunc()
newFunc()
