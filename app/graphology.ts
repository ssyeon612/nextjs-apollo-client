import Graph from "graphology";

console.log("graph test");

const graph = new Graph();

// add nodes
graph.addNode("jeong");
graph.addNode("kim");

// add edges
graph.addEdge("jeong", "kim");

console.log("number of nodes", graph.order);
console.log("number of edges", graph.size);

graph.forEachNode((node) => {
  console.log(node);
});
