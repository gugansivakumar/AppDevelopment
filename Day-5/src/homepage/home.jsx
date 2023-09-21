// Home.js
import React from 'react';
import { useSelector } from 'react-redux';
import '../homepage/home.css';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Home() {
  // Get the featured products from the Redux store
  const featuredProducts = useSelector((state) => state.featuredProducts.products);

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li><a href="/home">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/deals">Deals</a></li>
          <li><a href="/account">Account</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Your Trusted Grocery Provider</h1>
          <p>Bringing quality products to your doorstep.</p>
        </div>
      </section>

      {/* Search bar */}
      <section className="search-bar">
        <div className="search-container">
          <input type="text" placeholder="Search for Groceries " />
          <button>Search</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Featured Products</h2>
        <div className="product-list">
          {featuredProducts.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.imageUrl} alt={product.name} className="st" />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <Link to={`/product/${product.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories */}
      <section className="product-categories">
        <h2>Grocery Categories</h2>
        <ul>
          <li><a href="/category1">Category 1</a></li>
          <li><a href="/category2">Category 2</a></li>
          <li><a href="/category3">Category 3</a></li>
          {/* Add more category links */}
        </ul>
      </section>

       

      {/* Contact Information Section */}
      <section className="contact-info">
        <h2>Contact Information</h2>
        <div className="info-item">
          <p><strong>Address:</strong> 13/4 New Street, City</p>
        </div>
        <div className="info-item">
          <p><strong>Phone:</strong> (123) 456-7890</p>
        </div>
        <div className="info-item">
          <p><strong>Email:</strong> xogrocery@example.com</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 Your Grocery Shop</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;