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
              
              {/* Navigation Buttons */}
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                
                
                {/* Alternative Link Button */}
                <Link 
                  to="/" 
                  className="btn btn-outline-primary btn-lg px-5 py-3 d-inline-flex align-items-center gap-2 m-5"
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