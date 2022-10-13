/* ======= Hash Table (Hash Map) ========= //

- Used to store key-value pairs
- They are like arrays, but the kets are not ordered
- Unlike arrays, hash tables are fast for all of the following operations: 
>>>> finding values, adding new values, and removing values.

- Popular data structure in many languages:
>>>> Python => Dictionaries
>>>> JavaScript => Objects and Maps
>>>> Java, Go & Scala => Maps
>>>> Ruby => Hashes

Big O:
Intert - O(1)
Deletion - O(1)
Access - O(1)

*/

// ==== Array Implimentation ==== //
// I can access character code as below
"a".charCodeAt(0); // 97
"a".charCodeAt(0) - 96; // 1

// Issues with current version:
// - This only works for string data type (but it's okay for this one)
// - This is NOT constant time
// - Could be a little more random
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// console.log(hash("hiya", 10));

// Improved version:
function hash2(key, arrayLen) {
  let total = 0;
  let prime = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * prime + value) % arrayLen;
  }
  return total;
}
// test //
// console.log(hash2("hello", 13));
// console.log(hash2("cat", 13));
// console.log(hash2("hat", 13));

/*

// === Dealing with Collisions === //

1. Separate Chaining
At each index in our array we store values using a more sophisticated data structure (i.e. - an array or a linked list)

2. Linear Probing
When we find a collision, we search through the array to find the next empty slot.
Unlike with separate chaining, this allows us to store a single key-value pait at each index.

*/

// === Hash Table Class Implimentation === //

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, value) {
    let index = this._hash(key);
    if (this.keyMap[index] === undefined) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this._hash(key);
    if (!this.keyMap[index]) return undefined;
    for (let i = 0; i < this.keyMap[index].length; i++) {
      if (this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }
    }
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i] !== undefined) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArray.includes(this.keyMap[i][j][0])) {
            keysArray.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArray;
  }
  values() {
    const valuesArray = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i] !== undefined) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArray.includes(this.keyMap[i][j][1])) {
            valuesArray.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArray;
  }
}
// Tests //
let myHash = new HashTable(15);
myHash.set("hello", 20);
myHash.set("hello", 1);
myHash.set("goodbye", 18);
myHash.set("good afternoon", 34);
myHash.set("good", 2);
myHash.set("great", 2);
console.log(myHash);
console.log(myHash.get("hello"));
console.log(myHash.get("hey"));
console.log(myHash.get("goodbye"));
console.log(myHash.keys());
console.log(myHash.values());
// to print out each item (key or value)
// - below prints "values" because get() accesses values only.
myHash.keys().forEach((key) => console.log(myHash.get(key)));

/* 

// === Set Psuedocode  === //
(adds a value)
- Accepts a key and a value
- Hashes the key
- Stores the key-value pair in the hash table array via separate chaining

// === Get Psuedocode  === //
(gets a value)
- Accepts a key
- Hashes the key
- Retrieves the key-value pair in the hash table 
- If the key isn't found, returns undefined

// === Keys Psuedocode  === //
- Loops through the hash table array and return an array of keys in the table

// === Values Psuedocode  === //
- Loops through the hash table array and returns an array of values in the table

 */
