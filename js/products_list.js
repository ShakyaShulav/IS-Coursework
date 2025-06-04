"use strict"; //  strict mode for better error handling

// Array containing details of various watches
const products = [
  {
    brand: "Rolex",
    model: "EXPLORER II WHITE",
    image: "/images/Ghadi/rolex/ExploreIIwhite.jpg",
    price: 29000,
    rating: 5,
    category: "Men",
    link: "/html/single_product_pages/explorerII.html",
  },
  {
    brand: "Casio",
    model: "AE 1000W",
    image: "/images/Ghadi/casio/AE1000W.jpg",
    price: 4900,
    rating: 4,
    category: "Men",
    link: "/html/single_product_pages/ae1000w.html",
  },
  {
    brand: "Bulova",
    model: "CLASSIC DIAMOND",
    image: "/images/Ghadi/bulova/Classicdiamond.jpg",
    price: 8900,
    rating: 4,
    category: "Men",
    link: "/html/single_product_pages/classicdiamond.html",
  },
  {
    brand: "Titan",
    model: "QUARTZ MULTIFUNCTION WATCH",
    image: "/images/Ghadi/titan/quartzmultifunction.jpg",
    price: 19000,
    rating: 4,
    category: "Men",
    link: "/html/single_product_pages/quartzmultifunction.html",
  },
  {
    brand: "Carlton",
    model: "LONDON SILVER QUARTZ WATCH",
    image: "/images/womens watch resize/carltonlondonsilverquartz.jpg",
    price: 5999,
    rating: 5,
    category: "Women",
    link: "/html/single_product_pages/londonsilverquartz.html",
  },
  {
    brand: "Fast Track",
    model: "FLEEK EXCELLENCE WATCH",
    image: "/images/womens watch resize/fastrackfleek.jpg",
    price: 8999,
    rating: 4,
    category: "Women",
    link: "/html/single_product_pages/fleekexcellence.html",
  },
  {
    brand: "Fast Track",
    model: "VYB QUARTZ WATCH",
    image: "/images/womens watch resize/fastrackvybquartz.jpg",
    price: 4999,
    rating: 3,
    category: "Women",
    link: "/html/single_product_pages/vybquartz.html",
  },
  {
    brand: "Louis Devin",
    model: "MESH BLUE WATCH",
    image: "/images/womens watch resize/louisdevinmeshblue.jpg",
    price: 10999,
    rating: 4,
    category: "Women",
    link: "/html/single_product_pages/meshblue.html",
  },
  {
    brand: "Matrix",
    model: "CAPTAIN AMERICA WATCH",
    image: "/images/kids watch resize/matrixcaptain.jpg",
    price: 1999,
    rating: 4,
    category: "Kids",
    link: "/html/single_product_pages/captainamerica.html",
  },
  {
    brand: "Matrix",
    model: "ELSA WATCH",
    image: "/images/kids watch resize/matrixelsa.jpg",
    price: 1699,
    rating: 4,
    category: "Kids",
    link: "/html/single_product_pages/elsa.html",
  },
  {
    brand: "Matrix",
    model: "HELLO KITTY WATCH",
    image: "/images/kids watch resize/matrixhellokitty.jpg",
    price: 1999,
    rating: 4,
    category: "Kids",
    link: "/html/single_product_pages/hellokitty.html",
  },
  {
    brand: "Matrix",
    model: "CARTOON KIDS WATCH",
    image: "/images/kids watch resize/matrixkids.jpg",
    price: 1899,
    rating: 4,
    category: "Kids",
    link: "/html/single_product_pages/cartoonkids.html",
  },
  {
    brand: "Titan",
    model: "WORK WEAR GREEN WATCH",
    image: "/images/Ghadi/titan/workweargreen.jpg",
    price: 6500,
    rating: 3,
    category: "Men",
    link: "/html/single_product_pages/workweargreen.html",
  },
  {
    brand: "Rolex",
    model: "DEEP SEA BLACK",
    image: "/images/Ghadi/rolex/Deepseablack.jpg",
    price: 19999,
    rating: 4,
    category: "Men",
    link: "/html/single_product_pages/deepseablack.html",
  },
  {
    brand: "Bulova",
    model: "CLASSIC QUARTZ WATCH",
    image: "/images/Ghadi/bulova/classicquartz.jpg",
    price: 5000,
    rating: 4,
    category: "Men",
    link: "/html/single_product_pages/classicquartz.html",
  },
  {
    brand: "Casio",
    model: "AE 1200 WH",
    image: "/images/Ghadi/casio/AE1200WH.jpg",
    price: 4999,
    rating: 4,
    category: "Men",
    link: "/html/single_product_pages/ae1200wh.html",
  },
  {
    brand: "Louis Devin",
    model: "ROSE GOLD WATCH",
    image: "/images/womens watch resize/louisdevinrosegold.jpg",
    price: 7999,
    rating: 3,
    category: "Women",
    link: "/html/single_product_pages/rosegold.html",
  },
  {
    brand: "Titan",
    model: "KARISHMA REVIVE WATCH",
    image: "/images/womens watch resize/titankarishmarevive.jpg",
    price: 9999,
    rating: 4,
    category: "Women",
    link: "/html/single_product_pages/karishmarevive.html",
  },
  {
    brand: "Titan",
    model: "LAGAN CHIC WATCH",
    image: "/images/womens watch resize/titanlaganchic.jpg",
    price: 8999,
    rating: 3,
    category: "Women",
    link: "/html/single_product_pages/laganchic.html",
  },
  {
    brand: "Titan",
    model: "NEO LEATHER WATCH",
    image: "/images/womens watch resize/titanneoleather.jpg",
    price: 7499,
    rating: 4,
    category: "Women",
    link: "/html/single_product_pages/neoleather.html",
  },
  {
    brand: "Selloria",
    model: "DORA THE EXPLORER WATCH",
    image: "/images/kids watch resize/selloriadora.jpg",
    price: 2999,
    rating: 4,
    category: "Kids",
    link: "/html/single_product_pages/dora.html",
  },
  {
    brand: "Selloria",
    model: "SPIDERMAN WATCH",
    image: "/images/kids watch resize/selloriaspiderman.jpg",
    price: 2499,
    rating: 4,
    category: "Kids",
    link: "/html/single_product_pages/spiderman.html",
  },
  {
    brand: "Shock N Shop",
    model: "BEN 10 WATCH",
    image: "/images/kids watch resize/shocknshopben.jpg",
    price: 1999,
    rating: 4,
    category: "Kids",
    link: "/html/single_product_pages/ben10.html",
  },
  {
    brand: "Spiky",
    model: "DIGITAL KIDS WATCH",
    image: "/images/kids watch resize/spikydigital.jpg",
    price: 2999,
    rating: 4,
    category: "Kids",
    link: "/html/single_product_pages/digitalkids.html",
  },
  {
    brand: "Titan",
    model: "TIMELESS STYLE",
    image: "/images/Ghadi/titan/timelessstyle.jpg",
    price: 3999,
    rating: 3,
    category: "Men",
    link: "/html/single_product_pages/timelessstyle.html",
  },
  {
    brand: "Rolex",
    model: "AIR KING BLACK",
    image: "/images/Ghadi/rolex/Airkingblack.jpg",
    price: 24999,
    rating: 3,
    category: "Men",
    link: "/html/single_product_pages/airkingblack.html",
  },
  {
    brand: "Rolex",
    model: "DATEJUST 41 BLUE",
    image: "/images/Ghadi/rolex/Datejust41blue.jpg",
    price: 15999,
    rating: 5,
    category: "Men",
    link: "/html/single_product_pages/datejust41blue.html",
  },
  {
    brand: "Bulova",
    model: "CRYSTAL PHANTOM",
    image: "/images/Ghadi/bulova/Crystalphantom.jpg",
    price: 8999,
    rating: 4,
    category: "Men",
    link: "/html/single_product_pages/crystalphantom.html",
  },
  {
    brand: "Bulova",
    model: "MARINE STAR",
    image: "/images/Ghadi/bulova/marinestarfront.jpg",
    price: 5999,
    rating: 4,
    category: "Men",
    link: "/html/single_product_pages/marinestar.html",
  },
  {
    brand: "Casio",
    model: "CA 53W",
    image: "/images/Ghadi/casio/CA53W1.jpg",
    price: 2999,
    rating: 4,
    category: "Men",
    link: "/html/single_product_pages/ca53w.html",
  },
  {
    brand: "Casio",
    model: "AE 2000W",
    image: "/images/Ghadi/casio/AE2000W.jpg",
    price: 3999,
    rating: 3,
    category: "Men",
    link: "/html/single_product_pages/ae2000w.html",
  },
  {
    brand: "Titan",
    model: "GRANDMASTER BROWN",
    image: "/images/Ghadi/titan/grandmasterbrown1.jpg",
    price: 2999.25,
    rating: 4,
    category: "Men",
    link: "/html/single_product_pages/grandmasterbrown.html",
  },
  // More product objects can be added here...
];

