class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            this.numberOfNodes++;
        }
    }

    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    depthFirstTraversal(startVertex, visited = {}) {
        if(!startVertex) return;

        console.log(startVertex);

        visited[startVertex] = true;

        for (const neighbor of this.adjacencyList[startVertex]) {
            if(!visited[neighbor]) {
                this.depthFirstTraversal(neighbor, visited);
            }
        }
    }

    breadthFirstTraversal(startVertex) {
        if(!startVertex) return;

        let visited = {};
        let queue = [startVertex];
        visited[startVertex] = true;

        while(queue.length > 0) {
            let currentVertex = queue.shift();

            console.log(currentVertex);

            for (const neighbor of this.adjacencyList[currentVertex]) {
                if(!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            }
        }
    }
}

let graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "D");

console.log("DFS")
graph.depthFirstTraversal('A');

console.log("BFS")
graph.breadthFirstTraversal('A');