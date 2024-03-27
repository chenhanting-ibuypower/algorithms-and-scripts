function primsAlgorithm(graph, startNode) {
  let node = startNode;
  let MST = new Set();
  let edges = [];
  let visited = new Set();

  // Run the loop till we have visited every node in the graph
  while (!visited.has(node)) {
    visited.add(node);
    console.log("visited:", visited);
    console.log("node & graph:", node, "&", graph[node]);
    for (let edge of graph[node]) {
      edges.push(edge);
    }
    edges.sort((edge1, edge2) => edge1[2] - edge2[2]);
    console.log("edges:", edges);

    // Find the smallest edge which is not forming a cycle
    while (edges.length !== 0) {
      let smallestEdge = edges.shift();
      console.log("smallest edge:", smallestEdge);
      if (!visited.has(smallestEdge[1])) {
        MST.add(smallestEdge);
        node = smallestEdge[0];
        break;
      }
    }
  }
  return MST;
}

let graph = {
  A: [
    ["B", 2],
    ["C", 3],
  ],
  B: [
    ["A", 2],
    ["C", 1],
    ["D", 1],
    ["E", 4],
  ],
  C: [
    ["A", 3],
    ["B", 1],
    ["E", 5],
  ],
  D: [
    ["B", 1],
    ["E", 1],
  ],
  E: [
    ["B", 4],
    ["C", 5],
    ["D", 1],
  ],
};

console.log(primsAlgorithm(graph, "A"));

function kruskalAlgorithm(graph) {
  let edges = [];
  /**
   * for (let u in graph) {
   *   for (let v in graph[u]) {
   *     let weight = graph[u][v];
   *     edges.push([u, v, weight]);
   *   }
   * }
   */
  for (let [u, neighbors] of Object.entries(graph)) {
    for (let [v, weight] of Object.entries(neighbors)) {
      edges.push([u, v, weight]);
    }
  }
  /**
   * unsorted edges:
   *  [ [ 'A', 'B', 1 ],
   *   [ 'A', 'C', 4 ],
   *   [ 'B', 'A', 1 ],
   *   [ 'B', 'C', 2 ],
   *   [ 'B', 'D', 5 ],
   *   [ 'C', 'A', 4 ],
   *   [ 'C', 'B', 2 ],
   *   [ 'C', 'D', 1 ],
   *   [ 'D', 'B', 5 ],
   *   [ 'D', 'C', 1 ] ]
   */
  edges.sort((a, b) => a[2] - b[2]);
  /**
   * sorted edges:
   * [ [ 'A', 'B', 1 ],
   *   [ 'B', 'A', 1 ],
   *   [ 'C', 'D', 1 ],
   *   [ 'D', 'C', 1 ],
   *   [ 'B', 'C', 2 ],
   *   [ 'C', 'B', 2 ],
   *   [ 'A', 'C', 4 ],
   *   [ 'C', 'A', 4 ],
   *   [ 'B', 'D', 5 ],
   *   [ 'D', 'B', 5 ] ]
   * @type {string[]}
   */
  let nodes = Object.keys(graph);
  let uf = new UnionFind(nodes);
  // Transform [ 'A', 'B', 'C', 'D' ] to UnionFind { parent: { A: 'A', B: 'B', C: 'C', D: 'D' } }

  let mst = [];

  for (let [u, v, weight] of edges) {
    if (uf.union(u, v)) {
      mst.push([u, v, weight]);
    }
  }
  return mst;
}

class UnionFind {
  constructor(elements) {
    this.parent = {};
    for (let i = 0; i < elements.length; i++) {
      this.parent[elements[i]] = elements[i];
    }
  }

  union(a, b) {
    let rootA = this.find(a);
    let rootB = this.find(b);
    console.log("➡️ What is rootA & rootB:", rootA, "&", rootB)
    if (rootA === rootB) return false;

    this.parent[rootA] = rootB;
    return true;
  }

