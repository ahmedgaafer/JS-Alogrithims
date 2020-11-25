const { withTry }  = require('../Helpers/index');

const DFS = withTry((graph, start, end) => {
    if(!graph[start] || !graph[end]) throw "Start, or End not found. Can not run DFS";
    let visited = [start]
    let stack = [start]
    let parent = {[start]: null}
    while(stack.length > 0 ){
        let v = stack.pop();
        if( v == end) {
            let path = [end];
            let child = end;

            while(!path.includes(start)){
                path = [parent[child]].concat(path);
                child = [parent[child]]
            }
            visited = visited.slice(0, visited.indexOf(end))
            return [path, visited]
        }

        for(const nei in graph[v]){
            const n = Number(nei);
            
            if(! visited.includes(n)){
                 visited.push(n);
                 stack.push(n);
                 parent[n] = v
            }
        }
    }
    
    return [[], visited]
})

module.exports = DFS