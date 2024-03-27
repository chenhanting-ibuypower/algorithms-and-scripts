function floydWarshall(graph) {
  const numVertices = graph.length;
  const dist = Array.from({ length: numVertices }, () =>
    Array(numVertices).fill(Infinity)
  );

  // Initialize the distance matrix with the given graph's weights
  for (let i = 0; i < numVertices; i++) {
    for (let j = 0; j < numVertices; j++) {
      if (i === j) dist[i][j] = 0; // distance from a vertex to itself is 0
      else if (graph[i][j] !== 0) dist[i][j] = graph[i][j];
    }
  }

  console.log("distance filled preliminarily:", dist);

  // Update the distance matrix
  for (let k = 0; k < numVertices; k++) {
    for (let i = 0; i < numVertices; i++) {
      for (let j = 0; j < numVertices; j++) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

// Example usage:
const graph = [
  [0, 3, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 7, 0, 2],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 2, 0, 3],
  [0, 0, 0, 0, 0, 0],
];

const shortestPaths = floydWarshall(graph);
console.log("final result", shortestPaths);
