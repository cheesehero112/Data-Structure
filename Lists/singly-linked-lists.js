/* ==== What is a Singly Linked List? =====

A data structure that contains a:
- head
- tail
- length
property.

Linked Lists consist of nodes, and each node has a value and a pointer to another node or null

It's like a skyscraper with only the stairs - array has an elevator.

Notes:
- Don't have indexes
- Connected via nodes with a next pointer
- Random access is NOT allowed 
- Insertion and deletion is easy unlike Array

Big O:
Insertion - O(1)
Removal - it depends...O(1) or O(N)
Searching - O(N)
Access - O(N)

*/

// piece of data - val
// reference to next node - next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }
  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length -= 1;
    return current;
  }
  unshift(val) {
    let currentHead = this.head;
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = currentHead;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  set(index, val) {
    if (!this.get(index)) {
      return false;
    } else {
      this.get(index).val = val;
      return true;
    }
  }
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let temp = prevNode.next;
    prevNode.next = newNode;
    newNode.next = temp;
    this.length += 1;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let prevNode = this.get(index - 1);
    let nodeToRemove = this.get(index);
    prevNode.next = nodeToRemove.next;
    this.length -= 1;
    return nodeToRemove;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let prev = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}

// if we don't make a method, this is how to add nodes === annoying.
// let first = new Node("Hi");
// first.next = new Node("there");
// first.next.next.next = new Node("how");
// first.next.next.next.next = new Node("are");
// first.next.next.next.next.next = new Node("you");

let list = new SinglyLinkedList();
list.push("Hello");
list.push("there");
// list.push("Justin");
list.push("have a great day");
// console.log(list.pop());
// console.log(list);
//console.log("from shift: ", list.shift());
//console.log(list);
//console.log("from unshift: ", list.unshift("Hey!"));
// console.log("from unshift: ", list.unshift("Ho!"));
// console.log("from unshift: ", list.unshift("Let's go!"));
//console.log(list);
//console.log(list.get(9));
//list.push("Hello");
// console.log("pushed!", list.push("Justin"));
//console.log(list.set(0, "Chihiro"));
//console.log(list);
console.log(list.insert(0, "cat"));
// console.log(list.insert(0, "bat"));
console.log(list.insert(1, "cow"));
console.log("after insert: ", list);
console.log(list.remove(1));
console.log(list.remove(0));
// console.log(list.pop());
list.print();
list.reverse();
list.print();
// console.log(list);

/* === POP pseudocode === //
- if there are no nodes in the list, return undefined
- loop through the list until you reach the tail
- set the next property of the 2nd to last node to be null
- set the tail to be the 2nd to last node
- decrement the length of the list by 1
- return the value of the node removed
 */

/* === Shift pseudocode ===  //
- If there are no nodes, return undefined
- store the current head propert in a variable
- set the head property to be the current head's next property
- decrement the length by 1
- return the value of the node removed
*/

/* === Unshift pseudocode === //
- function accept a vallue
- create a new node using the vlue passed to the function
- if there is no head prop on the list, set the head and tail to be the newly created node
- otherwise set the newly created node's next prop to be the current head prop on the list
- set the head prop on the list to be that newly created node
- icrement the length by 1
- return the linked list (this)
 */

/* === GET method === //
- this function should accept an index
- if the index is less than zero or greater than or equal to the length of the list, return null
- Loop through the list until you reach the index and return the node at the specific index (make a counter)
*/

/* === Set method === //
- this function should accept a value and an index
- Use your get function to find the specific node.
- If the node is not found, return false
- If the node is found, set the value of that node to be the value passed to the function and return true
*/

/* === Insert method === //
- this function should accept a value and an index
- If the index is less than zero or greater than the length, return false
- If the index is the same as the length, push a new node to the end of the list
- If the index is 0, unshift a new node to the start of the list
- Otherwise, using the get method, access the node at the index - 1
- Set the next prop on that node to be the new node
- Set the next prop on the new node to be the previous next 
- Increment the length
- Return true
*/

/* === Remove method === //
- this function should accept an index
- If the index is less than zero or greater than the length, return undefined
- If the index is the same as the length - 1, pop
- If the index is 0, shift 
- Otherwise, using the get method, access the node at the index - 1
- Set the next prop on that node to be the next of the next node
- Decrement the length
- Return the value of the node removed
*/

/* === Reverse method === //
- swap the head and tail
- create a variable called next
- createa a variable called prev
- create a variable called node and initialize it to the head prop
- loop through the list
- set next to be the next prop on whatever node is
- set the next prop on the node to be whatever prev is
- set prev to be the value of the node variable
- set the node variable to be the value of the next variable
*/
