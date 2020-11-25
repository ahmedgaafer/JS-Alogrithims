const { Heap } = require('@ahmeds.gaafer/js-data-structures');

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
        
        dist[start-1] = 0;
        
        let queue = new Heap([[start, dist[start]]]);
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
                //visited = visited.slice(0, visited.indexOf(end))
                return [path, visited]
            }

            for(const nei in g[u]){
                let v = Number(nei);
                let Distance = 0;
                if(isA){
                    let  srcI = Math.floor(u / 75);
                    let  srcJ = u % 75;

                    let  destI = Math.floor(v / 75);
                    let  destJ = v % 75;

                    Distance = Math.sqrt(Math.pow(destI - srcI, 2) + Math.pow(destJ - destI, 2));
                }
                if(!dist[u-1] != Infinity && dist[u-1] + 1 + Distance < dist[v-1]){
                    dist[v-1] = dist[u-1] + 1;
                    queue.push([v, dist[v-1]]);
                    parent[v] = u
                  
                }
                
            }
        }
        return [[], visited]
    }

}

