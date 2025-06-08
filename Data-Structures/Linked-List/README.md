# Linked List in JavaScript

Welcome to the Linked List section of this repository. A linked list is a linear data structure where each element (called a node) contains a value and a reference (or pointer) to the next node in the sequence. Unlike arrays, linked lists do not store elements in contiguous memory, making them more flexible in terms of memory allocation.

## What's Inside?

This section includes the implementation of three types of linked lists in JavaScript: Singly Linked List, Doubly Linked List, and Circular Linked List. It demonstrates operations like insertion, deletion, traversal, and searching in each type of list with clear code examples.

## Why Linked List?

Linked lists offer dynamic memory allocation, meaning they grow or shrink at runtime without the need for resizing like arrays. They're ideal when frequent insertions and deletions are required, especially at the beginning or middle of the list. Unlike arrays, linked lists avoid the overhead of shifting elements during these operations.

## How It Works?
Each node in a Singly Linked List holds data and a reference to the next node. In a Doubly Linked List, each node also has a reference to the previous node, allowing two-way traversal. A Circular Linked List connects the last node back to the head, forming a closed loop. These structures allow flexible data handling but may come with additional overhead for traversal or backtracking.

## Example Overview:

Singly Linked List: 1 -> 2 -> 3 -> null

Doubly Linked List: null <- 1 <-> 2 <-> 3 -> null

Circular Linked List: 1 -> 2 -> 3 -> back to 1

## Comparison: Linked List vs Array vs Hash Table

| Feature            | Linked List                    | Array                             | Hash Table               |
| ------------------ | ------------------------------ | --------------------------------- | ------------------------ |
| Access Time        | O(n)                           | O(1) (with index)                 | O(1) on average          |
| Memory Allocation  | Dynamic                        | Static or dynamic (resize needed) | Dynamic                  |
| Insertion/Deletion | Efficient at beginning/middle  | Expensive (may require shifting)  | Efficient (O(1) average) |
| Use Case           | Frequent add/remove operations | Fixed-size data, random access    | Fast lookups by key      |


## Usage

Linked lists are used in many systems like OS memory management, undo functionality in editors, adjacency lists in graphs, and dynamic data structures such as stacks and queues. They’re preferred when predictable and fast insertions or deletions are needed without worrying about contiguous memory.