// Get references to necessary DOM elements
const target = document.getElementById("all-products"); // Container for displaying products
const searchInput = document.getElementById("searchInput"); // Search bar input field
const autocomplete = document.getElementById("autocomplete"); // Autocomplete dropdown
const filterForm = document.getElementById("filter-form"); // Form for filtering products
const sortSelect = document.getElementById("sort-option-box"); // Dropdown for sorting options

// Retrieve search query from the URL parameters (if any)
const urlParams = new URLSearchParams(window.location.search);
const searchParams = urlParams.get("search");

// Function to display products dynamically
const showProducts = (data) => {
  target.innerHTML = ""; // Clear existing product list

  data.forEach((product) => {
    let stars = "";

    // Generate star ratings dynamically based on the product rating
    for (let i = 0; i < 5; i++) {
      stars +=
        i < product.rating
          ? '<i class="fas fa-star"></i>'
          : '<i class="far fa-star"></i>';
    }
    if (product.model == "GRANDMASTER BROWN") {
      // Create the product card structure with image, brand, model, price, and cart option
      let html = `<article class="product-pro ${product.category}">
                  <a href="${product.link} " style = " text-decoration:none; color:inherit;" >
                  <img src="${product.image}" alt="${product.model}"/>
                  <div class="des" >
                    <span>${product.brand}</span>
                    <h5>${product.model}</h5>
                    <div class="star">${stars}</div>
                    </div>
                    </a>
                    <div class="price-cart">
                      <div class="price"> <strike style=" color:  rgba(0,0,0,0.4); font-size:14px;">Rs.3999</strike>  Rs.${product.price}</div>
                      <div class="cart add-to-cart" data-brand = "${product.brand}" data-model="${product.model}" data-price="${product.price}">Add To Cart</div>
                    </div>
                </article>`;

      // Create a new div element, insert the product card, and append it to the DOM
      const productDiv = document.createElement("div");
      productDiv.innerHTML = html;
      target.appendChild(productDiv);
    } else if (product.model == "AE 1000W") {
      // Create the product card structure with image, brand, model, price, and cart option
      let html = `<article class="product-pro ${product.category}">
                  <a href="${product.link} " style = " text-decoration:none; color:inherit;" >
                  <img src="${product.image}" alt="${product.model}"/>
                  <div class="des" >
                    <span>${product.brand}</span>
                    <h5>${product.model}</h5>
                    <div class="star">${stars}</div>
                    </div>
                    </a>
                    <div class="price-cart">
                      <div class="price"><strike style=" color:  rgba(0,0,0,0.4); font-size:14px;">Rs.6665</strike>  Rs.${product.price}</div>
                      <div class="cart add-to-cart" data-brand = "${product.brand}" data-model="${product.model}" data-price="${product.price}">Add To Cart</div>
                    </div>
                </article>`;

      // Create a new div element, insert the product card, and append it to the DOM
      const productDiv = document.createElement("div");
      productDiv.innerHTML = html;
      target.appendChild(productDiv);
    } else if (product.model == "EXPLORER II WHITE") {
      // Create the product card structure with image, brand, model, price, and cart option
      let html = `<article class="product-pro ${product.category}">
                  <a href="${product.link} " style = " text-decoration:none; color:inherit;" >
                  <img src="${product.image}" alt="${product.model}"/>
                  <div class="des" >
                    <span>${product.brand}</span>
                    <h5>${product.model}</h5>
                    <div class="star">${stars}</div>
                    </div>
                    </a>
                    <div class="price-cart">
                      <div class="price"><strike style=" color:  rgba(0,0,0,0.4); font-size:14px;"> Rs.38,666</strike>  Rs.${product.price}</div>
                      <div class="cart add-to-cart" data-brand = "${product.brand}" data-model="${product.model}" data-price="${product.price}">Add To Cart</div>
                    </div>
                </article>`;

      // Create a new div element, insert the product card, and append it to the DOM
      const productDiv = document.createElement("div");
      productDiv.innerHTML = html;
      target.appendChild(productDiv);
    } else if (product.model == "CRYSTAL PHANTOM") {
      // Create the product card structure with image, brand, model, price, and cart option
      let html = `<article class="product-pro ${product.category}">
                  <a href="${product.link} " style = " text-decoration:none; color:inherit;" >
                  <img src="${product.image}" alt="${product.model}"/>
                  <div class="des" >
                    <span>${product.brand}</span>
                    <h5>${product.model}</h5>
                    <div class="star">${stars}</div>
                    </div>
                    </a>
                    <div class="price-cart">
                      <div class="price"><strike style=" color:  rgba(0,0,0,0.4); font-size:14px;">Rs.12,000</strike>  Rs.${product.price}</div>
                      <div class="cart add-to-cart" data-brand = "${product.brand}" data-model="${product.model}" data-price="${product.price}">Add To Cart</div>
                    </div>
                </article>`;

      // Create a new div element, insert the product card, and append it to the DOM
      const productDiv = document.createElement("div");
      productDiv.innerHTML = html;
      target.appendChild(productDiv);
    } else if (product.model == "CA 53W") {
      // Create the product card structure with image, brand, model, price, and cart option
      let html = `<article class="product-pro ${product.category}">
                  <a href="${product.link} " style = " text-decoration:none; color:inherit;" >
                  <img src="${product.image}" alt="${product.model}"/>
                  <div class="des" >
                    <span>${product.brand}</span>
                    <h5>${product.model}</h5>
                    <div class="star">${stars}</div>
                    </div>
                    </a>
                    <div class="price-cart">
                      <div class="price"><strike style=" color:  rgba(0,0,0,0.4); font-size:14px;">Rs.12,000</strike>  Rs.${product.price}</div>
                      <div class="cart add-to-cart" data-brand = "${product.brand}" data-model="${product.model}" data-price="${product.price}">Add To Cart</div>
                    </div>
                </article>`;

      // Create a new div element, insert the product card, and append it to the DOM
      const productDiv = document.createElement("div");
      productDiv.innerHTML = html;
      target.appendChild(productDiv);
    } else if (product.model == "MARINE STAR") {
      // Create the product card structure with image, brand, model, price, and cart option
      let html = `<article class="product-pro ${product.category}">
                  <a href="${product.link} " style = " text-decoration:none; color:inherit;" >
                  <img src="${product.image}" alt="${product.model}"/>
                  <div class="des" >
                    <span>${product.brand}</span>
                    <h5>${product.model}</h5>
                    <div class="star">${stars}</div>
                    </div>
                    </a>
                    <div class="price-cart">
                      <div class="price"><strike style=" color:  rgba(0,0,0,0.4); font-size:14px;">Rs.8,000</strike>  Rs.${product.price}</div>
                      <div class="cart add-to-cart" data-brand = "${product.brand}" data-model="${product.model}" data-price="${product.price}">Add To Cart</div>
                    </div>
                </article>`;

      // Create a new div element, insert the product card, and append it to the DOM
      const productDiv = document.createElement("div");
      productDiv.innerHTML = html;
      target.appendChild(productDiv);
    } else if (product.model == "DATEJUST 41 BLUE") {
      // Create the product card structure with image, brand, model, price, and cart option
      let html = `<article class="product-pro ${product.category}">
                  <a href="${product.link} " style = " text-decoration:none; color:inherit;" >
                  <img src="${product.image}" alt="${product.model}"/>
                  <div class="des" >
                    <span>${product.brand}</span>
                    <h5>${product.model}</h5>
                    <div class="star">${stars}</div>
                    </div>
                    </a>
                    <div class="price-cart">
                      <div class="price"><strike style=" color:  rgba(0,0,0,0.4); font-size:14px;">Rs.21,322</strike>  Rs.${product.price}</div>
                      <div class="cart add-to-cart" data-brand = "${product.brand}" data-model="${product.model}" data-price="${product.price}">Add To Cart</div>
                    </div>
                </article>`;

      // Create a new div element, insert the product card, and append it to the DOM
      const productDiv = document.createElement("div");
      productDiv.innerHTML = html;
      target.appendChild(productDiv);
    } else if (product.model == "TIMELESS STYLE") {
      // Create the product card structure with image, brand, model, price, and cart option
      let html = `<article class="product-pro ${product.category}">
                  <a href="${product.link} " style = " text-decoration:none; color:inherit;" >
                  <img src="${product.image}" alt="${product.model}"/>
                  <div class="des" >
                    <span>${product.brand}</span>
                    <h5>${product.model}</h5>
                    <div class="star">${stars}</div>
                    </div>
                    </a>
                    <div class="price-cart">
                      <div class="price"><strike style=" color:  rgba(0,0,0,0.4); font-size:14px;">Rs.5,332</strike>  Rs.${product.price}</div>
                      <div class="cart add-to-cart" data-brand = "${product.brand}" data-model="${product.model}" data-price="${product.price}">Add To Cart</div>
                    </div>
                </article>`;

      // Create a new div element, insert the product card, and append it to the DOM
      const productDiv = document.createElement("div");
      productDiv.innerHTML = html;
      target.appendChild(productDiv);
    } else {
      // Create the product card structure with image, brand, model, price, and cart option
      let html = ` <article class="product-pro ${product.category}">
                  <a href="${product.link} " style = " text-decoration:none; color:inherit;" >
                  <img src="${product.image}" alt="${product.model}"/>
                  <div class="des" >
                    <span>${product.brand}</span>
                    <h5>${product.model}</h5>
                    <div class="star">${stars}</div>
                    </div>
                    </a>
                    <div class="price-cart">
                      <div class="price">Rs. ${product.price}</div>
                      <div class="cart add-to-cart" data-brand = "${product.brand}" data-model="${product.model}" data-price="${product.price}">Add To Cart</div>
                    </div>
                </article>`;

      // Create a new div element, insert the product card, and append it to the DOM
      const productDiv = document.createElement("div");
      productDiv.innerHTML = html;
      target.appendChild(productDiv);
    }
  });
};

