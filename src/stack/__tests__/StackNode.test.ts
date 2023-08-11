import { describe, expect, test } from 'vitest';

import { StackNode } from '../StackNode';

describe('Stack Node', () => {
  test('create empty stack node', () => {
    const node = new StackNode();

    expect(node.data).toBeUndefined();
    expect(node.next).toBeNull();
    expect(node.next).toBeNull();
  });

  test('create stack node with value', () => {
    const node = new StackNode(10);

    expect(node.data).toBe(10);
    expect(node.next).toBeNull();
  });

  test('create stack node with object as a value', () => {
    const nodeValue = { key: 1, value: 'test' };
    const node = new StackNode(nodeValue);

    expect(node.data.key).toBe(1);
    expect(node.data.value).toBe('test');
    expect(node.next).toBeNull();
  });
});
