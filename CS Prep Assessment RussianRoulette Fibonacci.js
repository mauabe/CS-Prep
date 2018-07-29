/* CS Prep Assessment
Challenge 1: Select
Define a function select which takes two arguments, an array and a callback function. The callback function can be considered a test in that it will return either true or false depending on the input. select will iterate/loop through the array and pass each array element to the callback as an argument.

If the callback called on a certain value returns true, the original value (the input to the callback) is pushed to a new array. select will return this new array.


Challenge 2: Russian Roulette
Define a function russianRoulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string ‘click’ the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string ‘bang’. On every invocation after that, the returned function returns the string ‘reload to play again’.


Challenge 3: nth Fibonacci
Define a function nthFibonacci that takes a number n and returns n's corresponding Fibonacci number.

Fibonacci series: 1, 1, 2, 3, 5, 8, 13, 21, 34 (each number is found by adding the previous two)
More Info: https://en.wikipedia.org/wiki/Fibonacci_number
*/


// CHALLENGE 1 - ADD CODE BELOW
function select(array, callback){
  let newArray = array.filter(callback); 
    return newArray;
  }

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const arr = [1, 2, 3, 4, 5];
const isEven = n => n % 2 === 0;
console.log(select(arr, isEven)); // should log: [2, 4]

console.log('Challenge2')

//CHALLENGE 2 - ADD CODE BELOW

function russianRoulette(n){
  let counter = 0;
  return function x(){
    counter ++;
    if (counter < n) return 'click';
    else if (counter === n) return 'bang';
    else if (counter > n) return 'reload to play again';
  }
}

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
const play = russianRoulette(3);
console.log(play(1)); // should log: ‘click’
console.log(play(2)); // should log: ‘click’
console.log(play(3)); // should log: ‘bang’
console.log(play(4)); // should log: ‘reload to play again’
console.log(play(6)); // should log: ‘reload to play again’



// CHALLENGE 3 - ADD CODE BELOW
console.log('Challenge3');
function nthFibonacci(n){
  if (n <= 1) return 1;
  return nthFibonacci(n-1) + nthFibonacci(n-2);
  }

// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(nthFibonacci(1)); // should log: 1, the series starts with the second 1
console.log(nthFibonacci(2)); // should log: 2
console.log(nthFibonacci(3)); // should log: 3
console.log(nthFibonacci(4)); // should log: 5
console.log(nthFibonacci(12)); // should log: 233
