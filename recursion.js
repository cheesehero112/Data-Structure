/* power
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent. This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.*/

function power(base, exponent) {
  // base case : if exponent is 0, return 1
  if (exponent === 0) return 1;
  // base x base - recurse "exponent" times
  // recurse base x power(base, exponent - 1)
  return base * power(base, exponent - 1);
}
// test cases //
// console.log(power(2, 0)); // 1
// console.log(power(2, 2)); // 4
// console.log(power(2, 4)); // 16

/* factorial
Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it; e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1. */

function factorial(num) {
  // base case : if num is 0, return 1 & if num is 1, return 1
  if (num === 0) return 1;
  if (num === 1) return 1;
  // recurse num x factorial with num - 1
  return num * factorial(num - 1);
}

// test cases //
// console.log(factorial(1)); // 1
// console.log(factorial(2)); // 2
// console.log(factorial(4)); // 24
// console.log(factorial(7)); // 5040

/* productOfArray
Write a function called productOfArray which takes in an array of numbers and returns the product of them all. */

function productOfArray(arr) {
  // create a product variable
  let product = 1;
  // make helper function
  function productHelper(array) {
    // base case: array length is 0, return product
    if (array.length === 0) return;
    // arr[0] x shorterArray[0] => (arr.slice(1))
    product *= array[0];
    console.log("current product: ", product);
    productHelper(array.slice(1));
  }
  // call helper
  productHelper(arr);
  // return product
  return product;
}

// test cases //
console.log(productOfArray([1, 2, 3])); // 6
console.log(productOfArray([1, 2, 3, 10])); // 60
