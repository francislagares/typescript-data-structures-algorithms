/**
 * Finds the greatest common divisor string of two strings.
 * A string is a divisor if concatenating it multiple times produces the original string.
 *
 * @param str1 First string (1 <= length <= 1000)
 * @param str2 Second string (1 <= length <= 1000)
 * @returns The largest common divisor string, or empty string if none exists
 */
export const gcdOfStrings = (str1: string, str2: string): string => {
  // If concatenation in both orders isn't equal, no solution exists
  if (str1 + str2 !== str2 + str1) {
    return '';
  }

  // Helper function to calculate GCD of two numbers using Euclidean algorithm
  const gcd = (a: number, b: number): number => {
    return b === 0 ? a : gcd(b, a % b);
  };

  // The length of the GCD string will be the GCD of the lengths
  const gcdLength = gcd(str1.length, str2.length);

  // The potential GCD string is the first gcdLength characters
  const candidate = str1.slice(0, gcdLength);

  // Verify if this candidate actually divides both strings
  const divides = (str: string, divisor: string): boolean => {
    const times = str.length / divisor.length;
    return divisor.repeat(times) === str;
  };

  return divides(str1, candidate) && divides(str2, candidate) ? candidate : '';
};
