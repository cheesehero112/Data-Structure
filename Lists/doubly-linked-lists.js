/* ==== What is a Doubly Linked List? =====

A data structure that contains a:
- head
- next/ previous pointers
- tail
- length
property.

Notes:
- Doubly Linked List is ALMOST identical to Singly Linked Lists, except every node has another pointer to the "previous" node.
- Don't have indexes
- Random access is NOT allowed 
- Insertion and deletion from the tail is very easy unlike SLL.
- It takes up more memory

Big O:
Insertion - O(1)
Removal - it depends...O(1) or O(N)
Searching - O(N)
Access - O(N)

*/

// === Class Implementation === //

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length -= 1;
    return poppedNode.val;
  }
  shift() {
    if (this.length === 0) return undefined;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length -= 1;
    return oldHead;
  }
  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index < 0 || index === Math.floor(this.length / 2)) {
      let counter = 0;
      let current = this.head;
      while (counter < index) {
        counter++;
        current = current.next;
      }
      return current;
    } else {
      let counter = index;
      let current = this.tail;
      while (counter > index) {
        counter--;
        current = current.prev;
      }
      return current;
    }
  }
}

let DLL = new DoublyLinkedList();
DLL.push(2);
DLL.push(4);
DLL.push(11);
// console.log(DLL.pop());
// console.log(DLL.pop());
// console.log(DLL.shift());
// console.log(DLL.shift());
console.log(DLL.unshift("I'm from unshift"));
console.log(DLL.unshift("I'm from unshift again"));
console.log(DLL.get(4));
//console.log(DLL);

/* 
// === PUSH pseudocode === //
- Create a new node with the value passed to the function
- If the head prop is null set the head and tail to be the newly created node
- If not, set the next prop on the tail to be that node
- Set the previous prop on the newly created node to be the tail
- set the tail to be the newly created node
- Increment the length by 1
- return the Doubly Linked List

// === POP pseudocode === //
- If there is no head, return undefined
- Store the current tail in a variable to return later
- If the length is 1, set the head and tail to be null
- Update the tail to be previous Node
- Set the newTail's next to null
- Decrement the length by 1
- return the value removed

// === SHIFT pseudocode === //
(removes a node from the beginning)
- If length is 0, return undefined
- Store the current head prop in a variable (oldHead)
- If the length is 1,
>> - set the head to be null
>> - set the tail to be null
- Update the head to be the next of the old head
- Set the head's prev prop to null
- Set the oldHead's next to null
- Decrement the length
- return the oldHead

// === UNSHIFT pseudocode === //
(adds a node at the beginning)
- Create a new node with the value passed in to the function
- If the length is 0
>> - Set the head to be the new node
>> - Set the tail to be the new node
- Othereise
>> - Set the prev prop on the head of the list to be the new node
>> - Set the next prop on the new node to be the head prop
>> - Updated the head to be the new node
- Increment the length
- return the list (this)

// === GET pseudocode === //
(get a node at the provided index)
- If the index is less than 0 or greater or equal to the length, return null
- If the index is less than or equal to half the length of the list
>> - Loop through the list starting from the head and loop towards the middle
>> - Return the node once it is found
- If the index is greater than half the length of the list
>> - Loop through the list starting from the tail and loop towards the middle
>> - Return the node once it is found
*/
