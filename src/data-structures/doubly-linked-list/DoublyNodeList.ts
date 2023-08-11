export interface INode<T> {
  data: T;
  next?: INode<T>;
  prev?: INode<T>;
}

export class DoublyNodeList<T> implements INode<T> {
  public data: T;
  public next?: INode<T>;
  public prev?: INode<T>;

  constructor(data?: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}
