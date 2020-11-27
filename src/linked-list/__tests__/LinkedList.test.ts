import { LinkedList, Node } from '../LinkedList';

describe('Singly Linked List', () => {
  test('create empty list node', () => {
    const node = new Node();

    expect(node.data).toBeUndefined();
    expect(node.next).toBeNull();
  });

  test('create list node with value', () => {
    const node = new Node(10);

    expect(node.data).toBe(10);
    expect(node.next).toBeNull();
  });

  test('create list node with object as a value', () => {
    const nodeValue = { key: 1, value: 'test' };
    const node = new Node(nodeValue);

    expect(node.data.key).toBe(1);
    expect(node.data.value).toBe('test');
    expect(node.next).toBeNull();
  });

  test('append node to linked list', () => {
    const linkedList = new LinkedList();

    linkedList.append(5);

    expect(linkedList.head.data).toBeUndefined();
    expect(linkedList.head.next.data).toBe(5);
    expect(linkedList.head.next.next).toBeNull();
  });

  test('prepend node to linked list', () => {
    const linkedList = new LinkedList();

    linkedList.prepend(5);

    expect(linkedList.head.data).toBe(5);
    expect(linkedList.tail.next).toBeNull();
  });

  test('insert node list in a given index', () => {
    const linkedList = new LinkedList();

    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };
    const nodeValue3 = { value: 3, key: 'key3' };

    linkedList.append(nodeValue1).prepend(nodeValue3).insert(1, nodeValue2);

    expect(linkedList.head.next.data).toEqual({ value: 2, key: 'key2' });
  });
});
