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

  inorderTraversal(node, result = []) {
    if (node !== null) {
      // Traverse the left subtree
      this.inorderTraversal(node.left, result);
      // Visit the current node
      result.push(node.value);
      // Traverse the right subtree
      this.inorderTraversal(node.right, result);
    }
    return result;
  }

  preorderTraversal(node, result = []) {
    if (node !== null) {
      // Visit the current node
      result.push(node.value);
      // Traverse the left subtree
      this.preorderTraversal(node.left, result);
      // Traverse the right subtree
      this.preorderTraversal(node.right, result);
    }
    return result;
  }

  postorderTraversal(node, result = []) {
    if (node !== null) {
      // Traverse the left subtree
      this.postorderTraversal(node.left, result);
      // Traverse the right subtree
      this.postorderTraversal(node.right, result);
      // Visit the current node
      result.push(node.value);
    }
    return result;
  }

  toJSON(node = this.root) {
    if (node === null) return null;

    let obj = { value: node.value };

    if (node.left !== null) {
      obj.left = this.toJSON(node.left);
    }

    if (node.right !== null) {
      obj.right = this.toJSON(node.right);
    }

    return obj;
  }
}


/**
 * Example usage:
 *
 *         10
 *       /    \
 *      5      15
 *     / \    /  \
 *    2   7  12   20
 *   /   /  /  \
 *  1   6  11   14
 */
const tree = new BinaryTree();
tree.root = new TreeNode(10);
tree.root.left = new TreeNode(5);
tree.root.right = new TreeNode(15);
tree.root.left.left = new TreeNode(2);
tree.root.left.right = new TreeNode(7);
tree.root.right.left = new TreeNode(12);
tree.root.right.right = new TreeNode(20);
tree.root.left.left.left = new TreeNode(1);
tree.root.left.right.left = new TreeNode(6);
tree.root.right.left.left = new TreeNode(11);
tree.root.right.left.right = new TreeNode(14);

console.log("🌳Inorder traversal:", tree.inorderTraversal(tree.root)); // [1, 2, 5, 6, 7, 10, 11, 12, 14, 15, 20]
console.log("🌳Preorder traversal:", tree.preorderTraversal(tree.root)); // [10, 5, 2, 1, 7, 6, 15, 12, 11, 14, 20]
console.log("🌳Postorder traversal:", tree.postorderTraversal(tree.root));

console.log(JSON.stringify(tree.toJSON(), null, 2));

function* inorderTraversal(node) {
  if (node) {
    // Traverse the left subtree
    yield* inorderTraversal(node.left);
    // Visit the current node
    yield node.value;
    // Traverse the right subtree
    yield* inorderTraversal(node.right);
  }
}

for (let value of inorderTraversal(tree.toJSON())) {
  console.log(value);  // Outputs: A, B, C, D, E, F, G, H, I
}

function* preorderTraversal(node) {
  if (node) {
    // Visit the current node
    yield node.value;
    // Traverse the left subtree
    yield* preorderTraversal(node.left);
    // Traverse the right subtree
    yield* preorderTraversal(node.right);
  }
}

for (let value of preorderTraversal(tree.toJSON())) {
  console.log(value);  // Outputs: A, B, C, D, E, F, G, H, I
}

function* postorderTraversal(node) {
  if (node) {
    // Traverse the left subtree
    yield* postorderTraversal(node.left);
    // Traverse the right subtree
    yield* postorderTraversal(node.right);
    // Visit the current node
    yield node.value;
  }
}

for (let value of postorderTraversal(tree.toJSON())) {
  console.log(value);  // Outputs: A, B, C, D, E, F, G, H, I
}