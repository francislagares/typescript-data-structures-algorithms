import { fizzBuzz } from '../fizzbuzz';

describe('Fizzbuzz Algorithm', () => {
  let spy;

  beforeEach(() => {
    spy = vi.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    spy.mockRestore();
  });

  test('fizzBuzz function is defined', () => {
    expect(fizzBuzz).toBeDefined();
  });

  test('Calling fizzbuzz with `5` prints out 5 statements', () => {
    fizzBuzz(5);

    expect(spy.mock.calls.length).toEqual(5);
  });

  test('Calling fizzbuzz with 15 prints out the correct values', () => {
    fizzBuzz(15);

    expect(spy.mock.calls[0][0]).toEqual(1);
    expect(spy.mock.calls[1][0]).toEqual(2);
    expect(spy.mock.calls[2][0]).toEqual('Fizz');
    expect(spy.mock.calls[3][0]).toEqual(4);
    expect(spy.mock.calls[4][0]).toEqual('Buzz');
    expect(spy.mock.calls[5][0]).toEqual('Fizz');
    expect(spy.mock.calls[6][0]).toEqual(7);
    expect(spy.mock.calls[7][0]).toEqual(8);
    expect(spy.mock.calls[8][0]).toEqual('Fizz');
    expect(spy.mock.calls[9][0]).toEqual('Buzz');
    expect(spy.mock.calls[10][0]).toEqual(11);
    expect(spy.mock.calls[11][0]).toEqual('Fizz');
    expect(spy.mock.calls[12][0]).toEqual(13);
    expect(spy.mock.calls[13][0]).toEqual(14);
    expect(spy.mock.calls[14][0]).toEqual('FizzBuzz');
  });
});
