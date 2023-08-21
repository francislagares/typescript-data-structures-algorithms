import { SpyInstance, describe, test, vi } from 'vitest';
import { pyramid, pyramidWithRecursion } from '../pyramid';

describe('Steps Algorithm', () => {
  let spy: SpyInstance;

  beforeEach(() => {
    spy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    spy.mockRestore();
  });

  test('pyramid is a function', () => {
    expect(typeof pyramid).toEqual('function');
    expect(typeof pyramidWithRecursion).toEqual('function');
  });

  test('prints a pryamid for n = 2', () => {
    pyramid(2);
    pyramidWithRecursion(2);
    expect(spy.mock.calls[0][0]).toEqual(' # ');
    expect(spy.mock.calls[1][0]).toEqual('###');
    expect(spy.mock.calls.length).toEqual(4);
  });

  test('prints a pryamid for n = 3', () => {
    pyramid(3);
    pyramidWithRecursion(3);
    expect(spy.mock.calls[0][0]).toEqual('  #  ');
    expect(spy.mock.calls[1][0]).toEqual(' ### ');
    expect(spy.mock.calls[2][0]).toEqual('#####');
    expect(spy.mock.calls.length).toEqual(6);
  });

  test('prints a pryamid for n = 4', () => {
    pyramid(4);
    pyramidWithRecursion(4);
    expect(spy.mock.calls[0][0]).toEqual('   #   ');
    expect(spy.mock.calls[1][0]).toEqual('  ###  ');
    expect(spy.mock.calls[2][0]).toEqual(' ##### ');
    expect(spy.mock.calls[3][0]).toEqual('#######');
    expect(spy.mock.calls.length).toEqual(8);
  });
});
