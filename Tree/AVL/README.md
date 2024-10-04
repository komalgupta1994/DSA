# AVL Tree Data Structure in JavaScript

Welcome to the AVL Tree section of this repository. AVL Tree, named after its inventors `Adelson-Velsky and Landis`, is a self-balancing Binary Search Tree (BST) where the difference between heights of left and right subtrees cannot be more than one for all nodes.

## What's Inside?

This section includes the implementation of AVL Tree using JavaScript. It includes operations like insertion, deletion all while maintaining the balance of the tree.

## Why AVL Trees?

AVL Trees are used when we want to perform a lot of lookups. They are more balanced compared to a regular BST, which means the height of the tree is less, leading to faster lookups. 

## Balancing Factor

The key to an AVL tree is the balancing factor. For every node, we calculate the balancing factor which is the difference between the height of the left subtree and the height of the right subtree. If this factor is more than 1 or less than -1, we perform rotations to balance the tree.

## Rotations

There are four types of rotations that can be performed to balance an AVL tree:

- Left-Left Rotation
- Right-Right Rotation
- Left-Right Rotation
- Right-Left Rotation

These rotations are used to maintain the AVL tree property of having a balance factor between -1 and 1.

## Usage

AVL Trees are used in systems where fast lookup times are critical, such as in database and file system indexing.
