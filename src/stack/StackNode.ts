export interface StackNode<T> {
  data: T | null;
  next: StackNode<T> | null;
}

export class StackNode<T> implements StackNode<T> {
  constructor(data?: T) {
    this.data = data;
    this.next = null;
  }
}
