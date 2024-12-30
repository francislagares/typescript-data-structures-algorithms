export interface ITreeNode<T> {
  value: T;
  right: ITreeNode<T> | null;
  left: ITreeNode<T> | null;
}

export class TreeNode<T> implements ITreeNode<T> {
  public value: T;
  public right: ITreeNode<T> | null;
  public left: ITreeNode<T> | null;

  constructor(value: T = null) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
