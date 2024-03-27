function permute(arr, l, r, result) {
  if (l === r) {
    result.push([...arr]);
    console.log("result:", result);
  } else {
    for (let i = l; i <= r; i++) {
      console.log("left and current:", l, "and", i)
      console.log("🌹 before swap:", arr);
      [arr[l], arr[i]] = [arr[i], arr[l]]; // swap
      console.log("after swap:", arr)
      permute(arr, l + 1, r, result);
      [arr[l], arr[i]] = [arr[i], arr[l]]; // backtrack
      console.log("after backtrack:", arr)
    }
  }
}

const stringList = ["a", "b", "c"] // ["的", "姑娘", "懷裡", "我", "喜歡", "在", "別人"];
const result = [];
permute(stringList, 0, stringList.length - 1, result);

/**
 * [ '的姑娘懷裡我喜歡在別人',
 *   '的姑娘懷裡我喜歡別人在',
 *   '的姑娘懷裡我在喜歡別人',
 *   '的姑娘懷裡我在別人喜歡',
 *   '的姑娘懷裡我別人在喜歡',
 *   '的姑娘懷裡我別人喜歡在',
 *   '的姑娘懷裡喜歡我在別人',
 *   '的姑娘懷裡喜歡我別人在',
 *   '的姑娘懷裡喜歡在我別人',
 *    ...
 * ]
 */
console.log(result.map(string => string.join("")));

function getPermutations(str) {
  console.log("👉str:", str)
  // Base case: if the string is empty or has length 1, return the string itself
  if (str.length <= 1) {
    return [str];
  }

  let result = []; // This array will hold the final permutations

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    const remainingChars = str.slice(0, i) + str.slice(i + 1); // Get the string without the current character
    console.log("👤 The character scheduled to be taken away and the remaining characters:", char, "&", remainingChars)

    // Recursively get permutations of the remaining characters
    const permutationsOfRemainingChars = getPermutations(remainingChars);
    console.log("😀 permutations of the remaining characters and current character", permutationsOfRemainingChars, "&", char)


    // Combine the current character with each of the permutations of the remaining characters
    for (let perm of permutationsOfRemainingChars) {
      result.push(char + perm);
    }
  }

  return result;
}

// Test
const input = "aes";
console.log(getPermutations(input)); // This will print all permutations of "abc"