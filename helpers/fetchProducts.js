const fetchProducts = async (product) => {
  try {
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${product}`;
    const products = await fetch(url);
    const data = await products.json();
    return data;
  } catch (error) {
    throw Error('You must provide an url');
  }   
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
