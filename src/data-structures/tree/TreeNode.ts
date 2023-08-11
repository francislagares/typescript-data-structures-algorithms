export interface TreeNode<T> {
  value: T;
  right: TreeNode<T> | null;
  left: TreeNode<T> | null;
}

export class TreeNode<T> implements TreeNode<T> {
  constructor(value: T = null) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