// Perform product search if a search query exists in the URL
if (searchParams) {
  searchInput.value = searchParams;
  const filteredProducts = products.filter(
    (product) =>
      product.brand.toLowerCase().includes(searchParams.toLowerCase()) ||
      product.model.toLowerCase().includes(searchParams.toLowerCase())
  );

  if (filteredProducts.length === 0) {
    target.innerHTML = "<p class='no-results'>No products found...</p>"; // Display message if no products match
  }

  showProducts(filteredProducts);
} else {
  showProducts(products); // Show all products if no search query is present
}

// Handle autocomplete suggestions for search input
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  autocomplete.innerHTML = ""; // Clear previous suggestions

  if (query) {
    const filteredItems = products.filter(
      (product) =>
        product.brand.toLowerCase().includes(query) ||
        product.model.toLowerCase().includes(query)
    );

    if (filteredItems.length > 0) {
      filteredItems.forEach((item) => {
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `
          <img src="${item.image}" alt="${item.model}" />
          <span>${item.model} (${item.brand})</span>
        `;

        // Set search input to the selected item when clicked
        div.addEventListener("click", () => {
          searchInput.value = item.model;
          autocomplete.innerHTML = "";
          autocomplete.style.display = "none";
        });

        autocomplete.appendChild(div);
      });

      autocomplete.style.display = "block"; // Show autocomplete dropdown
    } else {
      autocomplete.style.display = "none"; // Hide autocomplete if no matches
    }
  } else {
    autocomplete.style.display = "none"; // Hide autocomplete if input is empty
  }
});

