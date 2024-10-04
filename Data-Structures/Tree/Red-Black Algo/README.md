# Red-Black Tree Data Structure in JavaScript

Welcome to the Red-Black Tree section of this repository. A Red-Black Tree is a kind of self-balancing binary search tree where each node contains an extra bit for denoting the color of the node, either red or black. This attribute helps in ensuring the tree remains approximately balanced during insertions and deletions.

## What's Inside?

This section includes the implementation of Red-Black Tree using JavaScript. It includes operations like insertion, deletion, and searching, all while maintaining the balance of the tree.

## Why Red-Black Trees?

Red-Black Trees are used because they provide an efficient solution for maintaining the balanced tree property. The balancing of the tree is not perfect but it guarantees searching in O(log n) time. 

## Properties

A Red-Black Tree follows the following important properties:

1. Every node is either red or black.
2. The root node is always black.
3. All leaves (NULL or NIL) are black.
4. If a node is red, then both its children are black.
5. Every path from a node (including root) to any of its descendant NULL node has the same number of black nodes.

## Rotations

Just like AVL Trees, rotations are used in Red-Black Trees to maintain the tree properties. The rotations are:

- Left Rotation
- Right Rotation

## Usage

Red-Black Trees are used in most of the self-balancing BST, including in libraries like map, multimap, multiset in C++. They are used in the Linux kernel and the Java Collections Framework.
