import { threeSum } from '../three-sum';

describe('ThreeSum', () => {
  test('should return empty array when input array is empty', () => {
    expect(threeSum([])).toEqual([]);
  });

  test('should return empty array when no triplets sum to zero', () => {
    expect(threeSum([1, 2, 3, 4, 5])).toEqual([]);
  });

  test('should find single triplet that sums to zero', () => {
    expect(threeSum([-1, 0, 1])).toEqual([[-1, 0, 1]]);
  });

  test('should find multiple triplets that sum to zero', () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const result = threeSum(nums);

    // Each triplet should be sorted internally
    const expected = [
      [-1, 0, 1], // First solution
      [-1, -1, 2], // Second solution
    ];

    // Verify solutions exist
    expected.forEach(triplet => {
      expect(result).toContainEqual(triplet);
    });

    // Verify count matches
    expect(result.length).toBe(expected.length);
  });

  test('should handle duplicate numbers correctly', () => {
    const result = threeSum([-2, 0, 0, 2, 2]);
    expect(result).toEqual([[-2, 0, 2]]);
  });

  test('should handle all negative numbers', () => {
    expect(threeSum([-1, -2, -3, -4])).toEqual([]);
  });

  test('should handle array with all zeros', () => {
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]]);
  });
});
