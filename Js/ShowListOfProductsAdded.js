import { ShoppingCart } from "./index.js";

export const ShowListOfProductsAdded = () => {
  let html = "";
  ShoppingCart.map((product) => {
    html += `
    <div class="cart__product">
    <img src=${product.image} alt="" class="cart__productImg" />
    <p class="cart__ProductName">${product.name}</p>
    <button class="cart__increaserButton btn" data-id=${product.id}>+</button>
    <span class="cart__productQuantity">${product.quantity}</span>
    <button class="cart__decreaseButton btn" data-id=${product.id}>-</button>
    <span class="cart__ProductPrice">${product.price}</span>
    <img
      src="https://img.icons8.com/plasticine/100/000000/filled-trash.png"
      class="cart_deleteBtn" data-id=${product.id}
    />
  </div>
          `;
  });
  cart__productsList.innerHTML = html;
};

export default ShowListOfProductsAdded