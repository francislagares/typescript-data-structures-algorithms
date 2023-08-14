import { describe, test } from 'vitest';

import { findMaxChar } from '../maxchar';

describe('Maxchar Algorithm', () => {
  test('maxChar function exists', () => {
    expect(typeof findMaxChar).toEqual('function');
  });

  test('Finds the most frequently used char', () => {
    expect(findMaxChar('a')).toEqual('a');
    expect(findMaxChar('abcdefghijklmnaaaaa')).toEqual('a');
  });

  test('Works with numbers in the string', () => {
    expect(findMaxChar('ab1c1d1e1f1g1')).toEqual('1');
  });
});
