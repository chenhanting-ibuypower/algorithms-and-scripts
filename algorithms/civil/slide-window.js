function maxSubArraySum(arr, k) {
  let maxSum = 0;
  let windowSum = 0;

  // First, add up the first 'k' elements
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  // Then slide the window
  for (let i = k; i < arr.length; i++) {
    // Add the next element of the array into the window
    windowSum += arr[i];
    // Subtract the left-most element of the window
    windowSum -= arr[i - k];
    // Update the maxSum if necessary
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

/**
 * "Exactly k distinct characters" means that the substring must contain k different characters, 
 * no more, no less. For example, if k is 3, then the substring must contain exactly 3 different characters. 
 * Any combination of characters is acceptable as long as the total number of unique characters equals k. 
 * The characters can repeat within the substring, but the count of unique characters shouldn't exceed or be less than k.
 */
function longest_substring_with_k_distinct(str, k) {
  let windowStart = 0;
  let maxLength = 0;
  let charFrequency = {};

  // In the following loop we'll try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;

    // Shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }

    // Remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }
  return maxLength;
}

console.log(maxSubArraySum([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // Outputs: 24
console.log(longest_substring_with_k_distinct("araaci", 2)); // Outputs: 4
// console.log(longest_substring_with_k_distinct("araaci", 1));  // Outputs: 2
// console.log(longest_substring_with_k_distinct("cbbebi", 3));  // Outputs: 5
