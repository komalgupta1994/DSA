# Binary Search Tree (BST) in JavaScript

Welcome to the Binary Search Tree section of this repository. A Binary Search Tree is a hierarchical data structure that maintains elements in a sorted order, enabling efficient searching, insertion, and deletion operations.

## What's Inside?

This section contains the JavaScript implementation of a Binary Search Tree, including key operations like insertion, search, traversal (in-order, pre-order, post-order). Examples demonstrate how data is managed and traversed within the tree.

## Why Binary Search Tree?

Binary Search Trees offer a structured and efficient way to manage sorted data. They reduce the time complexity of search-related operations to O(log n) on average (if balanced). BSTs are ideal for applications that involve dynamic datasets where fast lookup, insertion, and deletion are essential, such as maintaining sorted lists, implementing dictionaries, or building expression parsers.

## How It Works?

Each node in a BST has at most two children: a left child with a value less than the node, and a right child with a value greater than the node. This recursive structure enables binary search logic to be applied at each level, significantly reducing the number of comparisons. However, if not balanced, a BST can degrade to a linear structure, resulting in O(n) performance.

## Tree Traversal
    
Example

```    8
      / \
     3   10
    / \    \
   1   6    14 ```

For tree traversing, we used 2 approaches:  
1. Breadth First Search(BFS)
2. Depth First Search(DFS)

### Breadth First Search

In this, we want to visit every node on the same level, every sibling node before we look at a child node. Here we are working **Horizontally**. We use **Queue** data structure in BFS.
```    8
      / \
     3   10
    / \    \
   1   6    14 ```

**Output** = `[8, 3, 10, 1, 6, 14]`

### Depth First Search

In this, it visits or traverse nodes **Vertically** down to the end of the tree. We use **Stack** data structure for traversing here. There are 3 ways to traverse tree vertically.
1. DFS PreOrder
2. DFS PostOrder
3. DFS InOrder

```    8
      / \
     3   10
    / \    \
   1   6    14 ```


#### DFS PreOrder => Traversing flow: <root> <left> <right>

In this we will visit the root node first. Then we look at the *entire Left side* and then we traverse *entire right side*.

**output** = `[8, 3, 1, 6, 10, 24]`

#### DFS PostOrder => Traversing flow: <left> <right> <root>

In this we will visit the root after, first we have looked at *the left* and *the right*. 

**output** = `[1, 6, 3, 14, 10, 8]`

#### DFS InOrder => Traversing flow: <left> <root> <right>

In this we will traverse the *entire left side* first then *root node* and then traverse the *entire right side*. Somehow In-order creates data in sorted order.

**output** = `[1, 3, 6, 8, 10, 14]`

## Usage

Binary Search Trees are used in many real-world systems such as database indexing, in-memory sorting, auto-complete suggestions, range queries, and even in building efficient compilers. Their ability to maintain a sorted structure makes them powerful for search-driven tasks.