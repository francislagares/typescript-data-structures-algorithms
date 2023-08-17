// Option 1 ( the hard way )
export const anagrams = (stringA: string, stringB: string) => {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (const char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }

  return true;
};

const buildCharMap = (str: string) => {
  const charMap = {};

  for (const char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  return charMap;
};

// Option 2 ( easy way )
export const easyAnagram = (stringA: string, stringB: string) => {
  return cleanString(stringA) === cleanString(stringB);
};

const cleanString = str => {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
};
