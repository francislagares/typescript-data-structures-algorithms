import { vowels, vowelsWithRegex } from '../vowels';

describe('Finding Vowels', () => {
  test('Vowels is a function', () => {
    expect(typeof vowels).toEqual('function');
    expect(typeof vowelsWithRegex).toEqual('function');
  });

  test('returns the number of vowels used', () => {
    expect(vowels('aeiou')).toEqual(5);
    expect(vowels('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
    expect(vowels('bcdfghjkl')).toEqual(0);
  });

  test('returns with recursion the number of vowels used', () => {
    expect(vowelsWithRegex('aeiou')).toEqual(5);
    expect(vowelsWithRegex('abcdefghijklmnopqrstuvwxyz')).toEqual(5);
    expect(vowelsWithRegex('bcdfghjkl')).toEqual(0);
  });
});
