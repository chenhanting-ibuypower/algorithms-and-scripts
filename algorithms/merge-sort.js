function mergeSort (arr) {
  if (arr.length === 1) {
    return arr
  }

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  return merge(
    mergeSort(left),
    mergeSort(right)
  )
}

function merge (left, right) {
  let result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft])
      indexLeft++
    } else {
      result.push(right[indexRight])
      indexRight++
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

// (Place the Merge Sort implementation here)

// Sample array to sort
let arr = [10, 7, 8, 9, 10, 1, 5, 4];

// Sort the array
let sortedArray = mergeSort(arr);

// Log the sorted array to the console
console.log(sortedArray);
arr = [3, 6, 8, 10, 1, 2, 1];
console.log("Sorted array:", mergeSort(arr));