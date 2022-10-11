// Bubble Sort

// start looping from the end with a variable called i the end of the array towards the beginning
// Start an inner loop with a variable called j from the beginning until i - 1
// if arr[j] is greater than arr[j + 1], swap those two values
// return the sorted array

// by adding noSwaps variable, I can short circuit the search!
function bubbleSort(arr) {
  const sortedArr = arr;
  let noSwaps = true;
  for (let i = arr.length; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return sortedArr;
}

console.log(bubbleSort([4, 3, 11, 6, 2, 0, 40, -2, 302]));

// cool sorting visualization website
// https://www.toptal.com/developers/sorting-algorithms
