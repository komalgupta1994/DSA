class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftItem(index);
        return item;
    }

    shiftItem(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length -1];
        this.length--;
    }
}

const myArray = new MyArray();
myArray.push(2); // {0: 2}
myArray.push(8); // {0: 2, 1: 8}
myArray.get(1); // 8
myArray.push('hey') // {0: 2, 1: 8, 2: 'hey'}
myArray.deleteAtIndex(1) // 8