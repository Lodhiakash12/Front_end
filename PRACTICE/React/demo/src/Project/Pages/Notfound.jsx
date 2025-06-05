import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Notfound() {
  const redirect = useNavigate()
  
  const backtohome = () => {
    redirect("/")
  }

  return (
    <div className="min-h-screen d-flex align-items-center justify-content-center mt-5 pt-5" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8 col-sm-10">
            <div className="text-center">
              {/* 404 Large Number */}
              <h1 className="display-1 fw-bold mb-4" style={{ 
                fontSize: '8rem', 
                color: '#d2691e',
                fontWeight: '800',
                lineHeight: '1'
              }}>
                404
              </h1>
              
              {/* Page Not Found Title */}
              <h2 className="h2 fw-bold mb-3" style={{ 
                color: '#2c3e50',
                fontSize: '2.5rem',
                fontWeight: '700'
              }}>
                Page Not Found
              </h2>
             
              
              {/* Social Media Buttons */}
              <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
                <button 
                  className="btn d-flex align-items-center gap-2 px-4 py-2 mb-2"
                  style={{ 
                    backgroundColor: '#3b5998',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '0.9rem'
                  }}
                >
                  <span style={{ fontSize: '14px' }}>📘</span>
                  Facebook
                </button>
                
                <button 
                  className="btn d-flex align-items-center gap-2 px-4 py-2 mb-2"
                  style={{ 
                    backgroundColor: '#1da1f2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '0.9rem'
                  }}
                >
                  <span style={{ fontSize: '14px' }}>🐦</span>
                  Twitter
                </button>
                
                <button 
                  className="btn d-flex align-items-center gap-2 px-4 py-2 mb-2"
                  style={{ 
                    backgroundColor: '#e4405f',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '0.9rem'
                  }}
                >
                  <span style={{ fontSize: '14px' }}>📷</span>
                  Instagram
                </button>
              </div>
              
              {/* Navigation Buttons */}
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                {/* Back to Home Button with useNavigate */}
                <button 
                  className="btn btn-lg px-5 py-3 d-inline-flex align-items-center gap-2 mb-2"
                  style={{ 
                    backgroundColor: '#d2691e',
                    color: 'white',
                    border: 'none',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    boxShadow: '0 4px 12px rgba(210, 105, 30, 0.3)'
                  }}
                  onClick={backtohome}
                >
                  <span style={{ fontSize: '16px' }}>⬅️</span>
                  Back To Home
                </button>
                
                {/* Alternative Link Button */}
                <Link 
                  to="/" 
                  className="btn btn-outline-primary btn-lg px-5 py-3 d-inline-flex align-items-center gap-2 mb-2"
                  style={{ 
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    textDecoration: 'none'
                  }}
                >
                  <span style={{ fontSize: '16px' }}>🏠</span>
                  Home Page
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Notfound