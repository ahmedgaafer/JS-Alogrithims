const { Heap } = require('@ahmeds.gaafer/js-data-structures');

const h = (start, end) => {
    let  srcI = Math.floor(start / 75);
    let  srcJ = start % 75;

    let  destI = Math.floor(end / 75);
    let  destJ = end % 75;

    return Math.sqrt(Math.pow(destI - srcI, 2) + Math.pow(destJ - srcJ, 2));
}

module.exports = {
    withTry : function(func){
                return function(...args) {
                    try{  
                        return func.call(this, ...args);
                    }
                    catch(error){
                        console.log(`ERROR: ${error}`)
                    }
                }
            },
    _dijkstraAStar: function(graph, start, end, isA = false){
        const g = graph.graph;

        let visited = [start];
        let parent = {[start]: null}
        let dist = Array(graph.getVerticesNumbers()).fill(Infinity);
        let hDist = Array(graph.getVerticesNumbers()).fill(0).map((e, i) => h(i, end));
        
        dist[start] = 0;
        
        let queue = new Heap([[start, h(start, end)]]);
        queue.comparator = (parent, child) => parent[1] > child[1];
        queue.comparator2 = function(index){return (this.rightChild(index)[1] < this.leftChild(index)[1])?true:false;}

        while(queue.getSize() > 0){
            let heapNode = queue.peak();
            queue.pop();

            let u = heapNode[0];
           if(!visited.includes(u) ) visited.push(u);

            if(u == end){
                let path = [end];
                let child = end;

                while(!path.includes(start)){
                    path = [parent[child]].concat(path);
                    child = [parent[child]]
                }
                visited = visited.slice(0, visited.indexOf(end))
                return [path, visited]
            }

            for(const nei in g[u]){
                let v = Number(nei);
                let Distance = isA ? h(v, end): 0;
               
                if(dist[u] + 1 < dist[v]){
                    dist[v] = dist[u] + 1 ;
                    queue.push([v, dist[v] + Distance]);
                    parent[v] = u
                    if(!visited.includes(v) ) visited.push(v);
                  
                }
                
            }
        }
        return [[], visited]
    }

}

