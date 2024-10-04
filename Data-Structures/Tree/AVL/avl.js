class Node {
    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
        this.height = 1;
    }
}

function height(N) {
    if (N === null) return 0;
    return N.height;
}

function rightRotate(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(height(y.left), height(y.right)) + 1;
    x.height = Math.max(height(x.left), height(x.right)) + 1;

    // Return new root
    return x;
}

function leftRotate(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(height(x.left), height(x.right)) + 1;
    y.height = Math.max(height(y.left), height(y.right)) + 1;

    // Return new root
    return y;
}

function getBalance(N) {
    if (N === null) return 0;
    return height(N.left) - height(N.right);
}

function insert(node, key) {
    // 1. Perform the normal BST insertion
    if (node === null) return new Node(key);

    if (key < node.key) {
        node.left = insert(node.left, key);
    } else if (key > node.key) {
        node.right = insert(node.right, key);
    } else { // Duplicate keys not allowed
        return node;
    }

    // 2. Update height of this ancestor node
    node.height = Math.max(height(node.left), height(node.right)) + 1;

    // 3. Get the balance factor of this node
    // to check whether this node became unbalanced
    const balance = getBalance(node);

    // If this node becomes unbalanced, then there are 4 cases

    // Left Left Case
    if (balance > 1 && key < node.left.key) {
        return rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && key > node.right.key) {
        return leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && key > node.left.key) {
        node.left = leftRotate(node.left);
        return rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && key < node.right.key) {
        node.right = rightRotate(node.right);
        return leftRotate(node);
    }

    return node;
}

function minValueNode(node) {
    let current = node;
    // loop down to find the leftmost leaf
    while (current.left !== null) {
        current = current.left;
    }
    return current;
}

function deleteNode(root, key) {

    // STEP 1: PERFORM STANDARD BST DELETE
    if (root === null) return root;

    // If the key to be deleted is smaller
    // than the root's key, then it lies in
    // left subtree
    if (key < root.key) {
        root.left = deleteNode(root.left, key);
        
    } else if (key > root.key) {
        root.right = deleteNode(root.right, key);
    } else { // if key is same as root's key
    
        // node with only one child or no child
        if (root.left === null || root.right === null) {
            const temp = root.left ? root.left : root.right;

            // No child case
            if (temp === null) {
                root = null;
            } else { // One child case
                root = temp; // Copy the contents of the non-empty child
            }
        } else {
        
            // node with two children: Get the inorder successor
            const temp = minValueNode(root.right);
            
            // Copy the inorder successor's data to this node
            root.key = temp.key;
            
            // Delete the inorder successor
            root.right = deleteNode(root.right, temp.key);
        }
    }

    // If the tree had only one node then return
    if (root === null) return root;

    // STEP 2: UPDATE HEIGHT OF THE CURRENT NODE
    root.height = Math.max(height(root.left), height(root.right)) + 1;

    // STEP 3: GET THE BALANCE FACTOR OF THIS NODE
    const balance = getBalance(root);

    // If this node becomes unbalanced, then there are 4 cases

    // Left Left Case
    if (balance > 1 && getBalance(root.left) >= 0) {
        return rightRotate(root);
    }

    // Left Right Case
    if (balance > 1 && getBalance(root.left) < 0) {
        root.left = leftRotate(root.left);
        return rightRotate(root);
    }

    // Right Right Case
    if (balance < -1 && getBalance(root.right) <= 0) {
        return leftRotate(root);
    }

    // Right Left Case
    if (balance < -1 && getBalance(root.right) > 0) {
        root.right = rightRotate(root.right);
        return leftRotate(root);
    }

    return root;
}

function preOrder(root) {
    if (root !== null) {
        console.log(root.key + " ");
        preOrder(root.left);
        preOrder(root.right);
    }
}

// Driver Code
let root = null;

// Constructing tree given in the above figure
root = insert(root, 9);
root = insert(root, 5);
root = insert(root, 10);
root = insert(root, 12);
root = insert(root, 0);
root = insert(root, 6);
root = insert(root, 11);
root = insert(root, -1);
root = insert(root, 1);
root = insert(root, 2);

// console.log("Preorder traversal of the constructed AVL tree is:");
preOrder(root);

root = deleteNode(root, 10);

// console.log("\nPreorder traversal after deletion of 10:");
preOrder(root);