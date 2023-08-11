import { StackNode } from './StackNode';

export interface Stack<T> {
  size: number;
  top: StackNode<T> | null;
  bottom: StackNode<T> | null;
  push(value: T): number;
  pop(): StackNode<T> | null;
  peek(): StackNode<T> | null;
}

export class Stack<T> implements Stack<T> {
  public constructor() {
    this.size = 0;
    this.top = null;
    this.bottom = null;
  }

  public peek(): StackNode<T> | null {
    return this.top;
  }

  public push(value: T) {
    const node = new StackNode(value);
    if (this.size === 0) {
      this.top = node;
      this.bottom = node;
    } else {
      const currentTop = this.top;
      this.top = node;
      this.top.next = currentTop;
    }

    this.size += 1;
    return this.size;
  }

  public pop(): StackNode<T> | null {
    if (this.size > 0) {
      const nodeToBeRemoved = this.top;
      this.top = nodeToBeRemoved.next;
      this.size -= 1;
      nodeToBeRemoved.next = null;
      return nodeToBeRemoved;
    }
    return null;
  }
}
