class Node {
  constructor(char, frequency) {
    this.char = char;
    this.frequency = frequency;
    this.left = null;
    this.right = null;
  }
}

function huffmanTree(frequencies) {
  let nodes = [];
  for (let char in frequencies) {
    nodes.push(new Node(char, frequencies[char]));
  }

  console.log("🤖initial nodes:", nodes)

  while (nodes.length > 1) {
    nodes.sort((a, b) => a.frequency - b.frequency);
  
    let leftNode = nodes.shift();
    let rightNode = nodes.shift();

    // 你每次都從 nodes 陣列中取出兩個頻率最小的節點（因為你已經按照頻率對它們進行了排序），
    // 然後創建一個新的節點，這個新節點的頻率是這兩個節點的頻率之和。
    // 然後你將這個新節點添加回 nodes 陣列。
    // 這就是一種貪心的策略，你總是選擇頻率最小的兩個節點來進行操作。
    let newNode = new Node(null, leftNode.frequency + rightNode.frequency);
    newNode.left = leftNode;
    newNode.right = rightNode;

    nodes.push(newNode);
  }

  return nodes[0];
}

function printTree(node, prefix = "") {
  if (node == null) return;
  if (node.char != null) {
    console.log(node.char + ": " + prefix);
  }
  printTree(node.left, prefix + "0");
  printTree(node.right, prefix + "1");
}

let frequencies = {
  A: 45,
  E: 52,
  I: 59,
  O: 38,
  U: 30,
  B: 17,
  L: 41,
  M: 16,
  S: 32
};

let tree = huffmanTree(frequencies);
printTree(tree);
