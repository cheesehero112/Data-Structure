// Insersion sort

// 1. Start by picking the second element in the array
// 2. Now compare the second element with the one before it and swap if necessary
// 3. Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place
// 4. Repeat until the array is sorted

function insersionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    console.log("arr in outer loop: ", arr);
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      console.log("arr before swap: ", arr);
      console.log("j+1 & j & currentval before swap: ", arr[j + 1], arr[j], currentVal);
      arr[j + 1] = arr[j];
      arr[j] = currentVal;
      console.log("j+1 & j & currentVal after swap: ", arr[j + 1], arr[j], currentVal);
      console.log("arr after swap: ", arr);
    }
    console.log("outer loop done!");
  }
  return arr;
}
console.log(insersionSort([3, 15, 2, 0]));
