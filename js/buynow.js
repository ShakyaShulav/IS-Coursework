document.addEventListener("DOMContentLoaded", function () {
  const buyNowButton = document.querySelector(".buy-now-btn");
  const popup = document.querySelector(".popup");
  const closePopup = document.querySelector(".close-popup");
  const overlay = document.querySelector(".overlay");

  buyNowButton.addEventListener("click", function () {
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
  });
});
