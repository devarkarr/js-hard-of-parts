/** @format */

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

// callback
greet("Arkarlin", sayBye);

// higher order function
function multiplier(x) {
  return function (y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // 10
