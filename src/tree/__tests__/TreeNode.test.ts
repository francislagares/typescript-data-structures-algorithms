import { TreeNode } from '../TreeNode';

describe('Tree Node', () => {
  test('create empty tree node', () => {
    const node = new TreeNode<unknown>();

    expect(node).toBeDefined();
    expect(node.value).toBeNull();
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });

  test('create tree node with value', () => {
    const node = new TreeNode<number>(5);

    expect(node.value).toBe(5);
  });
});
