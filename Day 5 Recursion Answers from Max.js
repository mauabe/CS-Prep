Day 5 Recursion Answers from Max.js


////////////////////////////
//     Challenge 1
////////////////////////////

// Repeater
// Modify the function so that it returns a string containing the input character repeated 5 times
// Use recursion!

function repeater2(char, n = 5) {
	if (n === 0) return '';
  return char + repeater(char, n-1);
}

function repeater(char, n = 1000000, str = '') {
	if (n === 0) return str;
  str += char;
  return repeater(char, n-1, str);
}



// To check if you've completed the challenge, uncomment these console.logs!
// console.log(repeater('g')); // -> 'ggggg'
// console.log(repeater('j'));// -> 'jjjjj'


////////////////////////////
//     Challenge 2
////////////////////////////

// Is Even
// Modify the function so that it returns true if a number is even (and false if it's not)
// assume input will be a positive integer
// Use recursion!

function isEven(n) {
	if (n === 0) return true;
  return !isEven(n-1);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(isEven(0)); // -> true
// console.log(isEven(5)); // -> false
// console.log(isEven(10)); // -> true



////////////////////////////
//     Challenge 3
////////////////////////////

// Factorial
// Modify the function so that it returns the factorial of an input number
// Use recursion!
// The factorial of n is the product of all numbers between 1 and n
// Ex: 5! = 5 * 4 * 3 * 2 * 1;


function factorial2(num) {
  if (num === 0) return 1;
	return num * factorial(num - 1);
}

function factorial(num, product = 1) {
  if (num === 0) return product;
	return factorial(num - 1, product * num);
}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(factorial(4)); // -> 24
// console.log(factorial(6)); // -> 720
// console.log(factorial(0)); // -> 1




////////////////////////////
//     Challenge 4
////////////////////////////

// Get Length
// Modify the function so that it returns the length of an array recursively, without using the .length property
// Use recursion!
// Hint: when you index outside of an array, it returns undefined

function getLength(array, i = 0) {
	if (array[i] === undefined) return i;
  return getLength(array, i + 1);
}

// To check if you've completed the challenge, uncomment these console.logs!
console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5


////////////////////////////
//     Challenge 5
////////////////////////////

// POW
// Modify the function so that it returns base to the power of exponent
// Use recursion!
// Ex: pow(5, 3) = 5 * 5 * 5

function pow(base, exponent) {

}

// To check if you've completed the challenge, uncomment these console.logs!
// console.log(pow(2, 4)); // -> 16
// console.log(pow(3, 5)); // -> 243

////////////////////////////
//     Challenge 6
////////////////////////////

// Flow
// Modify the function so that it returns the result of running the input number through each function in funcArray, in order
// Use recursion!
// First do it recursively, if you have time at the end try using a reduce function

function flow2(input, funcArray, i = 0) {
	if (funcArray[i] === undefined) return input;
  return flow(funcArray[i](input), funcArray, i + 1);
}

function flow(input, funcArray, i = 0) {
	if (funcArray[i] === undefined) return input;
  return funcArray[i](flow(input, funcArray, i + 1));
}


// To check if you've completed the challenge, uncomment this code!
function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num % 4; }
function subtract10(num) { return num - 10; }
let arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
arrayOfFunctions = arrayOfFunctions.reverse();
console.log(flow(2, arrayOfFunctions)); // -> -7



////////////////////////////
//     Challenge 7
////////////////////////////

// Fibinacci
// Modify the function so that it returns the nth Fibinacci number. Try not to look back at the slides!
// Use recursion!
// Fibinaccia reference: [1, 1, 2, 3, 5, 8, 13, ...]

function fib(n) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(function fib(1)); // -> 1
// console.log(function fib(2)); // -> 1
// console.log(function fib(7)); // -> 13

////////////////////////////
//     Challenge 8
////////////////////////////

// Heads or Tails
// Use recursion!
// Modify the function so that it returns all possible outcomes of n games of heads or tails as an array of arrays

function headsOrTails(n) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(function headsOrTails(2)); // -> [['heads', 'heads'], ['heads', 'tails'], ['tails', 'heads'], ['tails', 'tails']]
// console.log(function headsOrTails(2));
// -> [
//   ['heads', 'heads', 'heads'],
//   ['heads', 'heads', 'tails'],
//   ['heads', 'tails', 'heads'],
//   ['heads', 'tails', 'tails'],
//   ['tails', 'heads', 'heads'],
//   ['tails', 'heads', 'tails'],
//   ['tails', 'tails', 'heads'],
//   ['tails', 'tails', 'tails'],
// ]

////////////////////////////
//     Challenge 9
////////////////////////////

// Combos of Any length
// Use recursion!
// Modify this function so that it returns all combinations of the elements of arr as an array of arrays

function getAllCombos(arr) {

}

// To check if you've completed the challenge, uncomment this code!
// console.log(function getAllCombos(['a', 'b'])); // -> [['ab'], ['a'], ['b'], []]
// console.log(function getAllCombos(['a', 'b', 'c']));
// -> [
//   ['a', 'b', 'c'],
//   ['a', 'b'],
//   ['a', 'c'],
//   ['a'],
//   ['b', 'c'],
//   ['b'],
//   ['c'],
//   [],
// ]


function twoSum(arr, target) {
  for (let i = 0; i < arr.length - 1; i ++) {
    for (let j = i + 1; j < arr.length; j ++) {
    	if (arr[i] + arr[j] === target) return true;
  	}
  }
  return false;     
}


function sum(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num
  }
  return sum
}

function recSum(n, arr, target, start = 0, elems = []) {
  if (n === 0) {
    console.log(elems);
    return sum(elems) === target;
  }
  for (let i = start; i < arr.length - n + 1; i ++) {
    let x = elems.slice();
    x.push(arr[i]);
    if (recSum(n-1, arr, target, i + 1, x)) return true
  }
  return false;
}

function tests(x) {
  let arr = [1, 5, 9, 4, 11];
  console.log(x(3, arr, 10)); // -> true
  console.log(x(2, arr, 8)); // -> false
  console.log(x(2, arr, 1)); // -> false
  console.log(x(2, arr, 15)); // -> true
  console.log(x(2, arr, 20)); // -> true
}

tests(recSum);