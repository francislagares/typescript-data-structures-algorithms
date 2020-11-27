import { HashTable } from '../HashTable';

describe('Hash Table Class Implementation', () => {
  test('create a hash table of a given size', () => {
    const hashTable = new HashTable(65);
    expect(hashTable.size).toBe(65);
  });

  test('create new empty hash table', () => {
    const hashTable = new HashTable();
    expect(hashTable.size).toBe(undefined);
  });

  test('set data to hash table', () => {
    const hashTable = new HashTable();
    hashTable.set('Users', 150);

    expect(hashTable.get('Users')).toBe(150);
  });
});
