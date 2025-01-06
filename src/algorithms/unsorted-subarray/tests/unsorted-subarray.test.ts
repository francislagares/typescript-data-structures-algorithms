import { findUnsortedSubarray } from '../unsorted-subarray';

describe('findUnsortedSubarray', () => {
  test('should return 0 for already sorted array', () => {
    expect(findUnsortedSubarray([1, 2, 3, 4, 5])).toBe(0);
  });

  test('should return 0 for empty array', () => {
    expect(findUnsortedSubarray([])).toBe(0);
  });

  test('should return 0 for single element array', () => {
    expect(findUnsortedSubarray([1])).toBe(0);
  });

  test('should return correct length for partially unsorted array', () => {
    expect(findUnsortedSubarray([1, 3, 2, 0, 5])).toBe(4);
  });

  test('should return array length for completely unsorted array', () => {
    expect(findUnsortedSubarray([5, 4, 3, 2, 1])).toBe(5);
  });

  test('should handle array requiring boundary extension', () => {
    expect(findUnsortedSubarray([1, 3, 5, 2, 6, 4, 7])).toBe(5);
  });
});
