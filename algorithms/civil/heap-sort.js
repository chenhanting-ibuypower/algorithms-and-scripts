function heapSort(arr) {
  let n = arr.length;

  // Build a max heap
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }

  // Extract elements from heap one by one
  for (let i = n - 1; i > 0; i--) {
    // Move the current root to the end
    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // Call max heapify on the reduced heap
    heapify(arr, i, 0);
  }
  return arr;
}

// Function to heapify a subtree rooted at node i
// n is size of the heap, arr is the input array
function heapify(arr, n, i) {
  let largest = i; // Initialize largest as root
  let l = 2 * i + 1; // left child
  let r = 2 * i + 2; // right child

  // If left child is larger than root
  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  // If largest is not the root
  if (largest !== i) {
    let swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest);
  }
}

// Example usage
let arr = [12, 11, 13, 5, 6, 7];
console.log(heapSort(arr)); // Output: [5, 6, 7, 11, 12, 13]

let randomArray = [1, 2, 6, 4]
for (let i = Math.floor(randomArray.length / 2) - 1; i >= 0; i--) {
  heapify(randomArray, randomArray.length, i);
}
console.log(randomArray) // [ 6, 4, 1, 2 ]
/**
 * [ 1, 4, 6, 2 ] at randomArray quokka.js:56:0
 * [ 1, 2, 6, 4 ] at randomArray quokka.js:59:0
 */