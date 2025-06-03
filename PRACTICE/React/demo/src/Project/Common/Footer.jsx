import React from 'react'

function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <div className="mb-4">
              <h4 className="fw-bold mb-3">
                <span className="text" style={{color:"orange"}}>Digital</span>Marketing
              </h4>
              <p className="text-muted mb-4" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                Lorem ipsum dolor sit, amet consectetur elit. Pellen tesque libero ut justo, ultrices in 
                ligula accusantium libero ut.
              </p>
              
              {/* Try It For Free Button */}
              <button className="btn btn-primary rounded-pill px-4 py-2 mb-4 shadow-hover" style={{ fontSize: '14px', transition: 'all 0.3s ease' }} 
                      onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                      onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                Try It For Free
              </button>
              
              {/* Social Media Icons */}
              <div className="d-flex gap-2">
                <a href="#" className="btn rounded-circle p-2 shadow-sm" 
                   style={{ 
                     width: '40px', 
                     height: '40px', 
                     backgroundColor: '#1877f2',
                     transition: 'all 0.3s ease' 
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.transform = 'scale(1.1)';
                     e.target.style.boxShadow = '0 4px 15px rgba(24, 119, 242, 0.4)';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.transform = 'scale(1)';
                     e.target.style.boxShadow = '';
                   }}>
                  <i className="fab fa-facebook-f text-white" style={{ fontSize: '14px' }}></i>
                </a>
                <a href="#" className="btn rounded-circle p-2 shadow-sm" 
                   style={{ 
                     width: '40px', 
                     height: '40px', 
                     backgroundColor: '#1da1f2',
                     transition: 'all 0.3s ease' 
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.transform = 'scale(1.1)';
                     e.target.style.boxShadow = '0 4px 15px rgba(29, 161, 242, 0.4)';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.transform = 'scale(1)';
                     e.target.style.boxShadow = '';
                   }}>
                  <i className="fab fa-twitter text-white" style={{ fontSize: '14px' }}></i>
                </a>
                <a href="#" className="btn rounded-circle p-2 shadow-sm" 
                   style={{ 
                     width: '40px', 
                     height: '40px', 
                     background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                     transition: 'all 0.3s ease' 
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.transform = 'scale(1.1)';
                     e.target.style.boxShadow = '0 4px 15px rgba(225, 48, 108, 0.4)';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.transform = 'scale(1)';
                     e.target.style.boxShadow = '';
                   }}>
                  <i className="fab fa-instagram text-white" style={{ fontSize: '14px' }}></i>
                </a>
                <a href="#" className="btn rounded-circle p-2 shadow-sm" 
                   style={{ 
                     width: '40px', 
                     height: '40px', 
                     backgroundColor: '#0077b5',
                     transition: 'all 0.3s ease' 
                   }}
                   onMouseEnter={(e) => {
                     e.target.style.transform = 'scale(1.1)';
                     e.target.style.boxShadow = '0 4px 15px rgba(0, 119, 181, 0.4)';
                   }}
                   onMouseLeave={(e) => {
                     e.target.style.transform = 'scale(1)';
                     e.target.style.boxShadow = '';
                   }}>
                  <i className="fab fa-linkedin-in text-white" style={{ fontSize: '14px' }}></i>
                </a>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3 text-white">Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Blog posts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Blog posts
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3 text-white">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Web Design
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Marketing Plans
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Digital Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Email Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Product Selling
                </a>
              </li>
            </ul>
          </div>

          {/* More Info Column */}
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3 text-white">More Info</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Offline SEO
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Development
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Growth Hacking
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Film Studio
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Branding
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Email Marketing
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Lead Generation
                </a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h6 className="fw-bold mb-3 text-white">Support</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Awards
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Security
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Products
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  FAQ
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Help
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Mail Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Terms
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none" style={{ fontSize: '14px' }}>
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <hr className="my-4 text-muted" />
        <div className="row align-items-center">
          <div className="col-md-12 text-center">
            <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
              © 2025 DigitalMarketing. All rights reserved. Design by 
              <a href="#" className="text-primary text-decoration-none ms-1">Lodhi Aakash
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer