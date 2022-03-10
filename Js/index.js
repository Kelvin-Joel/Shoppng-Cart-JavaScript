import { OpenModalWindow, HideModalWindow } from './Modals.js'
import AddCartProduct from './AddCartProduct.js'
import ShowListProducts from './ShowListProducts.js';
import ShowListOfProductsAdded from './ShowListOfProductsAdded.js';
const total = document.getElementById("total");
const total__units = document.getElementById('total__units')
export let ShoppingCart = [];

/******************************************************** */
document.addEventListener("click", (e) => {
  AddCartProduct(e);
  deleteProduct(e);
  OpenModalWindow(e, ShowListOfProductsAdded);
  HideModalWindow(e);
  Increasequantity(e);
  Decreasequantity(e)
});

/********************************************************************** */
const Increasequantity = (e) => {
  if (e.target.classList.contains("cart__increaserButton")) {
    const idProduct = e.target.dataset.id;
    const ProductsNew = ShoppingCart.map(product => product.id === Number(idProduct) ? { ...product, quantity: product.quantity += 1 } : product)
    console.log(e.target.parentElement)
    ShoppingCart = ProductsNew
    ShowListOfProductsAdded();
    CalculateTotal();
    return;
  }
};

/**************************************************************************** */
const Decreasequantity = (e) => {
  if (e.target.classList.contains("cart__decreaseButton")) {
    const idProduct = e.target.dataset.id;

    const quantityValidation = ShoppingCart.find(product => product.id === Number(idProduct))

    if (quantityValidation.quantity !== 1) {
      const ProductsNew = ShoppingCart.map(product => product.id === parseInt(idProduct) ? { ...product, quantity: product.quantity -= 1 } : product)
      ShoppingCart = ProductsNew
      ShowListOfProductsAdded();
      CalculateTotal();
      return;
    }
  }
};

/*************************************************************************** */
export const CalculateTotal = () => {
  const TotalUnits = ShoppingCart.reduce((unit, product) => unit + product.quantity, 0)
  const TotalSales = ShoppingCart.reduce((quantity, product) => quantity + product.price * product.quantity, 0)
  total.textContent = `Total Sale Buy : ${TotalSales}`
  total__units.textContent = `Total Units : ${TotalUnits}`
}
/******************************************************************************* */
const deleteProduct = (e) => {
  if (e.target.classList.contains("cart_deleteBtn")) {
    let filter = ShoppingCart.filter(product => product.id !== Number(e.target.dataset.id))
    ShoppingCart = filter
    ShowListOfProductsAdded();
    CalculateTotal();
    return;
  }
};

export default CalculateTotal


