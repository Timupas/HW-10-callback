//1========================================================
const arr = [1, 2, 3, 4, 5];

const processArray = (array, callback) => {
    return callback(array);
}

const plusNum = (a, b) => {
    let res = 0;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        res += element
    }
    return res;
}
console.log(processArray(arr, plusNum));


const minNum = array => {
  let min = array[0];
  for (const a of array) {
    if (a < min) {
        min = a
    }
  }
  return min;
}
console.log(processArray([5, 2, 5, 6,], minNum));


const maxNum = array => {
  let max = array[0];
  for (const b of array) {
    if (b > max) {
        max = b
    }
  }
  return max;
}
console.log(processArray([5, 2, 5, 6,], maxNum));

//================================================================
const a = 10;
const b =  5;

const operate = (a, b, callback) => callback(a, b);

const add = (x, y) => x + y;
console.log(operate(a, b, add));

const subtract = (x, y) => x - y;
console.log(operate(a, b, subtract));

const multipli = (x, y) => x * y;
console.log(operate(a, b, multiply));

const divid = (x, y) => x / y;
console.log(operate(a, b, divid));








