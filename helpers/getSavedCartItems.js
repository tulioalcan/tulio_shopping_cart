const getSavedCartItems = () => { 
    const getItem = localStorage.getItem('cartItems'); 
    return getItem ? JSON.parse(getItem) : [];
  };  

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
