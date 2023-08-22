// Option 1
export const fibonacci = (n: number) => {
  const result = [0, 1];

  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];

    result.push(a + b);
  }

  return result[n];
};

const memoize = (fn: (n: number) => number) => {
  const cache: { [key: string]: number } = {};

  return function (...args: number[]) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    }

    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
};

const slowFib = (n: number) => {
  if (n < 2) {
    return n;
  }

  return memoizedFib(n - 1) + memoizedFib(n - 2);
};

// Option 2
export const memoizedFib = memoize(slowFib);
