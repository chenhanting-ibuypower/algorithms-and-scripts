// This code implements a graph data structure using an adjacency list.
// It uses a hash table to store the adjacency list, where each key is
// a vertex and each value is an array of that vertex's neighbors.
// It has methods to add vertices and edges, as well as breadth-first
// search (BFS) and depth-first search (DFS) methods.

class Graph {
  constructor() {
    this.adjList = {};
  }

  addVertex(vertex) {
    if (!this.adjList[vertex]) this.adjList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.adjList[v1].push(v2);
    this.adjList[v2].push(v1);
  }

  bfs(start) {
    const queue = [start];
    const visited = {};
    const result = [];

    visited[start] = true;

    while (queue.length) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      this.adjList[currentVertex].forEach(neighbor => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }

  dfs(start) {
    const visited = {};
    const result = [];

    this._dfsHelper(start, visited, result);

    return result;
  }

  _dfsHelper(vertex, visited, result) {
    visited[vertex] = true;
    result.push(vertex);

    this.adjList[vertex].forEach(neighbor => {
      if (!visited[neighbor]) {
        this._dfsHelper(neighbor, visited, result);
      }
    });
  }
}

// Example usage:
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log(graph.bfs("A"));  // Outputs: [ 'A', 'B', 'C', 'D' ]
console.log(graph.dfs("A"));  // Outputs: [ 'A', 'B', 'D', 'C' ]
