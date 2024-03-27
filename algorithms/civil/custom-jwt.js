const crypto = require('crypto');
const base64url = require('base64url');

// Create a JWT with a custom header
function createCustomJwt(header, payload, secret) {
  // Encode the header and payload
  const encodedHeader = base64url(JSON.stringify(header));
  const encodedPayload = base64url(JSON.stringify(payload));

  // Create the signature
  const signature = crypto
    .createHmac('sha256', secret)
    .update(encodedHeader + '.' + encodedPayload)
    .digest();

  // Combine all parts
  return encodedHeader + '.' + encodedPayload + '.' + base64url.fromBase64(signature.toString('base64'));
}

// Define the custom header
const customHeader = {
  "a": "HS256",
  "t": "JWT"
};

// Usage
const secret = 'mySecretKey';
const payload = { uniquePromoCode: 'PROMO123-k445566778899k@gmail.com' };

const token = createCustomJwt(customHeader, payload, secret);
console.log(token);

// Decode a JWT with a custom header
function decodeCustomJwt(token, secret) {
  // Split the token into parts
  const [encodedHeader, encodedPayload, encodedSignature] = token.split('.');

  // Verify the signature
  const signature = base64url.toBase64(encodedSignature);
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(encodedHeader + '.' + encodedPayload)
    .digest()
    .toString('base64');

  if (signature !== expectedSignature) {
    throw new Error('Invalid signature');
  }

  // Decode the payload
  return JSON.parse(base64url.decode(encodedPayload));
}


try {
  const payload = decodeCustomJwt(token, secret);
  console.log(payload);
} catch (err) {
  console.error('Failed to decode token:', err.message);
}

/**
 * In a typical JWT (JSON Web Token), the middle part, which is the payload, is simply Base64Url-encoded.
 * Anyone who has access to this part of the token can decode it and read its contents.
 * It doesn't contain any encryption by itself, so it's not secure or hidden from anyone who can see the token.
 *
 * The purpose of the signature in a JWT is to verify the integrity of the token and ensure that it has not been tampered with. When the token is created,
 * a signature is generated using a secret key and the encoded header and payload. When the token is later verified,
 * the signature is recalculated using the same secret key and compared to the existing signature. If they match, the token is considered valid and untampered.
 *
 * The signature does not prevent someone from reading the payload, and in many cases, the payload may contain public information that is not sensitive.
 * If sensitive information needs to be included in the token, it should be encrypted separately from the JWT creation and verification process.
 * @type {string}
 */
const middlePart = "eyJ1bmlxdWVQcm9tb0NvZGUiOiJQUk9NTzEyMy1rNDQ1NTY2Nzc4ODk5a0BnbWFpbC5jb20ifQ"
console.log("middle part:", JSON.parse(base64url.decode(middlePart)))