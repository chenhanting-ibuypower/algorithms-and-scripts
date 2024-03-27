
/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function(grid) {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let numberOfIslands = 0;

  function dfs(r, c) {
    // Check for out of bounds or if the cell is water or already visited
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
      return;
    }

    // Mark the cell as visited
    grid[r][c] = '0';

    // Visit all its neighbors
    dfs(r-1, c);
    dfs(r+1, c);
    dfs(r, c-1);
    dfs(r, c+1);
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        dfs(r, c);
        numberOfIslands++;
      }
    }
  }

  return numberOfIslands;
};

const grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]

console.log("Number of islands:", numIslands(grid1))
console.log("Number of islands:", numIslands(grid2))
/**
 * grid1: [ [ '0', '0', '0', '0', '0' ],
 *   [ '0', '0', '0', '0', '0' ],
 *   [ '0', '0', '0', '0', '0' ],
 *   [ '0', '0', '0', '0', '0' ] ]
 *  at quokka.js:127:0
 *
 * grid2: [ [ '0', '0', '0', '0', '0' ],
 *   [ '0', '0', '0', '0', '0' ],
 *   [ '0', '0', '0', '0', '0' ],
 *   [ '0', '0', '0', '0', '0' ] ]
 *  at quokka.js:128:0
 */
console.log("grid1:", grid1)
console.log("grid2:", grid2)