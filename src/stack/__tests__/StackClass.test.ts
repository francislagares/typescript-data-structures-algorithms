import { Stack } from '../StackClass';

describe('Stack', () => {
  test('create an empty stack', () => {
    const stack = new Stack();

    expect(stack).not.toBeNull();
  });

  test('push data to stack', () => {
    const stack = new Stack();

    stack.push({ value: 'test1', key: 'key1' });
    stack.push({ value: 'test2', key: 'key2' });

    expect(stack.top.data['value']).toBe('test2');
    expect(stack.top.next.data['value']).toBe('test1');
    expect(stack.bottom.data['value']).toBe('test1');
    expect(stack.bottom.next).toBeNull();
  });

  test('remove data from stack', () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.pop().data).toBe(3);
    expect(stack.pop().data).toBe(2);
    expect(stack.pop().data).toBe(1);
    expect(stack.pop()).toBeNull();
  });

  test('peek node from stack', () => {
    const stack = new Stack<number>();

    stack.push(1);
    stack.push(2);
    stack.push(3);

    expect(stack.peek().data).toBe(3);
  });
});
