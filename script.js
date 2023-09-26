// Ví dụ đơn giản: Sử dụng JavaScript để thêm sản phẩm vào giỏ hàng

const buyButtons = document.querySelectorAll(".buy-button");
const cart = document.querySelector(".cart");

buyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const product = button.parentElement;
    const productName = product.querySelector("h2").textContent;
    const productPrice = product.querySelector(".price").textContent;

    // Thêm sản phẩm vào giỏ hàng
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `<span>${productName}</span> - <span>${productPrice}</span>`;
    cart.appendChild(cartItem);
  });
});
