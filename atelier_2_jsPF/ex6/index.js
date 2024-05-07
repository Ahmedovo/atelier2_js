// Import the JSON file
const productsData = require('./products.json');

// Initialize an object to store product details by category
let table = {};

// Access each product object in the array
productsData.forEach((product, index) => {
  // Create an object to store product details
  let productDetails = {};
  productDetails['name'] = product.name;
  productDetails['price'] = product.price;
  productDetails['stock'] = product.stock;
  productDetails['category'] = product.category; // Adding category to productDetails
  
  // Check if the category exists in the table object
  if (!table[product.category]) {
    // If the category does not exist, create a new array for it
    table[product.category] = [];
  }
  
  // Add product details object to the corresponding category array
  table[product.category].push(productDetails);
});

// Function to populate the category filter select element
function populateCategoryFilter() {
  const categoryFilter = document.getElementById('categoryFilter');
  for (const category in table) {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  }
}

// Call the function to populate the category filter select element
populateCategoryFilter();

// Function to filter products by category
function filterProducts() {
  const categoryFilter = document.getElementById('categoryFilter').value;
  const productListDiv = document.getElementById('productList');
  productListDiv.innerHTML = ''; // Clear previous product list
  
  // Filter products based on selected category
  const filteredProducts = table[categoryFilter] || [];
  
  // Display filtered products
  filteredProducts.forEach((product, index) => {
    const productItem = document.createElement('div');
    productItem.innerHTML = `
      <p>Product ${index + 1}:</p>
      <p>Name: ${product.name}</p>
      <p>Price: ${product.price}</p>
      <p>Stock: ${product.stock}</p>
    `;
    productListDiv.appendChild(productItem);
  });
}

// Function to calculate total price of all products
function calculateTotalPrice() {
  let totalPrice = 0;
  
  // Iterate over each category
  for (const category in table) {
    // Iterate over each product in the category
    table[category].forEach((product) => {
      totalPrice += product.price * product.stock; // Multiply price by stock and add to total price
    });
  }
  
  console.log('Total Price:', totalPrice);
}

// Function to find low stock products
function findLowStockProducts() {
  const lowStockThreshold = 10; // Define the threshold for low stock
  const lowStockProducts = [];
  
  // Iterate over each category
  for (const category in table) {
    // Iterate over each product in the category
    table[category].forEach((product) => {
      if (product.stock < lowStockThreshold) {
        lowStockProducts.push(product); // Add low stock product to the list
      }
    });
  }
  
  console.log('Low Stock Products:', lowStockProducts);
}

// Function to sort products by price or stock
function sortProducts(property) {
  // Iterate over each category
  for (const category in table) {
    // Sort products in the category based on the specified property
    table[category].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  }
  
  console.log(`Products sorted by ${property}:`, table);
}
