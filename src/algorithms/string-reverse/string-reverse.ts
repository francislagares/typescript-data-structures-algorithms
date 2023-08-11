export const reverseString = (text: string) => {
  return Array.from(text).reverse().join('');
};

export const reverseWithLoop = (text: string) => {
  let reversed = '';

  for (const character of text) {
    reversed = character + reversed;
  }

  return reversed;
};

export const reverseWithReduce = (text: string) => {
  return text
    .split('')
    .reduce((reversed, character) => character + reversed, '');
};
