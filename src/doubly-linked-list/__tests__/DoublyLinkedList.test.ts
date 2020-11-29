import { DoublyLinkedList } from '../DoublyLinkedList';

describe('Doubly Linked List', () => {
  test('create empty linked list', () => {
    const doublyLinkedList = new DoublyLinkedList<string>();

    expect(doublyLinkedList.head).toEqual({
      data: undefined,
      next: null,
      prev: null,
    });
  });

  test('append node to linked list', () => {
    const doublyLinkedList = new DoublyLinkedList<number>(10);

    doublyLinkedList.append(15);
    doublyLinkedList.append(20);

    expect(doublyLinkedList.head.prev).toBeNull();
    expect(doublyLinkedList.head.data).toBe(10);
    expect(doublyLinkedList.head.next.data).toBe(15);
    expect(doublyLinkedList.tail.data).toBe(20);
    expect(doublyLinkedList.tail.prev.data).toBe(15);
    expect(doublyLinkedList.tail.next).toBeNull();
  });

  test('prepend node to linked list', () => {
    const doublyLinkedList = new DoublyLinkedList<number>();

    doublyLinkedList.prepend(10);

    expect(doublyLinkedList.head.data).toBe(10);
    expect(doublyLinkedList.tail.prev.data).toBe(10);

    doublyLinkedList.append(15);
    doublyLinkedList.append(20);
  });

  test('insert node list in a given index', () => {
    const doublyLinkedList = new DoublyLinkedList<object>();

    const nodeValue1 = { value: 1, key: 'key1' };
    const nodeValue2 = { value: 2, key: 'key2' };
    const nodeValue3 = { value: 3, key: 'key3' };

    doublyLinkedList
      .append(nodeValue3)
      .prepend(nodeValue1)
      .insert(1, nodeValue2);

    expect(doublyLinkedList.head.data).toEqual({ value: 1, key: 'key1' });
    expect(doublyLinkedList.head.next.data).toEqual({ value: 2, key: 'key2' });
    expect(doublyLinkedList.tail.data).toEqual({ value: 3, key: 'key3' });
  });

  test('print list in array format', () => {
    const doublyLinkedList = new DoublyLinkedList<number>(10);

    doublyLinkedList.append(15);
    doublyLinkedList.append(20);
    doublyLinkedList.append(25);

    expect(doublyLinkedList.printList()).toEqual([10, 15, 20, 25]);
  });
});
