// Option 1
export const pyramid = (n: number) => {
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++) {
    let level = '';

    for (let column = 0; column < 2 * n - 1; column++) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#';
      } else {
        level += ' ';
      }
    }

    console.log(level);
  }
};

// Option 2
export const pyramidWithRecursion = (n: number, row = 0, level = '') => {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramidWithRecursion(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramidWithRecursion(n, row, level + add);
};
