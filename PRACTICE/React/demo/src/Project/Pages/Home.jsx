import React from 'react'
import Header from '../Common/Header'
import "./Style.css"
import Footer from '../Common/Footer'




function Home() {
  return (
    <div>
      <Header />

      {/* SECTIONS 1 STARTS */}
      <div className="mt-5 pt-5">
        <div className='container'>
          <div className="row">
            <div className="col-md-6 d-flex align-items-center">
              <div className="p-4">
                {/* Small subtitle */}
                <p className="text-muted mb-3" style={{ fontSize: '14px', fontWeight: '500' }}>
                  We Are Gathered
                </p>

                {/* Main heading */}
                <h1 className="display-4 fw-bold mb-4" style={{ color: '#2c3e50', lineHeight: '1.2' }}>
                  For Your <br />
                  <span style={{ color: '#3b82f6' }}>Digital Marketing</span>
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
            <div className="col-md-6">
              <div id="carouselMaterialStyle" className="carousel slide carousel-fade position-relative" data-mdb-ride="carousel" data-mdb-carousel-init style={{ height: "350px", width: "450px" }}>
                <div className="carousel-indicators">
                  <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" className="active" aria-current="true"
                    aria-label="Slide 1"></button>
                  <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner rounded-5 shadow-4-strong h-100">
                  <div className="carousel-item active h-100">
                    <img src="https://p.w3layouts.com/demos_new/template_demo/09-02-2022/digitmarketing-liberty-demo_Free/150772938/web/assets/images/banner4.jpg" className="d-block w-100 h-100"
                      alt="Sunset Over the City" style={{ objectFit: 'cover' }} />
                    <div className="carousel-caption d-none d-md-block">

                    </div>
                  </div>
                  <div className="carousel-item h-100">
                    <img src="https://p.w3layouts.com/demos_new/template_demo/09-02-2022/digitmarketing-liberty-demo_Free/150772938/web/assets/images/banner1.jpg" className="d-block w-100 h-100"
                      alt="Canyon at Night" style={{ objectFit: 'cover' }} />
                    <div className="carousel-caption d-none d-md-block">

                    </div>
                  </div>
                  <div className="carousel-item h-100">
                    <img src="https://p.w3layouts.com/demos_new/template_demo/09-02-2022/digitmarketing-liberty-demo_Free/150772938/web/assets/images/banner2.jpg" className="d-block w-100 h-100"
                      alt="Cliff Above a Stormy Sea" style={{ objectFit: 'cover' }} />
                    <div className="carousel-caption d-none d-md-block">

                    </div>
                  </div>
                </div>
                <button className="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTIONS 1 ENDS */}


      {/* GROWTH STARTS */}

      <section className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          {/* Header Section */}
          <div className="row mb-5">
            <div className="col-md-6">
              <p className="text-muted mb-3 text-uppercase fw-medium" style={{ fontSize: '13px', letterSpacing: '1px' }}>
                Design & Marketing
              </p>
              <h2 className="display-5 fw-bold lh-sm" style={{ color: '#2c3e50' }}>
                Let's Grow Your Business<br />
                Together.
              </h2>
            </div>
            <div className="col-md-6 d-flex align-items-center">
              <p className="text-muted fs-6 lh-lg">
                Lorem ipsum viverra feuglat. Pellen tesque libero ut justo, ultrices in
                ligula. Semper at tempufddfel. Lorem ipsum dolor sit amet elit. Non
                quae, fugiat nihil ad. Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div className="row g-5">
            {/* Great Support */}
            <div className="col-lg-4 col-md-12">
              <div className="d-flex flex-column align-items-start">
                {/* Icon */}
                <div className="mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center shadow-2-strong"
                    style={{ width: '60px', height: '60px', backgroundColor: '#3b71ca' }}>
                    <i className="fas fa-user-shield text-white" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>

                <h4 className="fw-bold mb-3" style={{ color: '#2c3e50', fontSize: '22px' }}>
                  Great Support.
                </h4>

                <p className="text-muted lh-lg" style={{ fontSize: '15px' }}>
                  Lorem ipsum viverra feuglat. Pellen tesque libero ut justo, ultrices in ligula.Lorem ipsum
                  viverra feuglat.
                </p>
              </div>
            </div>

            {/* Perfect Design */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex flex-column align-items-start">
                {/* Icon */}
                <div className="mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center shadow-2-strong"
                    style={{ width: '60px', height: '60px', backgroundColor: '#e4626b' }}>
                    <i className="fas fa-edit text-white" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>

                <h4 className="fw-bold mb-3" style={{ color: '#2c3e50', fontSize: '22px' }}>
                  Perfect Design.
                </h4>

                <p className="text-muted lh-lg" style={{ fontSize: '15px' }}>
                  Lorem ipsum viverra feuglat. Pellen tesque libero ut justo, ultrices in ligula.Lorem ipsum
                  viverra feuglat.
                </p>
              </div>
            </div>

            {/* SEO Optimized */}
            <div className="col-lg-4 col-md-6">
              <div className="d-flex flex-column align-items-start">
                {/* Icon */}
                <div className="mb-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center shadow-2-strong"
                    style={{ width: '60px', height: '60px', backgroundColor: '#3b71ca' }}>
                    <i className="fas fa-chart-bar text-white" style={{ fontSize: '20px' }}></i>
                  </div>
                </div>

                <h4 className="fw-bold mb-3" style={{ color: '#2c3e50', fontSize: '22px' }}>
                  SEO Optimized.
                </h4>

                <p className="text-muted lh-lg" style={{ fontSize: '15px' }}>
                  Lorem ipsum viverra feuglat. Pellen tesque libero ut justo, ultrices in ligula.Lorem ipsum
                  viverra feuglat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* gROWTH ENDS */}

      {/* BLOG STARTS */}
      <section className="blog-section" style={{backgroundColor:"white"}} >
        <div className="container ">
          {/* Section Title */}
          <div className="section-title">
            <p className="section-subtitle">Blog Posts</p>
            <h2 className="section-main-title">Recent Blog Post</h2>
          </div>
          {/* Blog Cards Row */}
          <div className="row">
            {/* Blog Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="card blog-card">
                <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Sales Marketing" className="blog-card-img" />
                <div className="card-body blog-card-body">
                  <div className="blog-meta">
                    <span className="blog-meta-item">
                      <i className="fas fa-user" />
                      By Admin
                    </span>
                    <span className="blog-meta-item">
                      <i className="fas fa-calendar" />
                      12.10.2021
                    </span>
                  </div>
                  <h5 className="blog-title">
                    <a href="#" className="text-decoration-none">
                      How to become a best sale marketer in a year!
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card blog-card">
                <img src="https://p.w3layouts.com/demos_new/template_demo/09-02-2022/digitmarketing-liberty-demo_Free/150772938/web/assets/images/g5.jpg" />
                <div className="card-body blog-card-body">
                  <div className="blog-meta">
                    <span className="blog-meta-item">
                      <i className="fas fa-user" />
                      By Admin
                    </span>
                    <span className="blog-meta-item">
                      <i className="fas fa-calendar" />
                      12.10.2021
                    </span>
                  </div>
                  <h5 className="blog-title">
                    <a href="#" className="text-decoration-none">
                      Create a gorgeous blog that will capture the attention.
                    </a>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="card blog-card">
                <img src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" alt="Marketing Meeting" className="blog-card-img" />
                <div className="card-body blog-card-body">
                  <div className="blog-meta">
                    <span className="blog-meta-item">
                      <i className="fas fa-user" />
                      By Admin
                    </span>
                    <span className="blog-meta-item">
                      <i className="fas fa-calendar" />
                      12.10.2021
                    </span>
                  </div>
                  <h5 className="blog-title">
                    <a href="#" className="text-decoration-none">
                      The magic of marketing, the science of sales
                    </a>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG ENDS */}


      {/* Footer starts */}
      <Footer />
      {/* Footer ends */}




    </div>
  )
}

export default Home