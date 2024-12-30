import { describe, expect, test } from 'vitest';

import { myArray } from '../arrayClass';

describe('Array Class Implementation', () => {
  test('new empty array is created', () => {
    const array = new myArray();
    expect(array.isEmpty()).toBe(true);
  });

  test('create new array with 5 elements', () => {
    const array = new myArray(1, 2, 3, 4, 5);
    expect(array.size()).toEqual(5);
  });

  test('get value from a given index in array', () => {
    const array = new myArray(
      { id: 1, name: 'Francis' },
      { id: 2, name: 'Carole' },
    );
    expect(array.get(1)).toEqual({ id: 2, name: 'Carole' });
  });

  test('push value to end of array', () => {
    const array = new myArray();
    expect(array.push('Hello')).toBe(1);
    expect(array.push('there')).toBe(2);
  });

  test('remove last item in array', () => {
    const array = new myArray(
      ['name', 'Francis'],
      ['name', 'Erika'],
      ['name', 'Peter'],
    );
    expect(array.pop()).toEqual(['name', 'Peter']);
  });

  test('delete item at a given index of array', () => {
    const array = new myArray(
      { id: 1, name: 'Francis' },
      { id: 2, name: 'Carole' },
      { id: 3, name: 'Peter' },
      { id: 4, name: 'Erika' },
    );
    expect(array.delete(2)).toEqual({ id: 3, name: 'Peter' });
  });
});
