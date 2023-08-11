import { describe, expect, test } from 'vitest';

import { Queue } from '../QueueClass';

describe('Queue', () => {
  test('create an empty queue', () => {
    const queue = new Queue();

    expect(queue).toBeInstanceOf(Queue);
    expect(queue).not.toBeNull();
    expect(queue.isEmpty()).toBeTruthy();
  });

  test('enqueue data to queue', () => {
    const queue = new Queue<string>();

    queue.enqueue('Joy');
    queue.enqueue('Matt');
    queue.enqueue('Pavel');
    queue.enqueue('Samir');

    expect(queue.size).toBe(4);
    expect(queue.isEmpty()).toBeFalsy();
  });

  test('dequeue data from queue', () => {
    const queue = new Queue<string>();

    queue.enqueue('Joy');
    queue.enqueue('Matt');
    queue.enqueue('Pavel');
    queue.enqueue('Samir');

    expect(queue.size).toBe(4);
    expect(queue.isEmpty()).toBeFalsy();

    expect(queue.dequeue().data).toBe('Joy');
    expect(queue.dequeue().data).toBe('Matt');

    expect(queue.size).toBe(2);
    expect(queue.isEmpty()).toBeFalsy();
  });

  test('peek node from queue', () => {
    const queue = new Queue<number>();

    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.peek().data).toBe(1);
  });

  test('peek throws error if queue is empty', () => {
    try {
      const queue = new Queue();

      expect(queue.peek()).toThrowError();
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
      expect(error).toHaveProperty('message', 'Queue is empty');
    }
  });
});
