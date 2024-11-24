import React, { useRef } from 'react';
import './LandingPage.css'; 
import womensClothingImage from './womencloth.jpg';
import footwearImage from './footwear.jpg';
import accessoriesImage from './accessories.jpg';

const LandingPage = () => {
  // Create refs for each section
  const homeRef = useRef(null);
  const categoriesRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a specific section
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const categories = [
    { name: "Women's Clothing", img: womensClothingImage },
    { name: "Footwear", img: footwearImage },
    { name: "Accessories", img: accessoriesImage },
  ];

  const testimonials = [
    { quote: "Glamora has transformed my wardrobe!", author: "Jane D." },
    { quote: "I love the personalized recommendations!", author: "Sarah K." },
    { quote: "Quality products and great service!", author: "Mike L." },
  ];

  return (
    <div className="landing-page">
      {/* Header Section */}
      <header className="header">
        <div className="logo">Glamora</div>
        <nav>
          <ul>
            <li onClick={() => scrollToSection(homeRef)}>Home</li>
            <li onClick={() => scrollToSection(categoriesRef)}>Categories</li>
            <li onClick={() => scrollToSection(aboutRef)}>About Us</li>
            <li onClick={() => scrollToSection(contactRef)}>Contact</li>
          </ul>
        </nav>
        <div className="search-bar">
          <input type="text" placeholder="Search for trends or products." />
        </div>
        <div className="user-icons">
          <span>User</span>
          <span>Cart</span>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={homeRef} className="hero">
        <div className="hero-content">
          <h1>Discover Your Style, Tailored for You.</h1>
          <button className="cta-button">Shop Now</button>
          <button className="cta-button">Explore Personalized Picks</button>
        </div>
      </section>

      {/* Featured Categories */}
      <section ref={categoriesRef} className="featured-categories">
        <h2>Explore Our Collections</h2>
        <div className="grid">
          {categories.map((category, index) => (
            <div className="category" key={index}>
              <img src={category.img} alt={category.name} />
              <h3>{category.name}</h3>
              <button className="shop-button">Shop Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about-section">
        <h2>About Glamora</h2>
        <div className="about-content">
          <p>
            Glamora is a cutting-edge fashion platform dedicated to providing 
            personalized style experiences. Our mission is to help you discover 
            and express your unique fashion identity through innovative technology 
            and carefully curated collections.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact-section">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Email: support@glamora.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Fashion Street, Style City</p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </section>

      {/* Rest of the existing sections remain the same */}
      {/* Personalized Features Section */}
      <section className="personalized-features">
        <h2>Why Choose Glamora?</h2>
        <ul>
          <li>AI Personalization: Get recommendations that match your style, body type, and preferences.</li>
          <li>Vendor Transparency: Buy directly from verified vendors.</li>
          <li>Reviews: Quality assured with real user feedback.</li>
        </ul>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Hear From Our Customers</h2>
        <div className="quote-slider">
          {testimonials.map((testimonial, index) => (
            <div className="testimonial" key={index}>
              <p>"{testimonial.quote}"</p>
              <p>- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="newsletter-signup">
        <h2>Stay in the Loop!</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>
        <p>Get exclusive offers and style tips.</p>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#">About Us</a>
          <a href="#">FAQs</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
        <div className="social-media">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
        </div>
        <div className="contact-info">
          <p>Email: info@glamora.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;