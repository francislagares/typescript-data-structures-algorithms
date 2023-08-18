// Option 1
export const capitalize = (str: string) => {
  const words = [];

  for (const word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
};

// Option 2
export const capitalizeString = (str: string) => {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
};
