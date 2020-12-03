import { BinarySearchTree } from '../BinarySearchTree';

describe('Binary Search Tree', () => {
  test('create binary search tree', () => {
    const bst = new BinarySearchTree();

    expect(bst).toBeDefined();
    expect(bst.root).toBeNull();
  });

  test('insert values in tree', () => {
    const bst = new BinarySearchTree<number>();

    const node1 = bst.insert(9);
    const node2 = bst.insert(4);
    const node3 = bst.insert(6);
    const node4 = bst.insert(20);
    const node5 = bst.insert(170);
    const node6 = bst.insert(15);
    const node7 = bst.insert(1);

    expect(node1.value).toBe(9);
    expect(node2.value).toBe(4);
    expect(node3.value).toBe(6);
    expect(node4.value).toBe(20);
    expect(node5.value).toBe(170);
    expect(node6.value).toBe(15);
    expect(node7.value).toBe(1);
  });

  test('look for a node in tree', () => {
    const bst = new BinarySearchTree<number>();

    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);

    expect(bst.lookup(6).value).toBe(6);
    expect(bst.lookup(45)).toBeFalsy();
  });
});
