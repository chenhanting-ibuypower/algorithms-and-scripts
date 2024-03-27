const crypto = require('crypto');

function encrypt(text, key) {
  const cipher = crypto.createCipheriv('aes-256-ecb', key, null);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decrypt(text, key) {
  const decipher = crypto.createDecipheriv('aes-256-ecb', key, null);
  let decrypted = decipher.update(text, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

function encryptWithSalt(text, key) {
  const iv = crypto.randomBytes(16);
  console.log("what's iv here:", iv)
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return iv.toString('hex') + ':' + encrypted;
}

function decryptWithSalt(text, key) {
  const parts = text.split(':');
  const iv = Buffer.from(parts.shift(), 'hex');
  const encryptedText = Buffer.from(parts.join(':'), 'hex');
  const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}

const key = crypto.randomBytes(32); // 256-bit key
const text = JSON.stringify({ uniquePromoCode: 'PROMO123-k445566778899k@gmail.com' });

const simpleEncryptedText = encryptWithSalt(text, key);
const simpleDecryptedText = decryptWithSalt(simpleEncryptedText, key);

const encryptedText = encryptWithSalt(text, key);
const decryptedText = decryptWithSalt(encryptedText, key);

console.log('Original:', text);

console.log('Encrypted W/O Salt:', simpleEncryptedText);
console.log('Decrypted W/O Salt:', simpleDecryptedText);

console.log('Encrypted With Salt:', encryptedText);
console.log('Decrypted With Salt:', decryptedText);