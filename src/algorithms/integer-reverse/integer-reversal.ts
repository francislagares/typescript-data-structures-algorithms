export const reverseInt = (int: number) => {
  const reversed = int.toString().split('').reverse().join('');

  if (int < 0) {
    return parseInt(reversed) * Math.sign(int);
  }

  return parseInt(reversed);
};
