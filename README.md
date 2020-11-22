# JavaScript Data Structures

<p align="">
  <a href="#"> <img src="https://img.shields.io/badge/testing-false-red"> </a>
</p>  

<p align="">
  <a href="https://discord.gg/TgVpvUN" target="_blank"><img src="https://img.shields.io/discord/712223278844084275?label=Discord&style=for-the-badge"></a>
</p>

Algorithms made by vanilla JS.

## Install

```bash
$ npm install js-alogrithims
```

## Algorithms : 

- [X] <a href="#BFS">BFS</a>
- [X] <a href="#DFS">DFS</a>
- [ ] <a href="#">Dijkstra</a>
- [ ] <a href="#">AStar</a>

## Usage:

***Note***:


> this package is dependent on another package that I made that includes all of the data structures that I used. To avoid bugs use the pre installed dependency <a href="https://www.npmjs.com/package/@ahmeds.gaafer/js-data-structures">JS-Data-Structures</a> package for all of the data structures you want.

> the graph is implemented with adjacency map -same as adjacency list but using maps instead of lists in the edges- "this affects the order of the graph algorithms."

### BFS:

```js
const { Graph } = require('@ahmeds.gaafer/js-data-structures');
const { graphAlgo } = require('js-alogrithims');
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

/*
Graph contains 6 vertcies.

1 => [4, 1] :  
2 => [3, 1] :  
3 => [4, 1] :  
4 => [5, 1] :  
5 => [6, 1] :  
6 => [1, 1] :  

*/

const path = graphAlgo.BFS(g.graph, 1, 6);

console.log(path); // logs => [ '1', '4', '5', '6' ]

```

### DFS: 

```js
const { Graph } = require('@ahmeds.gaafer/js-data-structures');
const { graphAlgo } = require('js-alogrithims');
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

/*
Graph contains 6 vertcies.

1 => [4, 1] :  
2 => [3, 1] :  
3 => [4, 1] :  
4 => [5, 1] :  
5 => [6, 1] :  
6 => [1, 1] :  

*/

const path = graphAlgo.DFS(g.graph, 1, 6);

console.log(path); // logs => [ '1', '4', '5', '6' ]
```