/** @format */



function copyArrayAndMultipulate(array, instruction) {
  const output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instruction(array[i]));
  }
  return output;
}

function multiplyBy2(input) {
  return input * 2;
}

const myArray = [1, 2, 3];

const result = copyArrayAndDivideBy2(myArray, multiplyBy2);

const result2 = map(myArray,input=> input * 2)
const result3 = myArray.map(input=> input * 2)
