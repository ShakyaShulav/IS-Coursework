"use strict";

// Global cart array (Resets on page reload)
let cart = [];

// Function to add an item to the cart
function addToCart(brand, model, price) {
  let existingItem = cart.find((item) => item.model === model);
  if (existingItem) {
    existingItem.quantity += 1; // Increase quantity
  } else {
    cart.push({ brand, model, price, quantity: 1 });
  }

  // updateCartCount();
  updateCartOverlay();
  alert(`${model} added to cart!`);
}

// Function to update the cart count in the navbar
// function updateCartCount() {
//     let count = cart.reduce((total, item) => total + item.quantity, 0);
//     let cartCountElement = document.getElementById("cart-count");

//     if (cartCountElement) {
//         cartCountElement.textContent = count;
//     }
// }

// Function to update the cart overlay display
function updateCartOverlay() {
  let cartItemsDiv = document.querySelector(".cart-items");
  let totalPriceDiv = document.getElementById("cart-total");

  if (!cartItemsDiv) return;

  cartItemsDiv.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Cart is empty.</p>";
    totalPriceDiv.innerHTML = "0.00 Rs";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.quantity;
    cartItemsDiv.innerHTML += `
            <div class="cart-item">
              <p>(${item.quantity}x)${item.brand} ${item.model}</p>
              <div class="mr">
              Rs. ${item.price}<button onclick = "removeFromCart(${index})"><i class="fa-solid fa-times"></i></button>
              </div>
            </div>
        `;
  });

  totalPriceDiv.innerHTML = "Rs " + total;
}

// Function to remove an item from the cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartOverlay();
  // updateCartCount();
}

// Function to clear the cart
function clearCart() {
  cart = [];
  updateCartOverlay();
  // updateCartCount();
}

// Function to handle checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }
  alert("Proceeding to checkout...");
  clearCart();
}

// Attach event listeners to Add to Cart divs
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".add-to-cart").forEach((div) => {
    div.addEventListener("click", function (event) {
      let brand = this.getAttribute("data-brand");
      let model = this.getAttribute("data-model");
      let price = parseInt(this.getAttribute("data-price"));

      addToCart(brand, model, price);
    });
  });

  document.querySelectorAll(".add-to-cart-btn").forEach((button) => {
    button.addEventListener("click", function (event) {
      let brand = this.getAttribute("data-brand");
      let model = this.getAttribute("data-model");
      let price = parseInt(this.getAttribute("data-price"));

      addToCart(brand, model, price);
    });
  });

  // updateCartCount();
});
