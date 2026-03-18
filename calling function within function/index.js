/** @format */

function outer() {
  let count = 0;

  function add1() {
    count++;
  }
  add1();
}

outer();
