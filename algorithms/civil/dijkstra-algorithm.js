class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = [];
    let smallest;

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            distances[nextNeighbor] = candidate;
            previous[nextNeighbor] = smallest;
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

// Example usage:
const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 3);

console.log(graph.dijkstra("A", "C")); // ["A", "B", "C"]

/**
 *     2       4
 * A ------ B ------ C
 * |       / \       |
 * |      /   \      |
 * |     /     \     |
 * |    1       3    |
 * |   /         \   |
 * |  /           \  |
 * | /             \ |
 * D --------------- E
 *        10
 */
const graph2 = new WeightedGraph();
graph2.addVertex("A");
graph2.addVertex("B");
graph2.addVertex("C");
graph2.addVertex("D");
graph2.addVertex("E");
graph2.addEdge("A", "B", 2);
graph2.addEdge("A", "D", 1);
graph2.addEdge("B", "C", 4);
graph2.addEdge("B", "D", 1);
graph2.addEdge("B", "E", 3);
graph2.addEdge("C", "E", 4);
graph2.addEdge("D", "E", 10);

/**
 * In this example, the shortest path from A to E is A -> D -> B -> E with a total weight of 5.
 */
console.log(graph2.dijkstra("A", "E")); // Expected: ["A", "D", "B", "E"]
console.log(graph2.dijkstra("D", "E")); 
