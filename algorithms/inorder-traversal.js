class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function inOrderTraversal(node) {
  if (!node) return;

  inOrderTraversal(node.left);
  console.log("now we are visiting 👉", node.value);
  inOrderTraversal(node.right);
}

function preOrderTraversal(node) {
  if (!node) return;

  console.log("now we are visiting 👉", node.value);
  preOrderTraversal(node.left);
  preOrderTraversal(node.right);
}

function postOrderTraversal(node) {
  if (!node) return;

  postOrderTraversal(node.left);
  postOrderTraversal(node.right);
  console.log("now we are visiting 👉", node.value);
}

// Example tree:
//       4
//      / \
//     2   5
//    / \
//   1   3

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(5);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);

/**
 * now we are visiting 👉 1
 *  at quokka.js:13:2
 *
 * now we are visiting 👉 2
 *  at quokka.js:13:2
 *
 * now we are visiting 👉 3
 *  at quokka.js:13:2
 *
 * now we are visiting 👉 4
 *  at quokka.js:13:2
 *
 * now we are visiting 👉 5
 *  at quokka.js:13:2
 */
inOrderTraversal(root);  // Expected output: 1, 2, 3, 4, 5
console.log("=".repeat(80))
postOrderTraversal(root);
console.log("=".repeat(80))
preOrderTraversal(root); 