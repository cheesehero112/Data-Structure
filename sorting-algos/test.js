// const doubleChar = (str) => {
//   const word = str.split("");
//   // let newArr = []
//   const newArr = word.map((char) => {
//     return char + char;
//     // newArr.push(char + char)
//   });
//   return newArr.join("");
// };

// const doubleChar = (str) => {
//   let word = str.split("");
//   // let newArr = []
//   return word.map((char) => {
//     return char + char;
//     // newArr.push(char + char)
//     //return newArr.join('') //
//   });
// };

const doubleChar = (str) => {
  let output = "";

  for (let i = 0; i < str.length; i++) {
    output += str[i] + str[i];
  }

  return output;
};

console.log(doubleChar("Hello World!")); // should log : 'HHeelllloo WWoorrlldd!!' but logs "['HH', 'ee', 'll', 'll', 'oo', ' ', 'WW', 'oo', 'rr', 'll', 'dd', '!!']"
