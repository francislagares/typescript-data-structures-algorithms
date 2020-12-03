import { TreeNode } from '../TreeNode';

export interface BinarySearchTree<T> {
  root: TreeNode<T> | null;
  insert(value: T): TreeNode<T> | null;
  lookup(value: T): TreeNode<T> | null;
  remove(value: T): boolean;
}

export class BinarySearchTree<T> implements BinarySearchTree<T> {
  public constructor() {
    this.root = null;
  }

  public insert(value: T): TreeNode<T> | null {
    const newNode = new TreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          // Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return newNode;
          }
          currentNode = currentNode.left;
        } else {
          // Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return newNode;
          }
          currentNode = currentNode.right;
        }
      }
    }
    return this.root;
  }

  public lookup(value: T): TreeNode<T> | null {
    if (!this.root) {
      return null;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null;
  }
}
