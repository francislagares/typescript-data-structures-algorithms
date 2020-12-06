import Graph from '../Graph';

describe('Graphs', () => {
  test('create an empty graph', () => {
    const graph = new Graph();

    expect(graph).toBeDefined();
  });

  test('add a new vertex to the graph', () => {
    const graph = new Graph();

    graph.addVertex('0');
    graph.addVertex('1');
    graph.addVertex('2');
    graph.addVertex('3');
    graph.addVertex('4');
    graph.addVertex('5');
    graph.addVertex('6');

    expect(graph.numberOfNodes).toBe(7);
    expect(graph.adjacentList[0]).toEqual([]);
    expect(graph.adjacentList[1]).toEqual([]);
    expect(graph.adjacentList[2]).toEqual([]);
    expect(graph.adjacentList[3]).toEqual([]);
    expect(graph.adjacentList[4]).toEqual([]);
    expect(graph.adjacentList[5]).toEqual([]);
    expect(graph.adjacentList[6]).toEqual([]);
  });

  test('throws error if vertex already exists', () => {
    try {
      const graph = new Graph();

      graph.addVertex('0');
      graph.addVertex('1');
      graph.addVertex('2');

      expect(graph.addVertex('2')).toThrowError();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'The node already exists');
    }
  });

  test('add edges to graph', () => {
    const graph = new Graph();

    graph.addVertex('0');
    graph.addVertex('1');
    graph.addVertex('2');
    graph.addVertex('3');
    graph.addVertex('4');
    graph.addVertex('5');
    graph.addVertex('6');

    graph.addEdge('3', '1');
    graph.addEdge('3', '4');
    graph.addEdge('4', '2');
    graph.addEdge('4', '5');
    graph.addEdge('1', '2');
    graph.addEdge('1', '0');
    graph.addEdge('0', '2');
    graph.addEdge('6', '5');

    expect(graph.hasEdge('3', '4')).toBeTruthy();
    expect(graph.hasEdge('3', '1')).toBeTruthy();
    expect(graph.hasEdge('4', '5')).toBeTruthy();
    expect(graph.hasEdge('1', '2')).toBeTruthy();
  });
});
