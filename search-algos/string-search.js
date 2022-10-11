// Naive String Search

// Loop over the longer str
// Loop over the shorter str
// if the char don't match, breaj out put the inner loop
// if the char do match, keep going
// if you complete the inner loop and find a match, increment the count of matches
// return the count

function matchFinder(str, target) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < target.length; j++) {
      if (str[i + j] !== target[j]) break;
      if (j === target.length - 1) count++;
    }
  }
  return count;
}

console.log(matchFinder("avocadocornbanana", "avo")); // 1
