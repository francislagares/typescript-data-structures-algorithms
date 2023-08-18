import { SpyInstance, describe, test, vi } from 'vitest';
import { steps, stepsWithRecursion } from '../steps';

describe('Steps Algorithm', () => {
  let spy: SpyInstance;

  beforeEach(() => {
    spy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    spy.mockRestore();
  });

  test('steps is a function', () => {
    expect(typeof steps).toEqual('function');
    expect(typeof stepsWithRecursion).toEqual('function');
  });

  test('steps called with n = 1', () => {
    steps(1);
    stepsWithRecursion(1);
    expect(spy.mock.calls[0][0]).toEqual('#');
    expect(spy.mock.calls.length).toEqual(2);
  });

  test('steps called with n = 2', () => {
    steps(2);
    stepsWithRecursion(2);
    expect(spy.mock.calls[0][0]).toEqual('# ');
    expect(spy.mock.calls[1][0]).toEqual('##');
    expect(spy.mock.calls.length).toEqual(4);
  });

  test('steps called with n = 3', () => {
    steps(3);
    stepsWithRecursion(3);
    expect(spy.mock.calls[0][0]).toEqual('#  ');
    expect(spy.mock.calls[1][0]).toEqual('## ');
    expect(spy.mock.calls[2][0]).toEqual('###');
    expect(spy.mock.calls.length).toEqual(6);
  });
});
