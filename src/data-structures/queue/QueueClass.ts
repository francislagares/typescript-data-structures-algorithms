import { QueueNode } from './QueueNode';

export interface IQueue<T> {
  size: number;
  first: QueueNode<T> | null;
  last: QueueNode<T> | null;
  peek(): QueueNode<T> | null;
  enqueue(value: T): QueueNode<T> | null;
  dequeue(): QueueNode<T> | null;
  isEmpty(): boolean;
}

export class Queue<T> implements IQueue<T> {
  public first: QueueNode<T> | null;
  public last: QueueNode<T> | null;
  public size: number;

  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  public peek(): QueueNode<T> {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.first;
  }

  public isEmpty() {
    return this.size === 0;
  }

  public enqueue(value: T): QueueNode<T> {
    const node = new QueueNode(value);
    if (this.size === 0) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size += 1;
    return this.first;
  }

  public dequeue(): QueueNode<T> {
    if (this.size > 0) {
      const nodeToBeRemoved = this.first;
      this.first = this.first.next;
      this.size--;
      nodeToBeRemoved.next = null;
      return nodeToBeRemoved;
    }
    return null;
  }
}
