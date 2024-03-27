const jwt = require('jsonwebtoken');
const base64url = require('base64url');
// Encode
function encodeContent(info, secretKey) {
  return jwt.sign(info, secretKey);
}

// Decode
function decodeContent(token, secretKey) {
  try {
    return jwt.verify(token, secretKey);
  } catch(err) {
    console.log(err);
    return null;
  }
}

// secret key we can put on Vercel or any other servers
const secretKey = 'this-is-my-secret-key';

const token = encodeContent({ email: "han-chen@ibuypower.com", id: 1, name: "Han" }, secretKey);
console.log('Encoded info:', token);
const [, middle, ] = token.split(".")

console.log("middle part:", middle)
const decoded_middle_part = JSON.parse(base64url.decode(middle))
console.log("decoded middle part:", decoded_middle_part)

const decodedPromoCode = decodeContent(token, secretKey);
console.log('Decoded info:', decodedPromoCode);

function encodeRLE(input) {
  let encoded = '';
  let count = 1;

  for (let i = 1; i <= input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      encoded += input[i - 1] + count;
      count = 1;
    }
  }
  return encoded;
}

function decodeRLE(encoded) {
  let decoded = '';
  for (let i = 0; i < encoded.length; i += 2) {
    let char = encoded[i];
    let count = Number(encoded[i + 1]);
    decoded += char.repeat(count);
  }
  return decoded;
}

let encoded = encodeRLE(token);
let decoded = decodeRLE(encoded);

console.log("RLE encoded data:", encoded)
console.log("RLE decoded data:", decoded)

function buildFrequencyTable(str) {
  const frequencyTable = {};
  for (const char of str) {
    frequencyTable[char] = (frequencyTable[char] || 0) + 1;
  }
  return frequencyTable;
}

function buildHuffmanTree(frequencyTable) {
  const queue = Object.entries(frequencyTable).map(([char, freq]) => ({char, freq}));
  queue.sort((a, b) => a.freq - b.freq);

  while (queue.length > 1) {
    const left = queue.shift();
    const right = queue.shift();
    const node = {left, right, freq: left.freq + right.freq};
    queue.push(node);
    queue.sort((a, b) => a.freq - b.freq);
  }

  return queue[0];
}

function buildCodes(tree, prefix = '', codes = {}) {
  if (tree.char) {
    codes[tree.char] = prefix;
  } else {
    buildCodes(tree.left, prefix + '0', codes);
    buildCodes(tree.right, prefix + '1', codes);
  }
  return codes;
}

function huffmanEncode(str, codes) {
  return str.split('').map(char => codes[char]).join('');
}

function huffmanDecode(encoded, tree) {
  let node = tree;
  let decoded = '';

  for (const bit of encoded) {
    node = bit === '0' ? node.left : node.right;
    if (node.char) {
      decoded += node.char;
      node = tree;
    }
  }

  return decoded;
}

const str = "ABRACADABRA";
const frequencyTable = buildFrequencyTable(token);
const huffmanTree = buildHuffmanTree(frequencyTable);
const codes = buildCodes(huffmanTree);
const huffmanEncoded = huffmanEncode(token, codes);
const huffmanDecoded = huffmanDecode(huffmanEncoded, huffmanTree);
console.log("Huffman encoded data:", huffmanEncoded)
console.log("Huffman decoded data:", huffmanDecoded)
