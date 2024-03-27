/**
 * standard quick sort:
 *   https://www.youtube.com/watch?v=WprjBK0p6rw
 */
function quickSort(arr, left = 0, right = arr.length - 1) {
  let pivot;
  let partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    console.log("array & pivot:", arr, partitionIndex);

    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right) {
  // Get the value of the pivot element.
  let pivotValue = arr[pivot];

  // This will keep track of where we should place elements less than the pivot.
  let partitionIndex = left;

  // Go through each element from 'left' to 'right'.
  for (let i = left; i < right; i++) {
    // If the current element is less than the pivot value...
    if (arr[i] < pivotValue) {
      // ...swap it to the position pointed by partitionIndex.
      swap(arr, i, partitionIndex);

      // Increment partitionIndex. This ensures that the next smaller element will be placed to the right of the previous smaller element.
      partitionIndex++;
    }
  }

  // After processing all elements, the pivot value should be placed between the smaller and larger elements.
  // So, we swap the pivot element with the element at partitionIndex.
  swap(arr, right, partitionIndex);
  
  // Return the new index of the pivot value.
  return partitionIndex;
}

/**
 * function swap(arr, i, j) {
 *   [arr[i], arr[j]] = [arr[j], arr[i]];
 * }
 */
function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quickSortUnderstandableVersion(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[arr.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

// const result = quickSort([10, 7, 8, 9]);
const result = quickSortUnderstandableVersion([10, 7, 8, 9, 1, 100]);
// console.log(result);
console.log(result);
