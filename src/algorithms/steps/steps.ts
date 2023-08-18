// Option 1
export const steps = (n: number) => {
  for (let row = 0; row < n; row++) {
    let stair = '';

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
};

// Option 2
export const stepsWithRecursion = (n: number, row = 0, stair = '') => {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return stepsWithRecursion(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  stepsWithRecursion(n, row, stair + add);
};
