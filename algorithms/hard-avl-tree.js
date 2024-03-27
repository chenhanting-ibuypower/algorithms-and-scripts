class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.height = 1; // By default, a new node has height 1.
  }
}

class HardAvlTree {
  constructor() {
    this.root = null;
  }

  getHeight(node) {
    if (!node) return 0;
    return node.height;
  }

  updateHeight(node) {
    node.height =
      Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
  }

  getBalance(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  rightRotate(y) {
    let x = y.left;
    let T3 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T3;

    // Update heights
    this.updateHeight(y);
    this.updateHeight(x);

    return x; // new root
  }

  leftRotate(x) {
    let y = x.right;
    let T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    this.updateHeight(x);
    this.updateHeight(y);

    return y; // new root
  }

  // Recursive insertion
  insertNode(node, data) {
    if (!node) return new Node(data);

    // Normal BST insertion
    if (data < node.data) {
      node.left = this.insertNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.insertNode(node.right, data);
    } else {
      return node; // Duplicates not allowed
    }

    // Update height of the current node
    this.updateHeight(node);

    // Get the balance factor to check if it's unbalanced
    let balance = this.getBalance(node);

    // Four cases for rotations:

    // Left Left Case
    if (balance > 1 && data < node.left.data) {
      return this.rightRotate(node);
    }

    // Right Right Case
    if (balance < -1 && data > node.right.data) {
      return this.leftRotate(node);
    }

    // Left Right Case
    if (balance > 1 && data > node.left.data) {
      node.left = this.leftRotate(node.left);
      return this.rightRotate(node);
    }

    // Right Left Case
    if (balance < -1 && data < node.right.data) {
      node.right = this.rightRotate(node.right);
      return this.leftRotate(node);
    }

    return node;
  }

  insert(data) {
    this.root = this.insertNode(this.root, data);
  }
}

const avl = new HardAvlTree();
avl.insert(10);
avl.insert(20);
avl.insert(5);
avl.insert(15);
