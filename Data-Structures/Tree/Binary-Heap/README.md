# Heaps

Heap's are another category of trees. Or A heap is a special Tree-based data structure in which the tree is a complete tree.

## Binary Heap

It is very similar to binary search tree, but with some different rules. Binary Heap is a *complete tree* (All levels are completely filled expect possibly the last level). Complete tree means it always fill first level of child node from the left to right. Then it will move to the next level of child. *Each node can have at most two children*.
It always take least amount of space as possible. 

### Two types of Binary Heap

1. **Max Binary Heap**: Parent nodes are always larger than child nodes.

2. **Min Binary Heap**: Parent nodes are always smaller than child nodes.

*Note*: In max binary heap, parent is always greater than child, but it's important to note that *these are not necessarily the second largest numbers in the entire heap*. For exp: here 36 and 25 is the next 2 largest elements, but they are not on the same tier. It's just any number smaller on the left, any number smaller on the right.
In siblings, there are no any implied ordering or no any relationship b/w siblings only except they are sibling.

       100
      /   \
    19     `36`
    / \    / \
   17  3  `25` 14
  / \
 2   7

## How It Works?

A Binary Heap is implemented using an array where:

- The root element is at index 0.
- For any node at index i, its children are at `2i + 1` and `2i + 2`.
- To find out the parent is at index i, `(i - 1)/2` (floored).
- The heap maintains order through operations like "bubble up" (during insert) and "heapify down" (during remove) to ensure the heap property is preserved after changes.

## Usage

Binary Heaps are widely used in:

1. **Priority Queues**: where the element with the highest priority (min or max) is served first.
2. **Dijkstra’s Algorithm**: to efficiently fetch the next closest node.
3. **CPU Scheduling**: tasks with higher priority are executed before others.
4. **Heap Sort**: an efficient in-place sorting algorithm with O(n log n) complexity.
5. **A* Pathfinding**: to retrieve the next node with the lowest estimated cost.

In a priority queue implementation using a Min Heap, tasks are assigned numeric priorities, and the heap efficiently provides the task with the lowest value (i.e., highest priority) when needed.

### Example diagram to add 55 as a new element in existing tree

Initial Heap:                      After Inserting 55:              After Bubble-Up (55 > 33):       Final Heap (55 > 41):
       41                                 41                                 41                                55
     /    \                             /    \                             /    \                            /    \
   39      33                         39      33                         39      55                        39     41
  /  \    /                           /  \    /  \                      /  \    /  \                      /  \    / \
18  27  12                          18  27  12    55                  18  27   12   33                   18  27  12  33

[41, 39, 33, 18, 27, 12]        [41, 39, 33, 18, 27, 12, 55]       [41, 39, 55, 18, 27, 12, 33]        [55, 39, 41, 18, 27, 12, 33]
         →                                  →                                  →
   Insert at last                     Swap with parent 33                 Swap with parent 41          Its parent index is  
  (next available spot)                  (bubble up)                        (bubble up again)          (2 - 1) // 2 = 0 → heap[0] = 41
                                                                    Its parent index is 
                                                                    (6 - 1) // 2 = 2 → heap[2] = 33

