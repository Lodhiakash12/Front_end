import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setIsNotificationOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', path: '/' },
    { id: 'about', label: 'About', path: '/about' },
    { id: 'services', label: 'Services', path: '/services' },
    { id: 'contact', label: 'Contact', path: '/contact' }
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setIsNavOpen(false);
  };

  const handleSearch = () => {
    const searchInput = document.querySelector('input[type="search"]');
    const searchTerm = searchInput.value;
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <>
      <style>{`
        .header-gradient {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 32px rgba(102, 126, 234, 0.2);
          padding: 0.75rem 0;
        }
        .dropdown-menu {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 15px;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          margin-top: 0.5rem;
        }
        .nav-link:hover {
          transform: translateY(-2px);
          transition: all 0.3s ease;
        }
        .nav-link.active {
          background: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }
        .btn-gradient {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6);
          border: none;
          transition: all 0.3s ease;
          margin: 0 0.25rem;
        }
        .btn-gradient:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }
        .navbar-nav .nav-item {
          margin: 0 0.25rem;
        }
        .container {
          padding-left: 1rem;
          padding-right: 1rem;
        }
      `}</style>

      <nav className="header-gradient navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          {/* Brand */}
          <Link 
            className="navbar-brand d-flex align-items-center" 
            to="/"
            style={{ marginRight: '2rem' }}
          >
            <div 
              className="me-3 d-flex align-items-center justify-content-center rounded-3"
              style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
              }}
            >
              📈
            </div>
            <span>
              <span style={{ color: 'Orange' }}>Digital</span>
              <span className="text-dark">Marketing</span>
            </span>
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="navbar-toggler border-0"
            style={{ background: 'rgba(255, 255, 255, 0.1)' }}
            type="button"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Content */}
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
            {/* Navigation Links */}
            <ul className="navbar-nav me-auto">
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <NavLink
                    className="nav-link px-3 py-2 rounded-pill"
                    to={item.path} 
                    style={{
                      fontWeight: '500',
                      margin: '0 0.25rem'
                    }}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Search Form */}
            <div className="d-flex me-3" style={{ margin: '0 1rem' }}>
              <div className="input-group">
                <input 
                  className="form-control border-0"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.15)',
                    color: 'white',
                    padding: '0.5rem 1rem'
                  }}
                  type="search" 
                  placeholder="Search..."
                />
                <button 
                  className="btn btn-gradient px-3" 
                  onClick={handleSearch}
                >
                  🔍
                </button>
              </div>
            </div>

            {/* Right Side Actions */}
            <ul className="navbar-nav ">
              {/* Login Button */}
              <li className="nav-item ms-4  mt-2">
                <Link 
                  className="btn btn-gradient text-white px-4 py-2 rounded-pill"
                  to="/login"
                  style={{ margin: '0 0.25rem' }}
                >
                  🔐 Login
                </Link>
              </li>

              {/* Notifications Dropdown */}
              <li className="nav-item dropdown ms-3 mt-2" ref={notificationRef}  >
                <a 
                  className="nav-link position-relative p-2 rounded-3"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  href="#"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setIsNotificationOpen(!isNotificationOpen);
                  }}
                >
                  🔔
                  <span 
                    className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                    style={{ fontSize: '8px' }}
                  >
                    2
                  </span>
                </a>
                
                {isNotificationOpen && (
                  <div className="dropdown-menu dropdown-menu-end show" style={{ minWidth: '280px', padding: '0.5rem' }}>
                    <h6 className="dropdown-header" style={{ padding: '0.5rem 1rem' }}>Notifications</h6>
                    <a className="dropdown-item d-flex align-items-center py-2" href="#" style={{ padding: '0.75rem 1rem', margin: '0.25rem 0' }}>
                      <div 
                        className="me-3 d-flex align-items-center justify-content-center rounded-2"
                        style={{
                          width: '35px',
                          height: '35px',
                          background: 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
                        }}
                      >
                        👤
                      </div>
                      <div>
                        <div className="fw-bold">New user registered</div>
                        <small className="text-muted">2 minutes ago</small>
                      </div>
                    </a>
                    <a className="dropdown-item d-flex align-items-center py-2" href="#" style={{ padding: '0.75rem 1rem', margin: '0.25rem 0' }}>
                      <div 
                        className="me-3 d-flex align-items-center justify-content-center rounded-2"
                        style={{
                          width: '35px',
                          height: '35px',
                          background: 'linear-gradient(45deg, #10b981, #059669)'
                        }}
                      >
                        📈
                      </div>
                      <div>
                        <div className="fw-bold">Sales increased by 25%</div>
                        <small className="text-muted">1 hour ago</small>
                      </div>
                    </a>
                  </div>
                )}
              </li>

              {/* Profile Dropdown */}
              <li className="nav-item dropdown  mt-2 ms-2" ref={profileRef}  >
                <a 
                  className="nav-link d-flex align-items-center px-3 py-2 rounded-pill"
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}
                  href="#"
                  onClick={(e) => { 
                    e.preventDefault(); 
                    setIsProfileOpen(!isProfileOpen);
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format"
                    className="rounded-circle me-2"
                    style={{ 
                      width: '32px', 
                      height: '32px',
                      border: '2px solid rgba(255, 255, 255, 0.3)'
                    }}
                    alt="Profile"
                  /> 
                  <span className="ms-2">⌄</span>
                </a>
                
                {isProfileOpen && (
                  <div className="dropdown-menu dropdown-menu-end show" style={{ minWidth: '200px', padding: '0.5rem' }}>
                    <Link 
                      className="dropdown-item d-flex align-items-center py-2" 
                      to="/profile"
                      style={{ padding: '0.75rem 1rem', margin: '0.25rem 0', textDecoration: 'none' }}
                      onClick={() => setIsProfileOpen(false)}
                    >
                      👤 <span className="ms-2">Your Account</span>
                    </Link>
                    <Link 
                      className="dropdown-item d-flex align-items-center py-2" 
                      to="/settings"
                      style={{ padding: '0.75rem 1rem', margin: '0.25rem 0', textDecoration: 'none' }}
                      onClick={() => setIsProfileOpen(false)}
                    >
                      ⚙️ <span className="ms-2">Settings</span>
                    </Link>
                    <Link 
                      className="dropdown-item d-flex align-items-center py-2" 
                      to="/help"
                      style={{ padding: '0.75rem 1rem', margin: '0.25rem 0', textDecoration: 'none' }}
                      onClick={() => setIsProfileOpen(false)}
                    >
                      ❓ <span className="ms-2">Help</span>
                    </Link>
                    <hr className="dropdown-divider" style={{ margin: '0.5rem 0' }} />
                    <button 
                      className="dropdown-item d-flex align-items-center py-2 text-danger"
                      onClick={() => {
                        alert('Sign out clicked');
                        setIsProfileOpen(false);
                      }}
                      style={{ padding: '0.75rem 1rem', margin: '0.25rem 0' }}
                    >
                      🚪 <span className="ms-2">Sign Out</span>
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: '90px' }}></div>

     
    </>
  );
}

export default Header;