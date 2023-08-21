// Option 1
export const vowels = (str: string) => {
  let count = 0;
  const checker = ['a', 'e', 'i', 'o', 'u'];

  for (const char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++;
    }
  }

  return count;
};

// Option 2
export const vowelsWithRegex = (str: string) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};
