let graph = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "E"],
  D: ["B", "F"],
  E: ["B", "C", "F"],
  F: ["D", "E"],
};

function dfs(graph, start, visited = new Set()) {
  visited.add(start);
  let result = [start];

  for (let neighbour of graph[start]) {
    if (!visited.has(neighbour)) {
      result = [...result, ...dfs(graph, neighbour, visited)];
    }
  }

  return result;
}

function dfsWithReversedChildren(graph, start, visited = new Set()) {
  visited.add(start);
  let result = [start];

  let neighbours = [...graph[start]];
  neighbours.reverse(); // Reverse the array

  for (let neighbour of neighbours) {
    if (!visited.has(neighbour)) {
      result = result.concat(dfs(graph, neighbour, visited));
    }
  }

  return result;
}

const dfsFromA = dfs(graph, "A");
const dfsUsingReversedStack = dfsWithReversedChildren(graph, "A");
const dfsFromB = dfs(graph, "B");
console.log(dfsFromA);
console.log(dfsUsingReversedStack);
console.log(dfsFromB);

function bfs(graph, start) {
  let visited = new Set();
  let queue = [start];
  let result = []; // Initialize the result array

  while (queue.length > 0) {
    let node = queue.shift(); // Removes the first element from queue

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node); // Add the visited node to the result array

      for (let neighbour of graph[node]) {
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
        }
      }
    }
  }
  return result; // Return the result array
}

const bfsFromA = bfs(graph, "A"); // This will print 'A B C D E F'
console.log(bfsFromA);


