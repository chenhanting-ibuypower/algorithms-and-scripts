const crypto = require('crypto');

// Generating a pair of RSA keys
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
});

const publicKeyPem = publicKey.export({ type: 'pkcs1', format: 'pem' });
const privateKeyPem = privateKey.export({ type: 'pkcs1', format: 'pem' });

console.log({ publicKey, privateKey, publicKeyPem, privateKeyPem })

function encrypt(text, publicKey) {
  const buffer = Buffer.from(text, 'utf8');
  const encrypted = crypto.publicEncrypt(publicKey, buffer);
  return encrypted.toString('base64');
}

function decrypt(text, privateKey) {
  const buffer = Buffer.from(text, 'base64');
  const decrypted = crypto.privateDecrypt(privateKey, buffer);
  return decrypted.toString('utf8');
}

const text = JSON.stringify({ uniquePromoCode: 'PROMO123-k445566778899k@gmail.com' });
const encryptedText = encrypt(text, publicKey);
const decryptedText = decrypt(encryptedText, privateKey);

console.log('Original:', text);
console.log('Encrypted:', encryptedText);
console.log('Decrypted:', decryptedText);
