import {
  reverseString,
  reverseWithLoop,
  reverseWithReduce,
} from '../string-reverse';

describe('String Reversal', () => {
  test('Reverse function exists', () => {
    expect([reverseString, reverseWithLoop, reverseWithReduce]).toBeDefined();
  });

  test('Reverse reverses a string', () => {
    expect(reverseString('abcd')).toEqual('dcba');
    expect(reverseWithLoop('abcd')).toEqual('dcba');
    expect(reverseWithReduce('abcd')).toEqual('dcba');
  });

  test('Reverse reverses a string', () => {
    expect(reverseString('  abcd')).toEqual('dcba  ');
    expect(reverseWithLoop('  abcd')).toEqual('dcba  ');
    expect(reverseWithReduce('  abcd')).toEqual('dcba  ');
  });
});
