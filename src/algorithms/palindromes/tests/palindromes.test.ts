import { palindrome, palindromeWithEvery } from '../palindromes';

describe('Palindromes', () => {
  test('palindrome function is defined', () => {
    expect(typeof palindrome).toEqual('function');
    expect(typeof palindromeWithEvery).toEqual('function');
  });

  test('"aba" is a palindrome', () => {
    expect(palindrome('aba')).toBeTruthy();
    expect(palindromeWithEvery('aba')).toBeTruthy();
  });

  test('" aba" is not a palindrome', () => {
    expect(palindrome(' aba')).toBeFalsy();
    expect(palindromeWithEvery(' aba')).toBeFalsy();
  });

  test('"aba " is not a palindrome', () => {
    expect(palindrome('aba ')).toBeFalsy();
    expect(palindromeWithEvery('aba ')).toBeFalsy();
  });

  test('"greetings" is not a palindrome', () => {
    expect(palindrome('greetings')).toBeFalsy();
    expect(palindromeWithEvery('greetings')).toBeFalsy();
  });

  test('"1000000001" a palindrome', () => {
    expect(palindrome('1000000001')).toBeTruthy();
    expect(palindromeWithEvery('1000000001')).toBeTruthy();
  });

  test('"Fish hsif" is not a palindrome', () => {
    expect(palindrome('Fish hsif')).toBeFalsy();
    expect(palindromeWithEvery('Fish hsif')).toBeFalsy();
  });

  test('"pennep" a palindrome', () => {
    expect(palindrome('pennep')).toBeTruthy();
    expect(palindromeWithEvery('pennep')).toBeTruthy();
  });
});
