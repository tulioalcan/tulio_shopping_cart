require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fetchProducts', () => {
  it('Verifica se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });  
  it('Verifica se ao executar a função com o argumento computador, a fecth foi chmada', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });
  it('Ao chamar a função com o argumento computador, a função utiliza o endpoint', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/sites/MLB/search?q=computador');
  });  
  it('Verifica se o retorno da função com o argumento computador é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    await fetchProducts('computador')
    expect(typeof fetchProducts).toEqual(computadorSearch);
  });
  it('Vericfica se o retorno da função sem argumento retorna um erro com a mensagem "You must provide an url"', async () => {
    expect(fetchProducts()).rejects.toThrowError('You must provide an url')
  });
});
