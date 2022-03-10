const cart = document.getElementById("cart");

export const OpenModalWindow = (e, AddProductTable) => {
  if (e.target.classList.contains("navbar__iconCart")) {
    cart.classList.remove("cart--hidden");
    AddProductTable();
    return;
  }
};

export const HideModalWindow = (e) => {
  if (e.target.classList.contains("cart__btnClose")) {
    cart.classList.add("cart--hidden");
    return;
  }
};
