import { describe, test } from 'vitest';

import { isValidParentheses } from '../parentheses';

describe('Parentheses', () => {
  test('isValidParentheses function is defined', () => {
    expect(typeof isValidParentheses).toEqual('function');
  });

  test('"()" is a valid parentheses', () => {
    expect(isValidParentheses('()')).toBeTruthy();
  });

  test('"([)]" is not a valid parentheses', () => {
    expect(isValidParentheses('([)]')).toBeFalsy();
  });

  test('"[" is not a valid parentheses', () => {
    expect(isValidParentheses('[')).toBeFalsy();
  });

  test('"()[]{}" is a valid parentheses', () => {
    expect(isValidParentheses('()[]{}')).toBeTruthy();
  });
});
