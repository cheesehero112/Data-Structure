// Video #28 Challenge
// Anagrams //
// Frequency Counter Pattern Study //

// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// No spaces, numbers or non-letters are provided
// input will always be 2 strings
// output: boolean

const validAnagram = (str1, str2) => {
  // edge cases:
  // if both inputs are empty, return true
  if (str1 === "" && str2 === "") return true;
  // if the length of the 2 strings are different, return false
  if (str1.length !== str2.length) return false;
  // create an frequency Counters of str1 & str2
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (const val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of str2) {
    if (frequencyCounter2[val]) {
      frequencyCounter2[val] += 1;
    } else {
      frequencyCounter2[val] = 1;
    }
  }
  //   console.log("str1 counter is: ", frequencyCounter1);
  //   console.log("str2 counter is: ", frequencyCounter2);
  // Loop over the str1Obj:
  for (const key in frequencyCounter1) {
    // compare if counter2 has the same key (letter)
    if (!(key in frequencyCounter2)) {
      // if not, return false
      return false;
    }
    // compate if str2Obj has the same value (frequency of the letter)
    if (frequencyCounter1[key] !== frequencyCounter2[key]) {
      // if not, return false
      return false;
    }
  }
  // return true
  return true;
};

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagram", "nagaram")); // true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwert", "qetrw")); // true
