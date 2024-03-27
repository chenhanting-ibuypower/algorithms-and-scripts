function binaryDivision(dividend, divisor) {
  // Convert the dividend and divisor（被除數 & 除數） to arrays of integers
  let remainder = [...dividend];
  const divisorLen = divisor.length;

  for (let i = 0; i < dividend.length - divisorLen + 1; i++) {
    if (remainder[i] === "1") {
      for (let j = 0; j < divisorLen; j++) {
        remainder[i + j] = remainder[i + j] === divisor[j] ? "0" : "1";
      }
    }
  }

  /**
   * The .slice() method in JavaScript returns a portion of an array based on the starting and ending
   * indices specified as arguments. If the starting index is negative, it is treated as an offset
   * from the end of the array. For example, -1 refers to the last element of the array, -2 refers
   * to the second-to-last element, and so on.
   *
   * [1,2,3,4].slice(-1) returns [4], which is the last element of the array.
   * [1,2,3,4].slice(-2) returns [3, 4], which is the last two elements of the array.
   * [1,2,3,4].slice(-3) returns [2, 3, 4], which is the last three elements of the array.
   * [1,2,3,4].slice(-4) returns [1, 2, 3, 4], which is the entire array.
   */
  return remainder.slice(-divisorLen + 1).join("");
}

function crc(data, generator) {
  // Append zeros to the data to match the length of the generator
  const modifiedData = data + "0".repeat(generator.length - 1);

  // Perform binary division and return the CRC code
  return binaryDivision(modifiedData, generator);
}

const data = "11001011";
const generator = "11011"; // represents the polynomial g(x) = x^5 + x + 1

const dataGeneratorSet = [
  // https://www.gatevidyalay.com/cyclic-redundancy-check-crc-error-detection/
  ["11001011", "10011"],
  ["10011101", "1001"],
  // from other examples
  ["11001011", "11011"],
  ["1101011111", "100011"],
];

dataGeneratorSet.forEach(([data, generator]) => {
  // Calculate the CRC code
  const crcCode = crc(data, generator);

  // Append the CRC code to the original data
  const transmittedData = data + crcCode;
  const result = { data, crcCode, transmittedData };
  console.log(JSON.stringify(result, null, 2));
});
