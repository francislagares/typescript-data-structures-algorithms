export const findMaxChar = (text: string) => {
  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (const char of text) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (const char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
};
