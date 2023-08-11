export class myArray<T> {
  private length: number;
  private data: Record<string, T>;

  public constructor(...args: T[]) {
    this.length = args.length;
    this.data = {};
    for (const key in args) {
      this.data[key] = args[key];
    }
  }

  public size(): number {
    return this.length;
  }

  public isEmpty(): boolean {
    return this.length === 0;
  }

  public get(index: number): T {
    return this.data[index];
  }

  public push(item: T): number {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  public pop(): T {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  public insert(index: number, item: T): object {
    for (let i = this.length; i >= index; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[index] = item;
    this.length++;
    return this.data;
  }

  public prepend(item: T): object {
    return this.insert(0, item);
  }

  public delete(index: number): T {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  private shiftItems(index: number): void {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}
