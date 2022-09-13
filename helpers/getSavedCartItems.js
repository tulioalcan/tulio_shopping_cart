const getSavedCartItems = () => {
  if (localStorage.getItem('cartItems')) {
    return JSON.parse(localStorage.getItem('cartItems'));
  }
  localStorage.setItem('cartItems', JSON.stringify([]));
  return [];
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
