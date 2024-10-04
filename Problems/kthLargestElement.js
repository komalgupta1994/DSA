// Problem: Given an array arr[] of size N, the task is to printing K largest elements in an array.

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Helper method to swap two elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Method to add an element to the heap
    insert(value) {
        this.heap.push(value);
        this.bubbleUp(this.heap.length - 1);
    }

    // Bubble up the element to maintain max-heap property
    bubbleUp(index) {
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] <= this.heap[parentIndex]) break;
            this.swap(index, parentIndex);
            index = parentIndex;
        }
    }

    // Method to remove and return the maximum element (root) from the heap
    extractMax() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown(0);
        return max;
    }

    // Bubble down the element to maintain max-heap property
    bubbleDown(index) {
        let largest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;

        if (leftChild < this.heap.length && this.heap[leftChild] > this.heap[largest]) {
            largest = leftChild;
        }

        if (rightChild < this.heap.length && this.heap[rightChild] > this.heap[largest]) {
            largest = rightChild;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.bubbleDown(largest);
        }
    }
}

// Function to find the Kth largest element using Max Heap
function findKthLargest(arr, k) {
    const maxHeap = new MaxHeap();
    for (let num of arr) {
        maxHeap.insert(num);
    }
    console.log('maxHeap', maxHeap);
    let kthLargest;
    for (let i = 0; i < k; i++) {
        kthLargest = maxHeap.extractMax();
    }

    return kthLargest;
}

// Example usage:
const arr = [89,76,120,54,90,36,100];
const k = 5;
console.log(`The ${k}th largest element is ${findKthLargest(arr, k)}`); // Output: 5
