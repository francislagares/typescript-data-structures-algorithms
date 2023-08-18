import { capitalize, capitalizeString } from '../capitalize';

describe('Capitalize Algorithm', () => {
  test('Capitalize is a function', () => {
    expect(typeof capitalize).toEqual('function');
    expect(typeof capitalizeString).toEqual('function');
  });

  test('capitalizes the first letter of every word', () => {
    expect(capitalize('hi there, how is it going?')).toEqual(
      'Hi There, How Is It Going?',
    );
    expect(capitalizeString('hi there, how is it going?')).toEqual(
      'Hi There, How Is It Going?',
    );
  });
});
