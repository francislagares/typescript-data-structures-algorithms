import { mergeAlternately } from '../merge-alternately';

describe('mergeAlternately', () => {
  test('equal length strings', () => {
    expect(mergeAlternately('abc', 'pqr')).toBe('apbqcr');
  });

  test('first string shorter', () => {
    expect(mergeAlternately('ab', 'pqrs')).toBe('apbqrs');
  });

  test('second string shorter', () => {
    expect(mergeAlternately('abcd', 'pq')).toBe('apbqcd');
  });
});
