export const palindrome = (str: string) => {
  const reversed = str.split('').reverse().join('');

  return str === reversed;
};

export const palindromeWithEvery = (str: string) => {
  return str
    .split('')
    .every((character, index) => character === str[str.length - index - 1]);
};
