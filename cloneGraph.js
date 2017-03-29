/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */

var cloneGraph = function(graph) {
  if (!graph) return null;

  var visited = [];
  var queue = [];
  var inQ = [];

  var rootNode = null;
  var newNode = new UndirectedGraphNode(graph.label);

  queue.push(graph);
  inQ.push(newNode);

  while (queue.length > 0) {
    var node = queue.shift();
    var currNode = inQ.shift();
    currNode.neighbors = [];

    visited.push(node);

    if (!rootNode) rootNode = currNode;
  
    for (var i = 0; i < node.neighbors.length; ++i) {
      if (!visited.includes(node.neighbors[i])) {
        queue.push(node.neighbors[i]);
        inQ.push(new UndirectedGraphNode(node.neighbors[i].label));
      }

      currNode.neighbors.push(node.neighbors[i]);
    }
  }

  return rootNode;
};