// Hide autocomplete dropdown when clicking outside the search bar
document.addEventListener("click", (event) => {
  if (!event.target.closest(".searchbar")) {
    autocomplete.style.display = "none";
  }
});

// Handle product filtering based on selected brand and category
filterForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  const formData = new FormData(filterForm);
  let brandQueries = formData.getAll("brand[]"); // Get selected brands
  let categoryQueries = formData.getAll("category[]"); // Get selected categories

  // Filter products based on selected brand and category
  const filteredProducts = products.filter((product) => {
    if (brandQueries.length > 0 && categoryQueries.length > 0) {
      return (
        brandQueries.includes(product.brand) &&
        categoryQueries.includes(product.category)
      );
    } else if (brandQueries.length > 0) {
      return brandQueries.includes(product.brand);
    } else if (categoryQueries.length > 0) {
      return categoryQueries.includes(product.category);
    }
    return true; // Return all products if no filter is applied
  });

  if (filteredProducts.length === 0) {
    target.innerHTML = "<p class='no-results'>No products found...</p>";
  } else {
    const sorting = sortSelect.value;
    const sortedProducts = sortProducts(sorting, filteredProducts);
    showProducts(sortedProducts);
  }
});

// Handle sorting of products when selection changes
sortSelect.addEventListener("change", () => {
  const sorting = sortSelect.value;

  const formData = new FormData(filterForm);
  let brandQueries = formData.getAll("brand[]");
  let categoryQueries = formData.getAll("category[]");

  // Apply sorting to the currently filtered product list
  const filteredProducts = products.filter((product) => {
    if (brandQueries.length > 0 && categoryQueries.length > 0) {
      return (
        brandQueries.includes(product.brand) &&
        categoryQueries.includes(product.category)
      );
    } else if (brandQueries.length > 0) {
      return brandQueries.includes(product.brand);
    } else if (categoryQueries.length > 0) {
      return categoryQueries.includes(product.category);
    }
    return true;
  });

  const sortedProducts = sortProducts(sorting, filteredProducts);
  showProducts(sortedProducts);
});

// Function to sort products by name (A-Z) or price (low to high, high to low)
const sortProducts = (sorting, products) => {
  let sortedProducts = products.slice(); // Clone array to prevent modifying original data

  if (sorting === "a-z") {
    sortedProducts.sort((a, b) => a.model.localeCompare(b.model)); // Sort alphabetically by model name
  } else if (sorting === "low-high") {
    sortedProducts.sort((a, b) => a.price - b.price); // Sort by price (ascending)
  } else if (sorting === "high-low") {
    sortedProducts.sort((a, b) => b.price - a.price); // Sort by price (descending)
  }

  return sortedProducts;
};
