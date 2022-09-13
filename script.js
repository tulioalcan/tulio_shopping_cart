// Esse tipo de comentário que estão antes de todas as funções são chamados de JSdoc,
// experimente passar o mouse sobre o nome das funções e verá que elas possuem descrições! 

// Fique a vontade para modificar o código já escrito e criar suas próprias funções!

/**
 * Função responsável por criar e retornar o elemento de imagem do produto.
 * @param {string} imageSource - URL da imagem.
 * @returns {Element} Elemento de imagem do produto.
 */
const createProductImageElement = (imageSource) => {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
};

/**
 * Função responsável por criar e retornar qualquer elemento.
 * @param {string} element - Nome do elemento a ser criado.
 * @param {string} className - Classe do elemento.
 * @param {string} innerText - Texto do elemento.
 * @returns {Element} Elemento criado.
 */
const createCustomElement = (element, className, innerText) => {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
};

/**
 * Função responsável por criar e retornar o elemento do produto.
 * @param {Object} product - Objeto do produto. 
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.thumbnail - URL da imagem do produto.
 * @returns {Element} Elemento de produto.
 */
const cartItemClickListener = (event) => {
  event.target.remove();
  const items = getSavedCartItems();
  console.log(items);
  const getID = event.target.innerText.split(' ')[1];
  console.log(getID);
  const getItemIndex = items.findIndex((item) => item.id === getID)
  console.log(getItemIndex);
  const newLocalStorage = items.filter((_item, index) => {
    return index !== getItemIndex;
  })
  console.log(newLocalStorage);
  saveCartItems(newLocalStorage);
}

 const createCartItemElement = ({ id, title, price }) => {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `ID: ${id} | TITLE: ${title} | PRICE: $${price}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
};

const addCartItem = async (event) => {
  const productID = event.target.parentElement.querySelector('span.item_id').innerText;  
  const response = await fetchItem(productID);
  const cart = document.querySelector('.cart__items');
  const { id, title, price } = response;

  const cartItemLi = createCartItemElement({ id, title, price });
  
  cart.appendChild(cartItemLi);
  const savedItems = getSavedCartItems();
  savedItems.push({ id, title, price });
  saveCartItems(savedItems); 
};

  const createProductItemElement = ({ id, title, thumbnail }) => {
  const section = document.createElement('section');
  section.className = 'item';

  const addButton = createCustomElement('button', 'item__add', 'Adicionar ao carrinho!');
  addButton.addEventListener('click', addCartItem);

  section.appendChild(createCustomElement('span', 'item_id', id));
  section.appendChild(createCustomElement('span', 'item__title', title));
  section.appendChild(createProductImageElement(thumbnail));
  section.appendChild(addButton);

  return section;
};

/**
 * Função que recupera o ID do produto passado como parâmetro.
 * @param {Element} product - Elemento do produto.
 * @returns {string} ID do produto.
 */
const getIdFromProductItem = (product) => product.querySelector('span.id').innerText;

/**
 * Função responsável por criar e retornar um item do carrinho.
 * @param {Object} product - Objeto do produto.
 * @param {string} product.id - ID do produto.
 * @param {string} product.title - Título do produto.
 * @param {string} product.price - Preço do produto.
 * @returns {Element} Elemento de um item do carrinho.
 */

const novoItem = async () => {
  const itens = document.querySelector('.items');
  const data = await fetchProducts('computador');
  data.results.forEach((product) => {
    itens.appendChild(createProductItemElement(product));
  });
};
novoItem();

const getFromLocalStorageOnLoad = () => {
  const productsCart = getSavedCartItems();
  if (productsCart) {
    productsCart.forEach(
      ({ id, title, price }) => (
        document.querySelector('.cart__items')
          .appendChild(createCartItemElement({ id, title, price }))
      ),
    );
  }
};


window.onload = () => {
  getFromLocalStorageOnLoad();
 };
