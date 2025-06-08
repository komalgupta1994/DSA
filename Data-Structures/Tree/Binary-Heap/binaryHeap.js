class BinaryHeap {
    constructor() {
        this.values = [];
    }

    // Adding new element
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
        return this.values;
    }

    bubbleUp() {
        let index = this.values.length - 1;

        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2);
            if (this.values[index] <= this.values[parentIndex]) {
                break;
            }

            const temp = this.values[index];
            this.values[index] = this.values[parentIndex];
            this.values[parentIndex] = temp;

            index = parentIndex;
        }
    }

    // Extract Max
    extractMax() {
        const max = this.values[0];
        const end = this.values.pop();
        if (this.values.length) {
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown() {
        let index = 0;
        const length = this.values.length;
        const element = this.values[0];

        while(true) {
            let leftChildIndex = (2 * index) + 1;
            let rightChildIndex = (2 * index) + 2;

            let leftChild, rightChild, swap = null;

            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
                if (leftChild > element) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
                if ((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;

            this.values[index] = this.values[swap];
            this.values[swap] = element;
            index = swap;
        }
    }
}