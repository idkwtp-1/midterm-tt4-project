import './add-products.scss';

document.getElementById('addProductForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    const title = document.getElementById('productTitle').value;
    const description = document.getElementById('productDescription').value;
    const price = document.getElementById('productPrice').value;
    const quantity = document.getElementById('productQuantity').value;
  
    // Validate description length
    if (description.length > 100) {
      alert('Description must be 100 characters or less.');
      return;
    }
  
    // Display form data (for demonstration purposes)
    alert(`Product Added Successfully!\n
      Title: ${title}\n
      Description: ${description}\n
      Price: $${price}\n
      Quantity: ${quantity}`);
  
    // Clear the form (optional)
    document.getElementById('addProductForm').reset();
  });