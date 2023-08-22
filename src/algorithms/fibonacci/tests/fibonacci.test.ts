import { fibonacci, memoizedFib } from '../fibonacci';

describe('Fibonacci Algorithm', () => {
  test('Fib function is defined', () => {
    expect(typeof fibonacci).toEqual('function');
    expect(typeof memoizedFib).toEqual('function');
  });

  test('calculates correct fibonacci value for 1', () => {
    expect(fibonacci(1)).toEqual(1);
    expect(memoizedFib(1)).toEqual(1);
  });

  test('calculates correct fibonacci value for 2', () => {
    expect(fibonacci(2)).toEqual(1);
    expect(memoizedFib(2)).toEqual(1);
  });

  test('calculates correct fibonacci value for 3', () => {
    expect(fibonacci(3)).toEqual(2);
    expect(memoizedFib(3)).toEqual(2);
  });

  test('calculates correct fibonacci value for 4', () => {
    expect(fibonacci(4)).toEqual(3);
    expect(memoizedFib(4)).toEqual(3);
  });

  test('calculates correct fibonacci value for 15', () => {
    expect(fibonacci(39)).toEqual(63245986);
    expect(memoizedFib(39)).toEqual(63245986);
  });
});
