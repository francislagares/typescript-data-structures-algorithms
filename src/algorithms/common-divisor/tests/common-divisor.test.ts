import { describe, expect, test } from 'vitest';
import { gcdOfStrings } from '../common-divisor';

describe('gcdOfStrings', () => {
  test('finds GCD when one string is a multiple of the other', () => {
    expect(gcdOfStrings('ABCABC', 'ABC')).toBe('ABC');
  });

  test('finds GCD when both strings have a common divisor', () => {
    expect(gcdOfStrings('ABABAB', 'ABAB')).toBe('AB');
  });

  test('returns empty string when no common divisor exists', () => {
    expect(gcdOfStrings('LEET', 'CODE')).toBe('');
  });

  test('handles identical strings', () => {
    expect(gcdOfStrings('AAA', 'AAA')).toBe('AAA');
  });

  test('handles single character strings', () => {
    expect(gcdOfStrings('A', 'A')).toBe('A');
  });

  test('handles longer strings with common divisor', () => {
    expect(
      gcdOfStrings('TAUXXTAUXXTAUXXTAUXXTAUXX', 'TAUXXTAUXXTAUXXTAUXX'),
    ).toBe('TAUXX');
  });
});
