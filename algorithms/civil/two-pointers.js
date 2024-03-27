function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2

  // While there are elements in both arrays
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  // If there are remaining elements in arr1, append them to mergedArray
  while (i < arr1.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  // If there are remaining elements in arr2, append them to mergedArray
  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }

  return mergedArray;
}

// Example usage
const arr1 = [1, 3, 5, 7];
const arr2 = [2, 4, 6, 8];
const result = mergeSortedArrays(arr1, arr2);
console.log(result); // Output will be [1, 2, 3, 4, 5, 6, 7, 8]

function hasCycle(head) {
  let slowPointer = head;
  let fastPointer = head;

  while (fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if (slowPointer === fastPointer) {
      return true; // A cycle was detected
    }
  }

  return false; // No cycle detected
}

// Example usage:
const node1 = { val: 1 };
const node2 = { val: 2 };
const node3 = { val: 3 };
node1.next = node2;
node2.next = node3;
node3.next = node1; // Creates a cycle
console.log(hasCycle(node1)); // Output will be true

function isPalindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false; // Characters do not match, so it's not a palindrome
    }
    left++;
    right--;
  }

  return true; // All characters matched, so it's a palindrome
}

// Example usage:
console.log(isPalindrome('mom')); // Output will be true
console.log(isPalindrome('civic')); // Output will be true
console.log(isPalindrome('radar')); // Output will be true
console.log(isPalindrome('hello')); // Output will be false

