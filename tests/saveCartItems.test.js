const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  it('Verifica se ao executar a função com o argumento cartItem, o método localStorage.setItem é chamado', async () => {
   await saveCartItems('cartItem');
  expect(localStorage.setItem).toHaveBeenCalled(); 
});
it('Verifica se ao executar a função com um cartItem como argumento, o método localStorafe.setItem é chamado com dois parâmetros, chave:cartItems valor como argumento', async () => {
  await saveCartItems('cartItem');
  expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'cartItem');
});
});
