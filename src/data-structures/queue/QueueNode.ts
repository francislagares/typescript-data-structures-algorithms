export interface QueueNode<T> {
  data: T | null;
  next: QueueNode<T> | null;
}

export class QueueNode<T> implements QueueNode<T> {
  constructor(data?: T) {
    this.data = data;
    this.next = null;
  }
}
