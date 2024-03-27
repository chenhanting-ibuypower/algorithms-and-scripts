// Import the functions to be tested
const { quickSort, quickSortUnderstandableVersion } = require('./quick-sort');

// Test for standard quick sort
test('Standard Quick Sort', () => {
  const arr = [10, 7, 8, 9, 1, 100];
  const sortedArr = quickSort(arr);
  expect(sortedArr).toEqual([1, 7, 8, 9, 10, 100]);
});

// Test for understandable version of quick sort
test('Understandable Version of Quick Sort', () => {
  const arr = [10, 7, 8, 9, 1, 100];
  const sortedArr = quickSortUnderstandableVersion(arr);
  expect(sortedArr).toEqual([1, 7, 8, 9, 10, 100]);
});