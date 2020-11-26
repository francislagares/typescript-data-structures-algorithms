export interface INode<T> {
  data: T;
  next?: INode<T>;
}

export class Node<T> implements INode<T> {
  public data: T;
  public next?: INode<T>;

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

export class LinkedList<T> {
  private head: INode<T> | null;
  protected tail: INode<T> | null;
  protected length: number;

  constructor(data: T) {
    this.head = new Node(data);
    this.tail = this.head;
    this.length = 1;
  }

  public append(data: T): LinkedList<T> {
    // Create a new node
    const newNode = new Node(data);
    // Attach it after the first node
    this.tail.next = newNode;
    // Update the tail to point the newNode
    this.tail = newNode;
    // Increment length
    this.length++;
    // Return the new created list
    return this;
  }

  public prepend(data: T): LinkedList<T> {
    // Create a new node
    const newNode = new Node(data);
    // Create a pointer to the head of the list
    newNode.next = this.head;
    // Update head reference to the newNode
    this.head = newNode;
    // Increment length
    this.length++;
    // Return the new created list
    return this;
  }

  // Prints linked list in array format for better readability
  public printList(): Array<T> {
    const array: T[] = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return array;
  }

  public insert(index: number, data: T) {
    // Check params
    if (index >= this.length) {
      return this.append(data);
    }
    // Create a new node
    const newNode = new Node(data);
    // Get the index of previous node
    const prevNode = this.traverse(index - 1);
    // Temporarily hold the pointer to previous node
    const nextNode = prevNode.next;
    // Update previous node with the new one
    prevNode.next = newNode;
    // Point the new node to the next node
    newNode.next = nextNode;
    // Increment length
    this.length++;
    // Print list to the console
    return this.printList();
  }

  public remove(index: number) {
    // Get the index of previous node
    const prevNode = this.traverse(index - 1);
    // Reference node to be removed
    const currentNode = prevNode.next;
    // Reference previous node with the next after the removed one
    prevNode.next = currentNode.next;
    // Decrease length
    this.length--;
    // Print list to the console
    return this.printList();
  }

  private traverse(index: number): INode<T> {
    // Check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
}
