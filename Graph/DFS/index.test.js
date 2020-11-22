const DFS = require('./');
const { Graph } = require('@ahmeds.gaafer/js-data-structures');

const isUniDirectional = true;
const isWeighted = false;

const g = new Graph(isUniDirectional, isWeighted);

g
.addVertex(1)
.addVertex(2)
.addVertex(3)
.addVertex(4)
.addVertex(5)
.addVertex(6);

g
.addEdge(1,4)
.addEdge(2,3)
.addEdge(3,4)
.addEdge(4,5)
.addEdge(5,6)
.addEdge(6,1);

g.view();

const path = DFS(g.graph, 1, 3);

console.log(path);