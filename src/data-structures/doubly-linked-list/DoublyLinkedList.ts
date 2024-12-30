import { DoublyNodeList, INode } from './DoublyNodeList';

export class DoublyLinkedList<T> {
  public head: INode<T> | null;
  public tail: INode<T> | null;
  protected length: number;

  constructor(data?: T) {
    this.head = new DoublyNodeList(data);
    this.tail = this.head;
    this.length = 1;
  }

  public append(data: T): DoublyLinkedList<T> {
    // Create a new node
    const newNode = new DoublyNodeList(data);
    // Add prev property at the end of the list
    newNode.prev = this.tail;
    // Attach it after the first node
    this.tail.next = newNode;
    // Update the tail to point the newNode
    this.tail = newNode;
    // Increment length
    this.length++;
    // Return the new created list
    return this;
  }

  public prepend(data: T): DoublyLinkedList<T> {
    // Create a new node
    const newNode = new DoublyNodeList(data);
    //Check if there is no head to make a new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }
    // Create a pointer to the head of the list
    newNode.next = this.head;
    // Point prev to new node because it's no longer the head
    this.head.prev = newNode;
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
    const newNode = new DoublyNodeList(data);
    // Get the index of previous node
    const prevNode = this.traverse(index - 1);
    // Temporarily hold the pointer to previous node
    const nextNode = prevNode.next;
    // Point previous node to the new one
    prevNode.next = newNode;
    // Point new node to previous
    newNode.prev = prevNode;
    // Point new node to next one
    newNode.next = nextNode;
    // Point back nextNode with the new one
    nextNode.prev = newNode;
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
