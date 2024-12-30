import { describe, expect, test } from 'vitest';

import { QueueNode } from '../QueueNode';

describe('Stack Node', () => {
  test('create empty queue node', () => {
    const node = new QueueNode();

    expect(node.data).toBeUndefined();
    expect(node.next).toBeNull();
    expect(node.next).toBeNull();
  });

  test('create queue node with value', () => {
    const node = new QueueNode(10);

    expect(node.data).toBe(10);
    expect(node.next).toBeNull();
  });

  test('create queue node with object as a value', () => {
    const nodeValue = { key: 1, value: 'test' };
    const node = new QueueNode(nodeValue);

    expect(node.data.key).toBe(1);
    expect(node.data.value).toBe('test');
    expect(node.next).toBeNull();
  });
});
