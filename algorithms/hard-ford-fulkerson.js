function hardFordFulkerson(graph, source, sink) {
  let residualGraph = JSON.parse(JSON.stringify(graph));  // deep copy of graph
  let maxFlow = 0;
  let path = dfs(residualGraph, source, sink);

  while (path) {
    let flow = Infinity;

    for (let i = 0; i < path.length - 1; i++) {
      let start = path[i];
      let end = path[i + 1];
      flow = Math.min(flow, residualGraph[start][end]);
    }

    maxFlow += flow;

    for (let i = 0; i < path.length - 1; i++) {
      let start = path[i];
      let end = path[i + 1];
      residualGraph[start][end] -= flow;
      residualGraph[end][start] += flow;  // reverse the edge
    }

    path = dfs(residualGraph, source, sink);
  }

  return maxFlow;
}

function dfs(graph, start, end, visited = []) {
  if (start === end) return [end];

  visited[start] = true;

  for (let i = 0; i < graph[start].length; i++) {
    if (graph[start][i] > 0 && !visited[i]) {
      let path = dfs(graph, i, end, visited);
      if (path) return [start].concat(path);
    }
  }

  return null;
}

// Example graph representation (adjacency matrix)
let graph = [
  [0, 16, 13, 0, 0, 0],
  [0, 0, 10, 12, 0, 0],
  [0, 4, 0, 0, 14, 0],
  [0, 0, 9, 0, 0, 20],
  [0, 0, 0, 7, 0, 4],
  [0, 0, 0, 0, 0, 0]
];

console.log(hardFordFulkerson(graph, 0, 5));  // 23
