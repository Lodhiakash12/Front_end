import React, { useState, useEffect } from 'react';

const BakersNation = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Product data
  const products = [
    { id: 1, name: "Artisan Sourdough", price: "$6.95", category: "bread", image: "/api/placeholder/400/300" },
    { id: 2, name: "Multigrain Loaf", price: "$5.50", category: "bread", image: "/api/placeholder/400/300" },
    { id: 3, name: "French Baguette", price: "$3.95", category: "bread", image: "/api/placeholder/400/300" },
    { id: 4, name: "Butter Croissant", price: "$3.50", category: "pastry", image: "/api/placeholder/400/300" },
    { id: 5, name: "Apple Danish", price: "$4.25", category: "pastry", image: "/api/placeholder/400/300" },
    { id: 6, name: "Cinnamon Roll", price: "$4.50", category: "pastry", image: "/api/placeholder/400/300" },
    { id: 7, name: "Chocolate Fudge Cake", price: "$32.00", category: "cake", image: "/api/placeholder/400/300" },
    { id: 8, name: "New York Cheesecake", price: "$28.00", category: "cake", image: "/api/placeholder/400/300" },
    { id: 9, name: "Chocolate Chip Cookies", price: "$2.50", category: "cookie", image: "/api/placeholder/400/300" },
    { id: 10, name: "Assorted Macarons", price: "$12.00", category: "cookie", image: "/api/placeholder/400/300" }
  ];

  // Testimonials data
  const testimonials = [
    {
      text: "Baker's Nation has the best sourdough bread I've ever tasted! Their commitment to quality ingredients and traditional methods really shows in every bite. I'm a customer for life.",
      author: "Sarah Johnson",
      role: "Local Food Blogger"
    },
    {
      text: "I ordered a custom birthday cake for my daughter and it was absolutely perfect! Not only was it beautiful, but it tasted amazing. The team was so helpful throughout the ordering process too.",
      author: "Michael Rodriguez",
      role: "Happy Parent"
    },
    {
      text: "As someone with dietary restrictions, finding delicious baked goods can be challenging. Baker's Nation has amazing gluten-free options that don't compromise on taste. Their almond flour cookies are incredible!",
      author: "Emily Chen",
      role: "Loyal Customer"
    }
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Handle testimonial navigation
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Handle form submission
  const handleSubmit = () => {
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  // Smooth scrolling for navigation links
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Header */}
      <header className="fixed w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-bakers-primary">
                Baker's <span className="text-bakers-accent">Nation</span>
              </div>
            </div>
            
            <ul className={`md:flex space-x-8 ${mobileMenuOpen ? 'flex' : 'hidden'} md:block absolute md:relative top-full md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent flex-col md:flex-row items-center py-4 md:py-0 shadow-md md:shadow-none`}>
              <li><button onClick={() => scrollToSection('home')} className="bakers-nav-link font-semibold text-gray-800 hover:text-bakers-accent">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="bakers-nav-link font-semibold text-gray-800 hover:text-bakers-accent">About</button></li>
              <li><button onClick={() => scrollToSection('products')} className="bakers-nav-link font-semibold text-gray-800 hover:text-bakers-accent">Products</button></li>
              <li><button onClick={() => scrollToSection('testimonials')} className="bakers-nav-link font-semibold text-gray-800 hover:text-bakers-accent">Reviews</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="bakers-nav-link font-semibold text-gray-800 hover:text-bakers-accent">Contact</button></li>
            </ul>
            
            <button 
              className="md:hidden text-xl"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bakers-hero-bg text-white text-center py-48 pt-64">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow">Artisan Breads & Pastries</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Handcrafted with love, baked to perfection. Experience the taste of tradition with a modern twist.</p>
          <button 
            onClick={() => scrollToSection('products')} 
            className="bakers-btn-primary px-8 py-3 rounded-full font-semibold uppercase tracking-wide"
          >
            View Our Bakery
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img src="/api/placeholder/600/400" alt="Baker's Nation bakery interior" className="rounded-lg shadow-lg w-full" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold text-bakers-primary mb-6">Our Story</h2>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Founded in 2010, Baker's Nation began as a small family bakery with a passion for creating authentic, handcrafted bread. Our founder, Chef Maria, learned the art of baking from her grandmother, preserving traditional recipes while infusing them with contemporary flavors.
              </p>
              <p className="mb-6 text-gray-700 leading-relaxed">
                Today, we're proud to be a neighborhood favorite, serving our community with freshly baked goods made from locally sourced, organic ingredients. Every item that leaves our kitchen is crafted with care, expertise, and a commitment to quality that's been our hallmark for over a decade.
              </p>
              <p className="mb-8 text-gray-700 leading-relaxed">
                At Baker's Nation, we believe in the simple joy of breaking bread together. We're not just baking products; we're creating experiences, memories, and traditions that bring people together.
              </p>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bakers-btn-primary px-8 py-3 rounded-full font-semibold uppercase tracking-wide"
              >
                Visit Us Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-bakers-primary mb-12">Our Freshly Baked Goods</h2>
          
          <div className="flex justify-center mb-8 flex-wrap gap-2">
            {['all', 'bread', 'pastry', 'cake', 'cookie'].map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`bakers-category-btn px-6 py-2 font-semibold relative ${
                  activeCategory === category ? 'text-bakers-primary' : 'text-gray-600'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
                {activeCategory === category && category !== 'all' && 's'}
                {activeCategory === category && category === 'all' && ''}
              </button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bakers-product-card bg-white rounded-lg shadow-md overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-bakers-primary mb-2">{product.name}</h3>
                  <p className="text-bakers-accent font-bold text-lg mb-4">{product.price}</p>
                  <button className="bakers-btn-primary px-4 py-2 rounded-full font-semibold text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-bakers-primary mb-12">What Our Customers Say</h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="bakers-testimonial-slide">
              <p className="text-lg italic mb-8 text-gray-700">
                "{testimonials[activeTestimonial].text}"
              </p>
              <h4 className="font-semibold text-bakers-primary text-lg mb-2">
                {testimonials[activeTestimonial].author}
              </h4>
              <p className="text-gray-500">{testimonials[activeTestimonial].role}</p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-4">
              <button onClick={prevTestimonial} className="text-bakers-primary hover:text-bakers-accent text-2xl">
                <i className="fas fa-chevron-left"></i>
              </button>
              <button onClick={nextTestimonial} className="text-bakers-primary hover:text-bakers-accent text-2xl">
                <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-bakers-primary mb-6">Visit Our Bakery</h2>
              <p className="text-gray-700 mb-8">
                We'd love to see you in person! Stop by to experience the aroma of freshly baked goods and enjoy a warm treat in our cozy café area.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-bakers-primary text-xl mr-4"></i>
                  <div>
                    <p className="text-gray-700">123 Main Street<br />Bakeryville, CA 90210</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <i className="fas fa-phone text-bakers-primary text-xl mr-4"></i>
                  <div>
                    <p className="text-gray-700">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <i className="fas fa-envelope text-bakers-primary text-xl mr-4"></i>
                  <div>
                    <p className="text-gray-700">info@bakersnation.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-bakers-primary mb-4">Hours of Operation</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-bakers-primary mb-6">Send Us a Message</h3>
              <div className="space-y-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bakers-primary"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bakers-primary"
                />
                <input
                  type="tel"
                  placeholder="Your Phone (optional)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bakers-primary"
                />
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-bakers-primary resize-vertical"
                />
                <button
                  onClick={handleSubmit}
                  className="bakers-btn-primary px-8 py-3 rounded-full font-semibold uppercase tracking-wide"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
          
          <div className="mt-16 rounded-lg overflow-hidden shadow-lg">
            <img src="/api/placeholder/1200/400" alt="Map to Baker's Nation location" className="w-full h-96 object-cover" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bakers-footer-bg text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Baker's Nation</h3>
              <p className="text-gray-300 mb-6">
                Artisan bakery committed to quality, tradition, and bringing joy through the simple pleasure of freshly baked goods.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bakers-social-icon w-10 h-10 rounded-full flex items-center justify-center">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="bakers-social-icon w-10 h-10 rounded-full flex items-center justify-center">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="bakers-social-icon w-10 h-10 rounded-full flex items-center justify-center">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-white">Home</button></li>
                <li><button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-white">About</button></li>
                <li><button onClick={() => scrollToSection('products')} className="text-gray-300 hover:text-white">Products</button></li>
                <li><button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-white">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-300">
                <li>123 Main Street</li>
                <li>Bakeryville, CA 90210</li>
                <li>(555) 123-4567</li>
                <li>info@bakersnation.com</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-300 mb-4">Subscribe for updates and special offers</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 p-2 rounded-l-lg border-none focus:outline-none text-gray-800"
                />
                <button className="bg-bakers-accent px-4 py-2 rounded-r-lg hover:bg-bakers-primary transition-colors">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Baker's Nation. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* CSS Styles */}
      <style>{`
        .bakers-primary {
          color: #8d4925;
        }
        
        .bg-bakers-primary {
          background-color: #8d4925;
        }
        
        .bakers-secondary {
          color: #f3cea2;
        }
        
        .bg-bakers-secondary {
          background-color: #f3cea2;
        }
        
        .bakers-accent {
          color: #e27d5f;
        }
        
        .bg-bakers-accent {
          background-color: #e27d5f;
        }
        
        .bakers-light {
          color: #fdf6ec;
        }
        
        .bg-bakers-light {
          background-color: #fdf6ec;
        }
        
        .bakers-dark {
          color: #3d2314;
        }
        
        .bg-bakers-dark {
          background-color: #3d2314;
        }
        
        .border-bakers-accent {
          border-color: #e27d5f;
        }
        
        .bakers-hero-bg {
          background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/api/placeholder/1200/600') center/cover no-repeat;
        }
        
        .bakers-footer-bg {
          background-color: #3d2314;
        }
        
        .bakers-btn-primary {
          background: #8d4925;
          color: white;
          transition: all 0.3s ease;
        }
        
        .bakers-btn-primary:hover {
          background: #e27d5f;
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .bakers-product-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .bakers-product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .bakers-nav-link {
          position: relative;
        }
        
        .bakers-nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          background: #e27d5f;
          bottom: -5px;
          left: 0;
          transition: width 0.3s ease;
        }
        
        .bakers-nav-link:hover::after {
          width: 100%;
        }
        
        .bakers-category-btn.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 50%;
          transform: translateX(-50%);
          width: 30px;
          height: 3px;
          background-color: #e27d5f;
        }
        
        .bakers-testimonial-slide {
          animation: bakers-fadeIn 0.5s ease-in-out;
        }
        
        @keyframes bakers-fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .bakers-social-icon {
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease;
        }
        
        .bakers-social-icon:hover {
          background-color: #e27d5f;
          transform: translateY(-3px);
        }
        
        .text-shadow {
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default BakersNation;