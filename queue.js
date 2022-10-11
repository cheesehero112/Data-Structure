/* ======= Queue =======  ///
- A FIFO data structure:
(First In First Out)
The first element added to the stack will be the first element removed from the stack.

Use Examples:
- used to handle waiting line 
- background tasks, uploading resources
- Printing/ Tast processing 

Big O:
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(N)

*/

// === Array Implementation === //

/* 
Notes:
Array can work for queue data structure, but using unshift or shift require re-indexing, therefore not ideal. Using Class based custom queue can perform better. 

However, it is "easy" and makes the code shorter if implementing for a complicated problem.
*/

const q = [];
// These 2 patterns will achieve the queue structure to add items and removing them.

// 1. Using push & shift

q.push("First");
q.push("Second");
q.push("Third");
q.shift();
q.shift();
q.shift();

// 2. Using unshift & pop

q.unshift("First");
q.unshift("Second");
q.unshift("Third");
q.pop();
q.pop();
q.pop();

// === Class Implementation === //

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return (this.size += 1);
  }
  dequeue() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size -= 1;
    return temp.val;
  }
  // testing method //
  print() {
    let arr = [];
    let current = this.first;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr, `length is ${this.size}`);
  }
}

// Test //
let newQ = new Queue();
newQ.enqueue("First");
newQ.enqueue("Second");
newQ.enqueue("Third");
newQ.print();
console.log(newQ.dequeue());
console.log(newQ.dequeue());
console.log(newQ.dequeue());
newQ.print();

/* === Enqueue Pseudocode  === //
(adds a value to the end)
- the function accepts a value
- Create a new node using that value passed to the function
- If there are no nodes in the queue, set this node to be the first and last prop of the queue
- return the new length
 */

/* === Dequeue Pseudocode  === //
(removes a value from the beginning)
- If there is no first prop, just return null
- Store the first prop in a variable
- See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null.
- If there is more than 1 node, set the first prop to the next prop of first
- Decrement the size by 1
- Return the value of the node dequeued
 */
