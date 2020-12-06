export default interface Graph<T> {
  numberOfNodes: number;
  adjacentList: object;
  addVertex(node: string): boolean;
  addEdge(vertex: string, node: string): boolean;
  hasEdge(vertex: string, node: string): boolean;
  displayConnections(): void;
}

export default class Graph<T> implements Graph<T> {
  public constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  public addVertex(node: string): boolean {
    // Check if vertex already exists on adjacentList
    if (!this.adjacentList[node]) {
      this.adjacentList[node] = [];
    } else {
      throw new Error('The node already exists');
    }
    this.numberOfNodes++;
    return true;
  }

  public addEdge(vertex: string, node: string): boolean {
    // If vertex1 exists in adjacentList add vertex2 to the adjacents
    // If vertex2 exists in adjacentList add vertex1 to the adjacents
    let hasEdge = this.hasEdge(vertex, node);
    if (!hasEdge) {
      this.adjacentList[vertex].push(node);
      this.adjacentList[node].push(vertex);
    } else {
      throw new Error('The node does not exist');
    }
    return true;
  }

  public hasEdge(vertex: string, node: string): boolean {
    let adjacents = this.adjacentList[vertex];
    for (let i = 0; i < adjacents.length; i++) {
      if (node === adjacents[i]) return true;
    }
    return false;
  }

  public displayConnections(): void {
    const allNodes = Object.keys(this.adjacentList);
    for (let node of allNodes) {
      let nodeConnections = this.adjacentList[node];
      let connections = '';
      let vertex: string;
      for (vertex of nodeConnections) {
        connections += vertex + ' ';
      }
      console.log(node + ' --> ' + connections);
    }
  }
}
