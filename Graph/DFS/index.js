const withTry = require('../Helpers/index');

const DFS = withTry((graph, start, end, path=[], visited=[]) => {
    if(!graph[start] || !graph[end]) throw "Start, or End not found. Can not run DFS";
    if(visited.includes(start)) return path;
    
    path.push((typeof start == 'string')? start: start.toString());
    visited.push(start);

    if(start == end) return path;

    for(const nei in graph[start]){
        if(! visited.includes(nei)){
            return DFS(graph, nei, end, path, visited)
        }
    }

    return -1;
})

module.exports = DFS