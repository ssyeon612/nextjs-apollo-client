import Graph from "graphology";
import { Sigma } from "sigma";

export default function GraphPage() {
  const graph = new Graph();
  graph.addNode("1", { label: "Node 1", x: 0, y: 0, size: 10, color: "blue" });
  graph.addNode("2", { label: "Node 2", x: 1, y: 1, size: 20, color: "red" });
  graph.addEdge("1", "2", { size: 5, color: "purple" });
  const container: HTMLElement = document.getElementById("container")!;
  const sigmaInstance = new Sigma(graph, container);
  console.log("container:: {}", sigmaInstance);

  return <div id="container">graph page</div>;
}
