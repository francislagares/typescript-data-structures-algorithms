export interface IStackNode<T> {
  data: T | null;
  next: IStackNode<T> | null;
}

export class StackNode<T> implements IStackNode<T> {
  public data: T | null;
  public next: IStackNode<T> | null;

  constructor(data?: T) {
    this.data = data;
    this.next = null;
  }
}
