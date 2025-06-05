import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'

function Services() {
  const services = [
    {
      id: 1,
      icon: "📧",
      title: "Email Marketing",
      description: "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempor."
    },
    {
      id: 2,
      icon: "🎯",
      title: "Market Research",
      description: "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempor."
    },
    {
      id: 3,
      icon: "📊",
      title: "Online Marketing",
      description: "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempor."
    },
    {
      id: 4,
      icon: "✏️",
      title: "Web Development",
      description: "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempor."
    },
    {
      id: 5,
      icon: "🔑",
      title: "Keyword Research",
      description: "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempor."
    },
    {
      id: 6,
      icon: "🏗️",
      title: "Optimization",
      description: "Lorem ipsum viverra feugiat. Pellen tesque libero ut justo, ultrices in ligula. Semper at tempor."
    }
  ];

  return (
    <div>
      <Header />
      
      {/* SECTIONS 1 STARTS */}
      <div className="mt-2 pt-4">
        <div className='container me-5'>
          <div className="row">
            <div className="col-md-6 mt-3 ">
              <div>
                <img 
                  style={{ height: "420px", width: "600px" }} 
                  src="https://p.w3layouts.com/demos_new/template_demo/09-02-2022/digitmarketing-liberty-demo_Free/150772938/web/assets/images/mac-business.png" 
                  alt="" 
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <div className="p-4">
                {/* Small subtitle */}
                <p className="text-muted mb-3" style={{ fontSize: '14px', fontWeight: '500' }}>
                  What We Do?
                </p>
                
                {/* Main heading */}
                <h1 className="display-7 fw-bold mb-4" style={{ color: '#2c3e50', lineHeight: '1.2' }}>
                  Advertise, analyze, and optimize! We do it all for you. <br />
                </h1>
                
                {/* Description paragraph */}
                <p className="text-muted mb-4" style={{ fontSize: '16px', lineHeight: '1.6', maxWidth: '400px' }}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
                  excepturi. Distinctio accusantium fugit odit fugit ipsum.
                </p>
                
                {/* Buttons */}
                <div className="d-flex gap-3 flex-wrap">
                  <button className="btn btn-primary btn-lg px-4 py-2" style={{ backgroundColor: '#3b82f6', borderColor: '#3b82f6' }}>
                    Read More
                  </button>
                  <button className="btn btn-outline-dark btn-lg px-4 py-2">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTIONS 1 ENDS */}

      {/* section 2 starts - Services Grid */}
      <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <p className="text-muted mb-2" style={{ fontSize: '14px', fontWeight: '500' }}>
              Our Services
            </p>
            <h2 className="display-6 fw-bold" style={{ color: '#2c3e50' }}>
              What We Offer
            </h2>
          </div>

          {/* Services Grid */}
          <div className="row g-4">
            {services.map((service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div className="card h-100 shadow-sm border-0" style={{ transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.transform = 'translateY(-5px)';
                       e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.transform = 'translateY(0)';
                       e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                     }}>
                  <div className="card-body text-center p-4">
                    {/* Icon */}
                    <div className="mb-4">
                      <div className="d-inline-flex align-items-center justify-content-center rounded-circle"
                           style={{ 
                             width: '64px', 
                             height: '64px', 
                             backgroundColor: '#fff3e0',
                             color: '#f57c00'
                           }}>
                        <span style={{ fontSize: '24px' }}>{service.icon}</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h5 className="card-title fw-bold mb-3" style={{ color: '#2c3e50' }}>
                      {service.title}
                    </h5>
                    
                    {/* Description */}
                    <p className="card-text text-muted" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Section 2 Ends */}

      <Footer />
    </div>
  )
}

export default Services