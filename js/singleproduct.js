// Select all images inside the hover container
const allHoverImages = document.querySelectorAll(".hover-container div img");

// Select the main image container
const imgContainer = document.querySelector(".img-container");

// Set the first hover image as active when the page loads
window.addEventListener("DOMContentLoaded", () => {
  allHoverImages[0].parentElement.classList.add("active");
});

// Loop through each hover image and add event listeners
allHoverImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    // Change the main image source to the hovered image
    imgContainer.querySelector("img").src = image.src;

    // Remove the active class from all images
    resetActiveImg();
    image.parentElement.classList.add("active");
  });
});

// Function to remove 'active' class from all hover images
function resetActiveImg() {
  allHoverImages.forEach((img) => {
    img.parentElement.classList.remove("active");
  });
}
