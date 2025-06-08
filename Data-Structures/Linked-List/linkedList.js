class Node {
    constructor(value, next=null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value,
            next: null
        };

        this.tail = this.head;
        this.length = 0;
    }

    // Insert value at beginning
    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // Insert value at the end
    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }

    // Insert anywhere in the list
    insert(index, value) {
        if (index === 0) {
            this.prepend(value);
        }
        if (index >= this.length) {
            this.append(value);
        }
        
        let leaderNode = this.traverseList(index-1);
        let newNode = new Node(value);

        newNode.next = leaderNode.next;
        leaderNode.next = newNode;
        this.length++;
    }

    traverseList(index) {
        let currentNode = this.head;
        let count = 0;

        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }

    // Remove data from list
    remove(index) {
        let leaderNode = this.traverseList(index - 1);
        leaderNode.next = leaderNode.next.next;
        this.length--;
    }
}