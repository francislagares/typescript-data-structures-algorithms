// Option 1
export const chunkArray = (arr: number[], size: number) => {
  const chunked = [];

  for (const element of arr) {
    const last = chunked[chunked.length - 1];

    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
};

// Option 2
export const chunkSliced = (arr: number[], size: number) => {
  const chunked = [];
  let index = 0;

  while (index < arr.length) {
    chunked.push(arr.slice(index, index + size));
    index += size;
  }

  return chunked;
};
