require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  it('Verifica se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });
  it('Verifica se ao executar a função com o argumento MLB1615760527, a fecth foi chamada', async ()=> {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  });
  it('Ao chamar a função com o argumento MLB1615760527, a função utiliza o endpoint', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith('https://api.mercadolibre.com/items/MLB1615760527');
  });
  it('Verifica se o retorno da função com o argumento MLB1615760527 é uma estrutura de dados igual ao objeto item', async () => {    
  expect(typeof await fetchItem('MLB1615760527')).toEqual(typeof item);
  });
  it('Vericfica se o retorno da função sem argumento retorna um erro com a mensagem "You must provide an url"', async ()=> {
  expect(fetchItem()).rejects.toThrowError('You must provide an url');
  });
});
