// linear Search (video 56-58)

// function accpets an array and a value
// loop through the array and check if the current array elm is equal to a value
// If it is, return the index at which the element is found
// if the value is never found, return -1

function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}

console.log(findIndex([1, 2, 3, 4], 0));
