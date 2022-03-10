import { ShoppingCart, CalculateTotal } from "./index.js";
const navbar__quantity = document.getElementById('navbar__quantity')

export const AddCartProduct = (e) => {
  if (e.target.classList.contains("product__btn-add")) {
    let items = e.target.parentElement.children
    let idProduct = e.target.parentElement.dataset.id

    let ProductData = {
      id: parseInt(idProduct),
      image: items[0].src,
      name: items[1].textContent,
      price: parseInt(items[2].textContent),
      quantity: 1,
    };

    let isProduct = ShoppingCart.find(product => product.id === Number(ProductData.id) ? product.quantity += 1 : '')

    isProduct ? '' : ShoppingCart.push(ProductData)
    CalculateTotal();
    navbar__quantity.textContent = ShoppingCart.length
    return;
  }
};

export default AddCartProduct
