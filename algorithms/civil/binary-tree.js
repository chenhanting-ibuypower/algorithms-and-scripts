class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

// Create a new binary tree
const tree = new BinaryTree();

// Insert the provided values into the tree
[40, 50, 20, 70, 10, 55, 25, 80, 3, 65, 15, 45].forEach(value => tree.insert(value));

console.log("👋 Initial tree value:", tree.root);  // This will print the tree structure
tree.insert(100);
tree.insert(60);
console.log("🌹 Modified tree value:", tree.root);
console.log(tree.find(29)); // true
console.log(tree.find(80)); // true