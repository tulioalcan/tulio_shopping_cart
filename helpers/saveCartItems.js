const saveCartItems = (cartItems) => {
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  console.log('entrouuu');
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
