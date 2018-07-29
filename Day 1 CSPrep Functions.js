console.log("Hello World!");
// Challenge 1
function printDriverHeight(){
var driverHeight = 64;
return driverHeight;
}
// Uncomment the line below to test your code
console.log(printDriverHeight())
// should print the driver's height



// Challenge 2


function printNavigatorName () {
  var navigatorName = 'Alex';
  return navigatorName;
}
// Uncomment the line below to test your code
console.log(printNavigatorName())

// should print the navigator's name


// Challenge 3
// Write your code here
// When you run it, it should print the driver's name followed by the navigator's name
function printName(name){
  return name
}

console.log(printName('Alex'));
console.log(printName('Mauricio'));

// Challenge 4

function printGroupName(driverName, navigatorName) {
  return driverName + ' and ' + navigatorName;
 }

// Uncomment the line below to test your code
console.log(printGroupName('Sonny', 'Cher'))

// should print 'Sonny and Cher'


// Challenge 5
function multiplyHeight(driverHeight,navigatorHeight){
  return driverHeight*navigatorHeight;
}
// Uncomment the line below to test your code
console.log('Challenge 5:', multiplyHeight(66, 72) === 4752)
// should print 'Challenge 5: true'



// Challenge 6

function square(number){
  return number*number;
}

// Uncomment the line below to test your code
console.log('Challenge 6:', square(3) === 9 && square(-4) === 16)
// should print 'Challenge 6: true'


// Challenge 7
function getArea(radius){
  return square(radius) * 3.14
}
// Uncomment the line below to test your code
console.log('Challenge 7:', getArea(5) === 78.5)
// should print 'Challenge 7: true'



// Challenge 8
//// Challenge 8
const makeNumArray = (start, end) => {
  let finalArray =[];
  for (let i=start; i <= end; i++) {
    finalArray.push(i)
  }
  return finalArray;
}

// Uncomment the line below to test your code
console.log('Challenge 8:', makeNumArray(1, 5));
// should print 'Challenge 8: [ 1, 2, 3, 4, 5 ]'


// Generates a number between 1 and 10
function getRandomNumber() {
  return Math.ceil(Math.random() * 10);
}

// Challenge 9
// Challenge 9
const lowHigh = (low, high) => {
  var number = getRandomNumber();
	if (number >= 1 && number <= 5){
    return number.toString() + ' ' + low;
  } else if (number >=6 && number <= 10){
    return number.toString() + ' ' + high;
  }
}
// Uncomment the line below to test your code
console.log('Challenge 9:', lowHigh('puppy', 'dog'));
// should print 'Challenge 9: 3 puppy' or 'Challenge 9: 6 dog'



// Challenge 9
// Write your code here
// Uncomment the line below to test your code
// console.log('Challenge 9:', lowHigh('puppy', 'dog'));
// should print 'Challenge 9: 3 puppy' or 'Challenge 9: 6 dog'


// Challenge 10
function challenge10() {
  return 5 + '5';
}
// console.log('Challenge 10:', challenge10()); // --> ??


// Challenge 11
function challenge11(x) {
  return 2 * 3 + x;
} 
// console.log('Challenge 11:', challenge11('5')); // --> ??
  
  
// Challenge 12
function challenge12() {
  return true + true;
}
// console.log('Challenge 12:', challenge12()); // --> ??
  

// Challenge 13
function challenge13() {
  return (true && false) + (true || false);
}
// console.log('Challenge 13:', challenge13()); // --> ??
  

// Challenge 14
var redundantArr = [1, 2, 1, 3, 4, 5, 4];
// Write your code here
// Uncomment the line below to test your code
// console.log('Challenge 14:', uniqueArr);
// should print 'Challenge 14: [ 1, 2, 3, 4, 5 ]'


// Challenge 15
// Write your code here
// Uncomment the line below to test your code
// console.log('Challenge 15:', sumRange(3));
// should print 'Challenge 14: 6'

// Challenge 16
// Write your code here
// Uncomment the line below to test your code
// console.log('Challenge 15:', getLength(['x', 'y', 'z']));
// should print 'Challenge 15: 3'


// Challenge 17
// Write your code here
// Uncomment the line below to test your code
// console.log('Challenge 17:', isEven(5));
// should print 'Challenge 17: false'


// Challenge 18
// Write your code here
// Uncomment the line below to test your code
// console.log('Challenge 18:', multiplier([1, 2, 3], 3));
// should print 'Challenge 18: [ 3, 6, 9 ]'

