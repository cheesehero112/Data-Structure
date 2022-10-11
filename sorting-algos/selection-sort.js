// Selection sort algo

// 1. store the first element as the smallest value you've seen so far
// 2. Compare this item to the next item in the array until you find a smaller number
// 3. if a smaller number is found, designate that smaller number to be the new minimus and continue until the end of the array
// 4. If the minimum is not the value(index) you initially began with, swap the two values
// 5. Repeat this with the next element until the array is sorted

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestIndex]) {
        smallestIndex = j;
      }
    }
    if (smallestIndex !== i) {
      [arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([10, 0, 3, 2, 1, 4]));
