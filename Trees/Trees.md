# Trees

## What is a Tree?

A data structure that consists of nodes in a parent / child relationship

Each node can point to multiple nodes.

Lists => Linear
Trees => Nonlinear

### Tree Terms

- Root: The top node in a tree
- Child: A node directly connected to another node when moving away from the Root
- Parent: The converse notion of a child
- Siblings: A group of nodes with the same parent
- Leaf: A node with no children
- Edge: The connection between one node and another

### Tree Structures Use Cases

- HTML & DOM
- JSON
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operation Systems
- Computer File Systems

### Binary Search Tree

- Every parent node has at most two children
- Every node to the left of a parent node is "always less" than the parent
- Every node to the right of a parent node is "always greater" than the parent

##### Big O:

Insertion - O(log n)
Searching - O(log n)
\*\* Not guaranteed!
