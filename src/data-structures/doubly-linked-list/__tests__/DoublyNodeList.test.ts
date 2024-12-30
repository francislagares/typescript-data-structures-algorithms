import { describe, expect, test } from 'vitest';

import { DoublyNodeList } from '../DoublyNodeList';

describe('Doubly Linked List Node', () => {
  test('create empty node list', () => {
    const node = new DoublyNodeList<null>();

    expect(node.data).toBeUndefined();
    expect(node.next).toBeNull();
    expect(node.next).toBeNull();
  });

  test('create list node with object as a value', () => {
    const nodeValue = { key: 'test', value: 1 };
    const node = new DoublyNodeList(nodeValue);

    expect(node.data.key).toBe('test');
    expect(node.data.value).toBe(1);
    expect(node.next).toBeNull();
    expect(node.prev).toBeNull();
  });
});
