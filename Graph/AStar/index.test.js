const AStar = require('./');
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
.addVertex(6)
.addVertex(7)
.addVertex(8)
.addVertex(9);


g
.addEdge(1,2)
.addEdge(1,4)
.addEdge(2,1)
.addEdge(2,3)
.addEdge(2,5)
.addEdge(3,2)
.addEdge(3,6)
.addEdge(4,1)
.addEdge(4,5)
.addEdge(4,7)
.addEdge(5,2)
.addEdge(5,4)
.addEdge(5,6)
.addEdge(5,8)
.addEdge(6,3)
.addEdge(6,5)
.addEdge(6,9)
.addEdge(7,4)
.addEdge(7,8)
.addEdge(8,5)
.addEdge(8,7)
.addEdge(8,9)
.addEdge(9,6)
.addEdge(9,8)


g.view();

const ans = AStar(g, 1, 9);

console.log(ans)