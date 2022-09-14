const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('Verifica se ao execurtar a função o método localStorage.getItem é chamado', async () => {
    await getSavedCartItems();
    expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('Verifica se ao executar a função, o método localStorage.getItem é chamado com o cartItems como parâmetro', async () => {
    await getSavedCartItems('cartItem');
    expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });  
});
