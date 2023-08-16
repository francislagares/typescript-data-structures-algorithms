import { describe, test } from 'vitest';
import { chunkArray, chunkSliced } from '../array-chunk';

describe('Array chunk', () => {
  test('function chunkArray exists', () => {
    expect(typeof chunkArray).toEqual('function');
    expect(typeof chunkSliced).toEqual('function');
  });

  test('chunkArray divides an array of 10 elements with chunk size 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = chunkArray(arr, 2);
    const sliced = chunkSliced(arr, 2);

    expect(chunked).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ]);
    expect(sliced).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ]);
  });

  test('chunkArray divides an array of 3 elements with chunk size 1', () => {
    const arr = [1, 2, 3];
    const chunked = chunkArray(arr, 1);
    const sliced = chunkSliced(arr, 1);

    expect(chunked).toEqual([[1], [2], [3]]);
    expect(sliced).toEqual([[1], [2], [3]]);
  });

  test('chunkArray divides an array of 5 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunkArray(arr, 3);
    const sliced = chunkSliced(arr, 3);

    expect(chunked).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
    expect(sliced).toEqual([
      [1, 2, 3],
      [4, 5],
    ]);
  });

  test('chunkArray divides an array of 13 elements with chunk size 5', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunked = chunkArray(arr, 5);
    const sliced = chunkSliced(arr, 5);

    expect(chunked).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13],
    ]);
    expect(sliced).toEqual([
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13],
    ]);
  });
});
