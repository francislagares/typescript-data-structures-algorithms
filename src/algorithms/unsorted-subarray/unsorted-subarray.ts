export const findUnsortedSubarray = (nums: number[]): number => {
  if (nums.length <= 1) return 0;

  let left = 0;
  let right = nums.length - 1;

  // Find left boundary
  while (left < nums.length - 1 && nums[left] <= nums[left + 1]) {
    left++;
  }

  // Find right boundary
  while (right > 0 && nums[right] >= nums[right - 1]) {
    right--;
  }
  // Array is already sorted
  if (left === nums.length - 1) return 0;

  // Step 3: Find min and max in the subarray
  let subarrayMin = Number.MAX_VALUE;
  let subarrayMax = Number.MIN_VALUE;

  for (let i = left; i <= right; i++) {
    subarrayMin = Math.min(subarrayMin, nums[i]);
    subarrayMax = Math.max(subarrayMax, nums[i]);
  }

  // Step 4: Extend boundaries if needed
  while (left > 0 && nums[left - 1] > subarrayMin) {
    left--;
  }
  while (right < nums.length - 1 && nums[right + 1] < subarrayMax) {
    right++;
  }

  // Step 5: Return length
  return right - left + 1;
};

console.log(findUnsortedSubarray([1, 3, 2, 0, 5])); // Output: 4
console.log(findUnsortedSubarray([1, 2, 3, 4])); // Output: 0
