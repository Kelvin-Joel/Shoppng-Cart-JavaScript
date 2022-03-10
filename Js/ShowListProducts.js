import products from "../Data/ProductDataList.js";

export const ShowListProducts = () => {
  let html = "";
  products.map((product) => {
    html += `
    <div class="products__card" data-id=${product.id}>
    <img src=${product.image} alt="" class="product__img" />
    <p class="product__name">${product.name}</p>
    <span class="product__price">${product.price}</span>
    <button class="product__btn-add">Add Cart</button>
  </div>
          `;
  });
  products__list.innerHTML = html;
};

export default ShowListProducts();