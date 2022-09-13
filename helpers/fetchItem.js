const fetchItem = async (productID) => {
  try {
  const endpoint = `https://api.mercadolibre.com/items/${productID}`;
  const response = await fetch(endpoint);
  const produto = await response.json();  
  return produto; 
  } catch (error) {
    throw Error('You must provide an url');
  }  
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
