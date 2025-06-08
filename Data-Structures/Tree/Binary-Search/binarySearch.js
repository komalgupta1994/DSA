class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;

            while(true) {
                // Insert in left node
                if (currentNode.value > value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else {
                    if (currentNode.value < value) {
                        if (!currentNode.right) {
                            currentNode.right = newNode;
                            return this;
                        }
                        currentNode = currentNode.right;
                    }
                }
            }
        }
    }

    lookup(value) {
        if (!this.root) return false;

        let currentNode = this.root;
        while(currentNode) {
            if (currentNode.value === value) {
                return true;
            } else if (currentNode.value > value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }
        return false;
    }

    // Breadth First Search Tree
    BFS() {
        let node = this.root, output = [], queue = [];
        queue.push(node);

        while (queue.length) {
            node = queue.shift();
            output.push(node.value);

            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }

        return output;
    }

    // PreOrder DFS <root> <left> <right>
    preOrderDFS() {
        let data = [];
        this.preOrderTraversal(this.root, data);
        return data;
    }

    preOrderTraversal(node, data) {
        // Root
        data.push(node.value);
        // Left
        if (node.left) {
            this.preOrderTraversal(node.left, data);
        }
        // Right
        if (node.right) {
            this.preOrderTraversal(node.right, data);
        }
    }

    // PostOrder DFS <left> <right> <root>
    postOrderDFS() {
        let data = [];
        this.postOrderTraversal(this.root, data);
        return data;
    }

    postOrderTraversal(node, data) {
        // Left
        if (node.left) {
            this.postOrderTraversal(node.left, data);
        }
        // Right
        if (node.right) {
            this.postOrderTraversal(node.right, data);
        }
        // Node
        data.push(node.value);
    }

    // InOrder DFS <left> <root> <right>
    inOrderDFS() {
        // Another way
        return this.inOrderTraversal(this.root, []);
    }

    inOrderTraversal(node, data) {
        if (node.left) {
            this.inOrderTraversal(node.left, data);
        }
        data.push(node.value);
        if (node.right) {
            this.inOrderTraversal(node.right, data);
        }

        return data;
    }
}

const myBST = new BinarySearchTree();
myBST.insert(3);
myBST.insert(8);
myBST.insert(10);
myBST.insert(1);
myBST.insert(6);
myBST.insert(14);
myBST.lookup(15); // false

myBST.BFS(); // [8, 3, 10, 1, 6, 14]
myBST.preOrderDFS() // [8, 3, 1, 6, 10, 24]
myBST.postOrderDFS() // [1, 6, 3, 14, 10, 8]
myBST.inOrderDFS() // [1, 3, 6, 8, 10, 14]