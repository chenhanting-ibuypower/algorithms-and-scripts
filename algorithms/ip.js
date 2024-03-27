/**
 * Calculates the network(網路位址) and broadcast(廣播位址) address for a given IP address and subnet mask.
 *
 *
 *
 * In the expression networkAddress[i] | (~subnetBinary[i] & 255),
 * the ~subnetBinary[i] & 255 part calculates the inverted subnet mask
 * by performing a bitwise NOT operation on each bit of the subnet mask
 * and then ANDing the result with 255 (which is 11111111 in binary).
 *
 * This ensures that the result is an 8-bit binary number.
 *
 * The ~ operator is a bitwise NOT operator, which performs a logical NOT
 * operation on each bit in a binary number. The result is a binary number
 * where each bit is the opposite of the corresponding bit in the input number
 * (i.e., 0 becomes 1 and 1 becomes 0).
 *
 * The & operator is a bitwise AND operator, which performs a logical AND
 * operation on each pair of corresponding bits in two binary numbers.
 * The result is a binary number where each bit is 1 only if both of the corresponding
 * bits in the input numbers are 1, and 0 otherwise.
 *
 * The | operator is a bitwise OR operator, which performs a logical OR operation on
 * each pair of corresponding bits in two binary numbers.
 * The result is a binary number where each bit is 1 if either of the corresponding
 *
 * bits in the input numbers is 1, and 0 otherwise.
 *
 * 在 JavaScript 中，位元運算 NOT (~) 會將其運算元的位元反轉。
 * 然而，JavaScript 使用 32 位元有符號整數以二補數格式來表示數字。
 * 這意味著當你對 3 應用位元運算 NOT 時，你會得到一個負數，
 * 因為最高有效位元（符號位元）被設定為 1。
 *
 * 對 3（二進位表示為 00000011）進行位元運算 NOT 會得到 11111100。
 * 在二補數中，這個二進位數字表示 -4。
 *
 * 然而，當你使用位元運算 AND (&) 與 255（二進位表示為 11111111）時，
 * 你實際上只保留了反轉數字的最後 8 位元。
 * 這是因為 255 的二進位表示是 8 個 1（11111111），
 * 與 255 進行位元運算 AND 會遮蔽除最後 8 位元以外的所有位元。
 *
 * 所以，(~3 & 255) 的結果是 252，因為你只保留了反轉數字的最後 8 位元，
 * 這在二進位中是 11111100，或者在十進位中是 252。
 *
 * @param {string} ipAddress - The IP address to calculate the network and broadcast address for.
 * @param {string} subnetMask - The subnet mask to use for the calculation.
 * @returns {{networkAddress: string, broadcastAddress: string}} An object containing the network and broadcast address as strings.
 *
 */
function calculateNetworkAndBroadcastAddress(ipAddress, subnetMask) {
  // Convert IP address and subnet mask to binary strings and calculate network and broadcast address
  const ipBinary = ipAddress.split(".").map(Number);
  const subnetBinary = subnetMask.split(".").map(Number);

  const networkAddress = [];
  const broadcastAddress = [];

  for (let i = 0; i < 4; i++) {
    networkAddress[i] = ipBinary[i] & subnetBinary[i];

    console.log({
      subnetBinary: subnetBinary[i],
      invertedSubnetBinary: ~subnetBinary[i],
      invertedSubnetBinaryAnd255: ~subnetBinary[i] & 255,
    });

    broadcastAddress[i] = networkAddress[i] | (~subnetBinary[i] & 255);
  }

  return {
    networkAddress: networkAddress.join("."),
    broadcastAddress: broadcastAddress.join("."),
  };
}

function isPrivateIP(ip) {
  const [firstOctet, secondOctet] = ip.split(".").map(Number);

  // Check 10.x.x.x
  if ((firstOctet & 255) === 10) return true;

  // Check 172.16.x.x - 172.31.x.x
  if ((firstOctet & 255) === 172 && (secondOctet & 240) === 16) return true;

  // Check 192.168.x.x
  if ((firstOctet & 255) === 192 && (secondOctet & 255) === 168) return true;

  // The IP is not a private IP
  return false;
}

// Example usage
const { networkAddress, broadcastAddress } =
  calculateNetworkAndBroadcastAddress("201.47.34.56", "255.255.240.0");
console.log(`Network address: ${networkAddress}`); // Network address: 201.47.32.0
console.log(`Broadcast address: ${broadcastAddress}`); // Broadcast address: 201.47.47.255

// Example usage
const { networkAddress: a, broadcastAddress: b } =
  calculateNetworkAndBroadcastAddress("10.118.18.129", "255.255.255.192");
console.log(`Network address: ${a}`); // Network address: 201.47.32.0
console.log(`Broadcast address: ${b}`); // Broadcast address: 201.47.47.255

function testCalculateNetworkAndBroadcastAddress() {
  const result1 = calculateNetworkAndBroadcastAddress(
    "201.47.34.56",
    "255.255.240.0"
  );
  if (
    result1.networkAddress === "201.47.32.0" &&
    result1.broadcastAddress === "201.47.47.255"
  ) {
    console.log("Test 1 passed");
  } else {
    console.log("Test 1 failed");
  }

  const result2 = calculateNetworkAndBroadcastAddress(
    "192.168.1.1",
    "255.255.255.255"
  );
  if (
    result2.networkAddress === "192.168.1.1" &&
    result2.broadcastAddress === "192.168.1.1"
  ) {
    console.log("Test 2 passed");
  } else {
    console.log("Test 2 failed");
  }

  const result3 = calculateNetworkAndBroadcastAddress("10.0.0.1", "0.0.0.0");
  if (
    result3.networkAddress === "0.0.0.0" &&
    result3.broadcastAddress === "255.255.255.255"
  ) {
    console.log("Test 3 passed");
  } else {
    console.log("Test 3 failed");
  }

  const result4 = calculateNetworkAndBroadcastAddress(
    "192.168.001.001",
    "255.255.255.0"
  );
  if (
    result4.networkAddress === "192.168.1.0" &&
    result4.broadcastAddress === "192.168.1.255"
  ) {
    console.log("Test 4 passed");
  } else {
    console.log("Test 4 failed");
  }
}

testCalculateNetworkAndBroadcastAddress();

console.log(isPrivateIP("10.0.0.1")); // true
console.log(isPrivateIP("172.16.5.1")); // true
console.log(isPrivateIP("192.168.1.1")); // true
console.log(isPrivateIP("8.8.8.8")); // false

function decimalToBinary(decimal) {
  let binary = "";
  while (decimal > 0) {
    binary = (decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

console.log(decimalToBinary(240)); // 1010
