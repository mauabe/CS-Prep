Day 6 

////////////////////////////
//     DELETE DUPS
////////////////////////////

// Write a function that takes in an array and returns a new array with duplicates removed

function deleteDups(arr) {
  return Object.keys(arr.reduce((acc, curr) => {
  	acc[curr] = true;
    return acc;
  }, {}));
}

// Extension: solve in 0(n) time

function dupsTests() {
  console.log(deleteDups(['a', 'a', 'a', 'a', 'a']), ' -> [a]');
  console.log(deleteDups(['a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
  console.log(deleteDups(['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']), ' -> [a, b, c, d]');
}

// dupsTests() // Uncomment to check code!



////////////////////////////
//     FIND UNIQUE
////////////////////////////

// Write a function that takes in array in which every number appears exactly twice, except for one number which appears exactly once

function uniqueNumber(array) {
  if (!Array.isArray(array)) return;
  return (array.reduce((acc, curr) => { return acc ^ curr }, 0) ^ 0); // XOR is dope
}

function uniqueNumberTests() {
  console.log(uniqueNumber([1,2,2,1,3, 7, 3]), ' -> 7');
  console.log(uniqueNumber([1,2,2,1,3]), ' -> 3');
  console.log(uniqueNumber([1,2,2,1,3, 7, 3, 5, 5, 6, 6, 7, 9, 8, 9]), ' -> 8');
}

// uniqueNumberTests() // uncomment to test!



// Challenge: give this function 0(n) time complexity, 0(1) space complexity