  /**
   * Here's a breakdown of the find(a) function:
   *
   * 1. while (a !== this.parent[a]): This loop continues as long as the element a is not its own parent. If a is its own parent, it means a is the root of its set.
   * 2. a = this.parent[a]: If a is not its own parent, it means a is not the root. So, we move one level up in the tree by setting a to its parent.
   *    This step is repeated until we find the root.
   * 3. return a: Once the loop exits, a is the root of the set, and it's returned.
   */
  find(a) {
    /**
     * If we use `if`, the result for mst will be
     * [ [ 'A', 'B', 1 ],
     *   [ 'C', 'D', 1 ],
     *   [ 'B', 'C', 2 ],
     *   ~~~~ ⬇️ duplicate ⬇️ ~~~~
     *   [ 'A', 'C', 4 ],
     *   [ 'C', 'A', 4 ],
     *   [ 'B', 'D', 5 ],
     *   [ 'D', 'B', 5 ] ]
     *   ~~~~ ⬆️ duplicate ⬆️ ~~~~
     *
     * ➡️ What is rootA & rootB: A & B
     * ➡️ What is rootA & rootB: B & B
     * ➡️ What is rootA & rootB: C & D
     * ➡️ What is rootA & rootB: D & D
     * ➡️ What is rootA & rootB: B & D
     * ➡️ What is rootA & rootB: D & D
     * ➡️ What is rootA & rootB: B & D
     * ➡️ What is rootA & rootB: D & B
     * ➡️ What is rootA & rootB: D & B
     * ➡️ What is rootA & rootB: B & D
     *
     *  If we use `while`, the result for mst will be
     *  [ [ 'A', 'B', 1 ], [ 'C', 'D', 1 ], [ 'B', 'C', 2 ] ]
     *
     * ➡️ What is rootA & rootB: A & B
     * ➡️ What is rootA & rootB: B & B
     * ➡️ What is rootA & rootB: C & D
     * ➡️ What is rootA & rootB: D & D
     * ➡️ What is rootA & rootB: B & D
     * ➡️ What is rootA & rootB: D & D
     * ➡️ What is rootA & rootB: D & D
     * ➡️ What is rootA & rootB: D & D
     * ➡️ What is rootA & rootB: D & D
     * ➡️ What is rootA & rootB: D & D
     *
     * ➡️ What is rootA & rootB: D & D
     *  at quokka.js:130:4
     *
     * We can conclude that this.parent changes
     * 🍒 [COUNT 1] A & { A: 'B', B: 'D', C: 'D', D: 'D' }
     *  at `🍒 [COUNT ${ count }]` quokka.js:186:6
     *
     * 🤖 Therefore, `a` changes from A to B
     *
     * 🍒 [COUNT 2] B & { A: 'B', B: 'D', C: 'D', D: 'D' }
     *  at `🍒 [COUNT ${ count }]` quokka.js:186:6
     */
    let count = 0
    while (a !== this.parent[a]) {
      count++;
      console.log(`🍒 [COUNT ${count}]`, a, "&", this.parent);
      a = this.parent[a];
    }
    // Here the data is mutated
    return a;
  }
}

// Example
let graphkruskal = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1},
};

let mst = kruskalAlgorithm(graphkruskal);
console.log(mst);

// A Real-world example for Union Find:
// Let's say we have 5 cities: A, B, C, D, E
// We want to see which cities are connected by roads.
const cities = ["A", "B", "C", "D", "E"];
const unionFind = new UnionFind(cities);

// Initially, every element is in its own set. So, the `find` function will return the element itself.
console.log(unionFind.find("A")); // Outputs: A
console.log(unionFind.find("B")); // Outputs: B

// Let's connect A and B. This means they are now part of the same set.
unionFind.union("A", "B");

// If we now search for the set to which A or B belongs, it will show that they are part of the same set.
console.log(unionFind.find("A")); // Outputs: B (because B is the root of the set to which A now belongs)
console.log(unionFind.find("B")); // Outputs: B

// Let's connect B and C. This means A, B, and C are all now part of the same set.
unionFind.union("B", "C");

console.log(unionFind.find("C")); // Outputs: B

// If we try to connect two nodes that are already part of the same set, the `union` function will return false.
console.log(unionFind.union("A", "C")); // Outputs: false (because A and C are already connected)

// Let's connect C and D.
unionFind.union("C", "D");

console.log(unionFind.find("D")); // Outputs: B (because B is the root of the set to which D now belongs)

// implement kruskal algorithm with union find
function kruskalAlgorithmWithUnionFind(graph) {
  let edges = [];
  for (let [u, neighbors] of Object.entries(graph)) {
    for (let [v, weight] of Object.entries(neighbors)) {
      edges.push([u, v, weight]);
    }
  }
  edges.sort((a, b) => a[2] - b[2]);

  let nodes = Object.keys(graph);
  let uf = new UnionFind(nodes);

  let mst = [];

  for (let [u, v, weight] of edges) {
    if (uf.union(u, v)) {
      mst.push([u, v, weight]);
    }
  }
  return mst;
}

kruskalAlgorithmWithUnionFind(graphkruskal);
