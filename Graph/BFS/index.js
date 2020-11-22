
const withTry = require('../Helpers/index');

const BFS = withTry((graph, start, end) => {
    if(!graph[start] || !graph[end]) throw "Start, or End not found. Can not run DFS";

    const hierarchy = {[start] : null}
    let visited = [start]
    let queue   = [start]
    let current;

    while(queue.length > 0){
        current  = queue.pop();

        if(current == end){
            let path = [end]
            let child = end;
            while(!path.includes(start)){
                path = [hierarchy[child]].concat(path);
                child = hierarchy[child]
            }
            return path;
        }
        for(const nei in graph[current]){
            if(! visited.includes(nei)){
                visited.push(nei);
                queue.push(nei);

                hierarchy[nei] = current;
            }
        }
    }
    return -1;
});

module.exports = BFS;