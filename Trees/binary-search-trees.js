/* ======= Binary-Search-Tree (BST) ========= //

- Every parent node has at most two children
- Every node to the left of a parent node is "always less" than the parent
- Every node to the right of a parent node is "always greater" than the parent

Big O:
Insertion - O(log n)
Searching - O(log n)
** Not guaranteed!

 */

// === The BST Class === //

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  // this returns true/false
  find(value) {
    if (this.root === null) return false;
    let current = this.root;
    while (true) {
      if (value === current.value) return true;
      if (value < current.value) {
        if (current.left === null) return false;
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) return false;
        current = current.right;
      }
    }
  }
  findValue(value) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
}

let myBST = new BinarySearchTree();
// manual way to add nodes
// myBST.root = new Node(10);
// myBST.root.right = new Node(15);
// myBST.root.left = new Node(7);
// myBST.root.left.right = new Node(9);
myBST.insert(10);
myBST.insert(15);
myBST.insert(7);
myBST.insert(3);
myBST.insert(1);
myBST.insert(11);
console.log(myBST.find(50));
console.log(myBST.find(3));
console.log(myBST.find(100));

//console.log(myBST.root);

/* === Insert Pseudocode  === //
- Create a new node
- Starting at the root
+ check if there is a root, if not, the new node becomes the new root
+ If there is a root, check if the value of the new node is greater than or less than the value of the root
+ If it is greater
>>>> Check to see if there is a node to the right
>>>>>>> if there is, move to that node and repeat these steps
>>>>>>> if there is not, add that node as the right prop
+ If it is less
>>>> Check to see if there is a node to the left
>>>>>>> If there is, move to that node and repeat these steps
>>>>>>> If there is not, add that node as the left prop
- Return the whole tree
 */

/* === Find Pseudocode  === //
- Starting at the root
+ check if there is a root, if not, we are done searching
+ If there is a root, check if the value of the new node is the value we are looking for. If we found it, we are done.
+ If not, check to see if the value is greater than or less than the value of the root
>> If it is greater
>>>> Check to see if there is a node to the right
>>>>>> if there is, move to that node and repeat these steps
>>>>>> if there is not, we are done searching.
+ If it is less
>>>> Check to see if there is a node to the left
>>>>> If there is, move to that node and repeat these steps
>>>>> If there is not, we are done searching.
- Return true or false
 */
