// DAY 6 Challenge

// Challenge 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below some input n and return that sum.

const arr10 = [0,1,2,3,4,5,6,7,8,9,10];
function sumMultiples3Or5(n) {
  const arr35= [ ];
  arr35 = ar35.filter(arr10, (arr10[i] % 3 ===0 || arr[i] % 5 === 0));
  arr35.push(arr10, functionarr35(n))
  const sum35 = arr35.reduce(a,b){return (a+b)}
  console.log(sum35);
  
}


// Challenge 2

// given 2 arrays that may contain both numbers and strings
// return a new array with the numbers and/or strings that appear in both arrays
// duplicates are only counted once;
// for example == given the following input

  // var array1 = [1,4,6,7,'ferret',12,12,99,2000,'dog','dog',99,1000];
  // var array2  = [15,9,9,'ferret',9,26,12,12,'dog'];

// your output would be [ 12, 'ferret', 'dog']

// if there are no common numbers or strings return []"

function commonElements(array1, array2){

}

// challenge: modify commonElements to take in 3 arrays and return only elements that all 3 have