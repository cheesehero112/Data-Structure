/* ======= Stacks =======  ///
- A LIFO data structure:
(Last In First Out)
The last element added to the stack will be the first element removed from the stack

Use Examples:
- used to handle function invocations (the call stack)
- undo/ redo operations
- webpage routing (remembeing which pages were visited)

Big O:
Insertion - O(1)
Removal - O(1)
Searching - O(N)
Access - O(N)

*/

// ===== Array implementation ======= //
const stack = [];
stack.push("google");
stack.push("instagram");
stack.push("youtube");

//console.log(stack);

// ===== Class implementation ======= //
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.nodeValue;
  }
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

// tests //
let myStack = new Stack();
myStack.push("hello");
myStack.push("there");
myStack.pop();
myStack.print();

/* === Pushing Pseudocode ===
- the function should accept a value
- create a new node with that value
- If there are no nodes in the stack, set the first and last prop to be the newly created node
- If there is at least one node, create a variable that stores the current first prop on the stack
- Reset the first prop to be the newly created node
- Set the next prop on the node to be the previously created variable
- Increment the size of the stack by 1
- Return the size
 */

/* === Popping Pseudocode === //
- the function does not accept any value
- Create a temp variable to store the first prop on the stack
- If there is only 1 node, set the first and last prop to be null
- If there is more than one node, ste the first prop to be next prop on the current first
- decrement the size of the stack by 1
- Return the value of the node removed
 */
