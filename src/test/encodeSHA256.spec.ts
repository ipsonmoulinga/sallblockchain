import { encodeSHA256 } from '../encodeSHA256';

describe('Test de ma fonction de hachage', () => {
  it('mon deuxieme test', () => {
    const zero = encodeSHA256(0);
    const result = '5feceb66ffc86f38d952786c6d696c79c2dbc239dd4e91b46729d73a27fb57e9';
    expect(zero).toBe(result);
  });
});
