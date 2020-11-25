
const { withTry } = require('../Helpers/index');
const  { Queue }     = require('@ahmeds.gaafer/js-data-structures')
const BFS = withTry((graph, start, end) => {
    if(!graph[start] || !graph[end]) throw "Start, or End not found. Can not run DFS";

    const parent = {[start] : null}
    let visited = [start]
    let queue   = new Queue([start]);
    let v;
    while(queue.getSize() > 0){
        v  = queue.peak();
        queue.dequeue();
    
        if(v == end){
            let path = [end]
            let child = end;
            while(!path.includes(start)){
                path = [parent[child]].concat(path);
                child = parent[child]
            }
            return [path, visited];
        }
        for(const nei in graph[v]){
            if(! visited.includes(nei)){
                visited.push(nei);
                queue.enqueue(nei);
                parent[nei] = v;
            }
        }
    }
    console.log("NO END")
    return [[], visited];
});

module.exports = BFS;