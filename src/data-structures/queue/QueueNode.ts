export interface IQueueNode<T> {
  data: T | null;
  next: IQueueNode<T> | null;
}

export class QueueNode<T> implements IQueueNode<T> {
  public data: T | null;
  public next: IQueueNode<T> | null;

  constructor(data?: T) {
    this.data = data;
    this.next = null;
  }
}
