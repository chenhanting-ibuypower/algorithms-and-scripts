/**
 * hammingEncode - encode binary string input with hamming algorithm
 * @param {String} input - binary string, '10101'
 * @returns {String} - encoded binary string
 */
function hammingEncode(input) {
  if (typeof input !== "string" || input.match(/[^10]/)) {
    return console.error(
      'hamming-code error: input should be binary string, for example "101010"'
    );
  }

  var output = input;
  var controlBitsIndexes = [];
  var controlBits = [];
  var l = input.length;
  var i = 1;
  var key, j, arr, temp, check;

  while (l / i >= 1) {
    controlBitsIndexes.push(i);
    i *= 2;
  }

  for (j = 0; j < controlBitsIndexes.length; j++) {
    key = controlBitsIndexes[j];
    arr = output.slice(key - 1).split("");
    temp = chunk(arr, key);
    check =
      temp
        .reduce(function (prev, next, index) {
          if (!(index % 2)) {
            prev = prev.concat(next);
          }
          return prev;
        }, [])
        .reduce(function (prev, next) {
          return +prev + +next;
        }, 0) % 2
        ? 1
        : 0;
    output = output.slice(0, key - 1) + check + output.slice(key - 1);
    if (j + 1 === controlBitsIndexes.length && output.length / (key * 2) >= 1) {
      controlBitsIndexes.push(key * 2);
    }
  }

  return output;
}

/**
 * hammingPureDecode - just removes from input parity check bits
 * @param {String} input - binary string, '10101'
 * @returns {String} - decoded binary string
 */
function hammingPureDecode(input) {
  if (typeof input !== "string" || input.match(/[^10]/)) {
    return console.error(
      'hamming-code error: input should be binary string, for example "101010"'
    );
  }

  var controlBitsIndexes = [];
  var l = input.length;
  var originCode = input;
  var hasError = false;
  var inputFixed, i;

  i = 1;
  while (l / i >= 1) {
    controlBitsIndexes.push(i);
    i *= 2;
  }

  controlBitsIndexes.forEach(function (key, index) {
    originCode =
      originCode.substring(0, key - 1 - index) +
      originCode.substring(key - index);
  });

  return originCode;
}

/**
 * hammingDecode - decodes encoded binary string, also try to correct errors
 * @param {String} input - binary string, '10101'
 * @returns {String} - decoded binary string
 */
function hammingDecode(input) {
  if (typeof input !== "string" || input.match(/[^10]/)) {
    return console.error(
      'hamming-code error: input should be binary string, for example "101010"'
    );
  }

  var controlBitsIndexes = [];
  var sum = 0;
  var l = input.length;
  var i = 1;
  var output = hammingPureDecode(input);
  var inputFixed = hammingEncode(output);

  while (l / i >= 1) {
    controlBitsIndexes.push(i);
    i *= 2;
  }

  controlBitsIndexes.forEach(function (i) {
    if (input[i] !== inputFixed[i]) {
      sum += i;
    }
  });

  if (sum) {
    output[sum - 1] === "1"
      ? (output = replaceCharacterAt(output, sum - 1, "0"))
      : (output = replaceCharacterAt(output, sum - 1, "1"));
  }
  return output;
}

/**
 * hammingCheck - check if encoded binary string has errors, returns true if contains error
 * @param {String} input - binary string, '10101'
 * @returns {Boolean} - hasError
 */
function hammingCheck(input) {
  if (typeof input !== "string" || input.match(/[^10]/)) {
    return console.error(
      'hamming-code error: input should be binary string, for example "101010"'
    );
  }

  var inputFixed = hammingEncode(hammingPureDecode(input));

  return (hasError = !(inputFixed === input));
}

/**
 * replaceCharacterAt - replace character at index
 * @param {String} str - string
 * @param {Number} index - index
 * @param {String} character - character
 * @returns {String} - string
 */
function replaceCharacterAt(str, index, character) {
  return (
    str.substr(0, index) + character + str.substr(index + character.length)
  );
}

/**
 * chunk - split array into chunks
 * @param {Array} arr - array
 * @param {Number} size - chunk size
 * @returns {Array} - chunked array
 */
function chunk(arr, size) {
  var chunks = [],
    i = 0,
    n = arr.length;
  while (i < n) {
    chunks.push(arr.slice(i, (i += size)));
  }
  return chunks;
}

console.log("Encode 1111: ", hammingEncode("1111"));
console.log("Encode 1111: ", hammingEncode("10101111"));
console.log("Decode 0011111: ", hammingDecode(hammingEncode("1111")));
console.log("Check 0011111: ", hammingCheck(hammingEncode("1111")));
console.log("Check 0001111: ", hammingCheck("0001111"));
console.log("Decode 0001111: ", hammingDecode("0001111"));
console.log(
  "Pure Decode (without correcting) 0001111: ",
  hammingPureDecode("0001111")
);
