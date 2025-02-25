import './index.scss';

// Import images
import lighter from "./assets/images/lighter.jpg";
import camera1 from "./assets/images/camera-1.jpg";
import camera2 from "./assets/images/camera-2.jpg";
import keyboard from "./assets/images/keyboard.jpg";
import lens1 from "./assets/images/lens-1.jpg";
import lens2 from "./assets/images/lens-2.jpg";
import lens3 from "./assets/images/lens-3.jpg";
import makeup1 from "./assets/images/makeup-1.jpg";
import makeup2 from "./assets/images/makeup-2.jpg";
import makeup3 from "./assets/images/makeup-3.jpg";
import plant from "./assets/images/plant.jpg";
import vegie1 from "./assets/images/vegie-1.jpg";

document.addEventListener("DOMContentLoaded", () => {
  const productsContainer = document.getElementById('products');

  // Product data
  const products = [
    {
      name: 'Zippo Lighter',
      description: 'A classic windproof lighter with a durable metal casing. Perfect for outdoor adventures.',
      image: lighter,
      price: '$19.99',
      rating: 4.0
    },
    {
      name: 'DSLR Camera',
      description: 'Capture stunning photos with this high-resolution DSLR camera. Ideal for professional photographers.',
      image: camera1,
      price: '$599.99',
      rating: 4.5
    },
    {
      name: 'Mirrorless Camera',
      description: 'Compact and lightweight, this mirrorless camera delivers exceptional image quality.',
      image: camera2,
      price: '$799.99',
      rating: 5.0
    },
    {
      name: 'Mechanical Keyboard',
      description: 'A high-performance mechanical keyboard with RGB lighting for gamers and typists.',
      image: keyboard,
      price: '$89.99',
      rating: 4.5
    },
    {
      name: 'Wide-Angle Lens',
      description: 'Expand your photography with this wide-angle lens. Perfect for landscapes and architecture.',
      image: lens1,
      price: '$299.99',
      rating: 4.0
    },
    {
      name: 'Telephoto Lens',
      description: 'Capture distant subjects with this high-quality telephoto lens. Great for wildlife photography.',
      image: lens2,
      price: '$499.99',
      rating: 4.5
    },
    {
      name: 'Macro Lens',
      description: 'Explore the world of close-up photography with this versatile macro lens.',
      image: lens3,
      price: '$399.99',
      rating: 5.0
    },
    {
      name: 'Makeup Kit',
      description: 'A complete makeup kit with everything you need for a flawless look.',
      image: makeup1,
      price: '$49.99',
      rating: 4.0
    },
    {
      name: 'Lipstick Set',
      description: 'A set of 6 vibrant lipsticks to match any outfit or occasion.',
      image: makeup2,
      price: '$29.99',
      rating: 4.5
    },
    {
      name: 'Eyeshadow Palette',
      description: 'A versatile eyeshadow palette with 12 shades for day and night looks.',
      image: makeup3,
      price: '$34.99',
      rating: 5.0
    },
    {
      name: 'Indoor Plant',
      description: 'A beautiful indoor plant to brighten up your living space. Low maintenance and air-purifying.',
      image: plant,
      price: '$24.99',
      rating: 4.0
    },
    {
      name: 'Fresh Vegetables',
      description: 'A bundle of fresh, organic vegetables for a healthy and nutritious diet.',
      image: vegie1,
      price: '$14.99',
      rating: 4.5
    }
  ];

  // Function to generate rating stars
  function generateRatingStars(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    let stars = '';

    for (let i = 0; i < fullStars; i++) {
      stars += '<i class="bi bi-star-fill text-warning"></i>';
    }
    if (halfStar) {
      stars += '<i class="bi bi-star-half text-warning"></i>';
    }
    for (let i = 0; i < 5 - Math.ceil(rating); i++) {
      stars += '<i class="bi bi-star text-warning"></i>';
    }

    return stars;
  }

  // Generate product cards
  products.forEach(product => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // Image container
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('card-img-container');
    imgContainer.style.height = '200px';

    const img = document.createElement('img');
    img.classList.add('card-img-top');
    img.src = product.image;
    img.alt = product.name;
    img.style.objectFit = 'cover';
    img.style.height = '100%';
    img.style.width = '100%';

    imgContainer.appendChild(img);

    // Card body
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = product.name;

    const description = document.createElement('p');
    description.classList.add('card-text');
    description.textContent = product.description;

    const price = document.createElement('span');
    price.classList.add('h5', 'mb-0', 'price');
    price.textContent = product.price;

    const rating = document.createElement('div');
    rating.innerHTML = generateRatingStars(product.rating) + `<small class="text-muted">(${product.rating})</small>`;

    const priceRatingContainer = document.createElement('div');
    priceRatingContainer.classList.add('d-flex', 'justify-content-between', 'align-items-center');
    priceRatingContainer.appendChild(price);
    priceRatingContainer.appendChild(rating);

    cardBody.appendChild(title);
    cardBody.appendChild(description);
    cardBody.appendChild(priceRatingContainer);

    // Card footer
    const cardFooter = document.createElement('div');
    cardFooter.classList.add('card-footer', 'd-flex', 'justify-content-between');

    const addToCart = document.createElement('button');
    addToCart.classList.add('btn', 'btn-primary', 'btn-sm');
    addToCart.textContent = 'Add to Cart';

    const favorite = document.createElement('button');
    favorite.classList.add('btn', 'btn-outline-secondary', 'btn-sm');
    favorite.innerHTML = '<i class="bi bi-heart"></i>';
    favorite.setAttribute('aria-label', 'Add to Favorites');

    cardFooter.appendChild(addToCart);
    cardFooter.appendChild(favorite);

    // Append everything to the card
    cardDiv.appendChild(imgContainer);
    cardDiv.appendChild(cardBody);
    cardDiv.appendChild(cardFooter);

    productsContainer.appendChild(cardDiv);
  });
});