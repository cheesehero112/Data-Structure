"use strict";

// Video 31 - <Multiple Pointers>

// Implement a function called countUniqueValues, which accepts a sorted array, and countes the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

const countUniqueValues = (array) => {
  // edge case: if array has no element, return 0
  if (array.length === 0) return 0;
  // create a left pointer
  let leftPointer = 0;
  // create a right pointer
  let rightPointer = 1;
  // iterate the array
  while (rightPointer < array.length) {
    // compare rp to lp and check if they are the same
    if (array[leftPointer] === array[rightPointer]) {
      // if same, increment rp by 1
      rightPointer++;
      // if not the same, increment lp by 1, reassign lp value with rp value
    } else {
      leftPointer++;
      array[leftPointer] = array[rightPointer];
    }
  }
  // return lp plus 1
  return leftPointer + 1;
};

// tests
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
