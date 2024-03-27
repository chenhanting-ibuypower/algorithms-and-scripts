console.log(Buffer.from('I love apple'))
// <Buffer

const arr = [72, 101, 108, 108, 111];
const buffer = Buffer.from(arr);
console.log(buffer)

Buffer.from('promocode123-example@gmail.com').toString('hex')
// '68656c6c6f20776f726c64'
Buffer.from('promocode123-example@gmail.com').toString('base64')
// 'aGVsbG8gd29ybGQ='
console.log(Buffer.from('222222').toString('base64'))
Buffer.from('aGVsbG8gd29ybGQ=', 'base64').toString()
// 'promocode123-example@gmail.com'

Buffer.from('68656c6c6f20776f726c64', 'hex').toString()
// 'promocode123-example@gmail.com'

// [...Buffer.from('promocode123-example@gmail.com')]

const CryptoJS = require('crypto-js')

const b = CryptoJS.enc.Utf8.parse('promocode123-example@gmail.com')
console.log(b)
// { words: [ 1751477356, 1864398703, 1919706112 ], sigBytes: 11 }

const promocodeEmail = 'promocode123#tom.lee@ibuypower.com';

// Encoding and Decoding
const encodedEmail = CryptoJS.enc.Utf8.parse(promocodeEmail).toString();
console.log("Encoded Email:", encodedEmail);

const decodedEmail = CryptoJS.enc.Hex.parse(encodedEmail).toString(CryptoJS.enc.Utf8);
console.log("Decoded Email:", decodedEmail);

// Base64 Encoding and Decoding
const base64EncodedEmail = CryptoJS.enc.Utf8.parse(promocodeEmail).toString(CryptoJS.enc.Base64);
console.log("Base64 Encoded Email:", base64EncodedEmail);

const base64DecodedEmail = CryptoJS.enc.Base64.parse(base64EncodedEmail).toString(CryptoJS.enc.Utf8);
console.log("Base64 Decoded Email:", base64DecodedEmail);

// Generating Random WordArray
const randomWordArray = CryptoJS.lib.WordArray.random(8);
console.log("Random WordArray:", randomWordArray);

const bigString = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVQcm9tb0NvZGUiOiI1TTlQUjVRVi1oZWxsb0BnbWFpbC5jb20iLCJpYXQiOjE2ODY5NjkzNzB9.yfmMSkQY8VtAp9_IcpJaJylFSxSc9eg0pQ3FJUZrdXY";

const encodedString = btoa(bigString);
console.log("Encoded string:", encodedString);

const zlib = require('zlib');

// Compress the string
const compressedData = zlib.deflateSync(bigString);

// Decompress the compressed data
const decompressedData = zlib.inflateSync(compressedData).toString();

console.log("Original string:", bigString);
console.log("Compressed data:", compressedData.toString('base64'));
console.log("Decompressed string:", decompressedData);

const LZString = require('lz-string')
const compressed = LZString.compress(bigString);
console.log("Size of compressed sample is: ", compressed);
console.log("decoded string:", LZString.decompress(compressed));

console.log("----------------------------------------------------------------")

// Function to encrypt a message using a secret key
function encryptMessage(message, secretKey) {
  return CryptoJS.AES.encrypt(message, secretKey).toString();
}

// Function to decrypt an encrypted message using the secret key
function decryptMessage(encryptedMessage, secretKey) {
  const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
  return decryptedBytes.toString(CryptoJS.enc.Utf8);
}

// Example usage
const secretKey = "HYTE12345";
const message = "promo123#10";

// Encrypt the message
const encryptedMessage = encryptMessage(message, secretKey);
console.log("Encrypted message:", encryptedMessage);

// Decrypt the message
const decryptedMessage = decryptMessage(encryptedMessage, secretKey);
console.log("Decrypted message:", decryptedMessage);

// The data you want to hash
let data = 'promo123#han-chen@ibuypower.commmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm';

// Use the SHA1 function from the crypto-js module to hash your data
let hashedData = CryptoJS.SHA1(data);

// Output the hashed data
console.log(hashedData.toString(CryptoJS.enc.Hex));

const crypto = require('crypto');

function storePassword(userPassword) {
  // Hash the password and store it
  return CryptoJS.SHA256(userPassword).toString();
}

function checkPassword(inputPassword, storedHashedPassword) {
  // Hash the password entered by the user
  let hashedInputPassword = CryptoJS.SHA256(inputPassword).toString();

  // Compare the hashed input with the stored hash
  if (hashedInputPassword === storedHashedPassword) {
    return 'Password is correct.'
  } else {
    return 'Password is incorrect.'
  }
}

// Example usage:
let storedHashedPassword = storePassword('myPassword');

const qq = checkPassword('myPassword', storedHashedPassword);  // Outputs: Password is correct.
const ww = checkPassword('wrongPassword', storedHashedPassword);  // Outputs: Password is incorrect.
console.log({ qq, ww })

// Create an MD5 hash of the data
let hash = crypto.createHash('md5').update(data).digest('hex');
console.log(hash);