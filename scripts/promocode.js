const omnisnedPromo = "UG//NB0yO9bUVml4FQ"
const bigcommercePromo = "U2FsdGVkX1/Bs4A/cjN0NU0QPBkSxJ0KydEyxlYrOl8oQ9I3DSb14dIUdL+sVt5Dym1uCyli3R34DLhPFElpQQ=="

function checkPromoSequence(longString, expectedSequence) {
  let extractedSequence = '';

  for (let i = 0; i < longString.length; i += 5) {
    extractedSequence += longString.charAt(i);
  }

  return extractedSequence === expectedSequence;
}

const checkResult = checkPromoSequence(bigcommercePromo, omnisnedPromo)
console.log(checkResult)