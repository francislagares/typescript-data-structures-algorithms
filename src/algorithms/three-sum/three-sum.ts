export const threeSum = (nums: number[]) => {
  nums.sort((a, b) => a - b); // Sort the array
  const triplets = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // Skip the duplicate elements for the first number
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        triplets.push([nums[i], nums[left], nums[right]]);

        // Skip the duplicate elements for the second and third numbers
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
};

const nums = [-3, 0, 1, 2, -1, 1, -2];
const triplets = threeSum(nums);

console.log(triplets);
