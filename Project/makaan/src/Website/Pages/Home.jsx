import React, { useEffect } from 'react';
import Header from '../Common/Header';
 
import Footer from '../Common/Footer';
import { Helmet } from 'react-helmet';


function Home() {
     useEffect(() => {
            // Initialize any JavaScript functionality here if needed
            // This replaces the external script dependencies
        }, []);
    
    return (
        <div>
            <Header />
            <div>
            <Helmet>

                <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
                <script src="lib/wow/wow.min.js"></script>
                <script src="lib/easing/easing.min.js"></script>
                <script src="lib/waypoints/waypoints.min.js"></script>
                <script src="lib/owlcarousel/owl.carousel.min.js"></script>


                <script src="js/main.js"></script>
            </Helmet>

            {/* Header Start */}
            <div className="container-fluid header bg-white py-5">
                <div className="row g-0 align-items-center flex-column-reverse flex-md-row">
                    <div className="col-md-6 p-5 mt-lg-5">
                        <h1 className="display-5 animated fadeIn mb-4">
                            Find A <span className="text-primary">Perfect Home</span> To Live With Your Family
                        </h1>
                        <p className="animated fadeIn mb-4 pb-2">
                            Vero elitr justo clita lorem. Ipsum dolor at sed stet
                            sit diam no. Kasd rebum ipsum et diam justo clita et kasd rebum sea elitr.
                        </p>
                        <button className="btn btn-primary py-3 px-5 me-3 animated fadeIn">
                            Get Started
                        </button>
                    </div>
                    <div className="col-md-6 animated fadeIn">
                        <div className="owl-carousel header-carousel">
                            <div className="owl-carousel-item">
                                <img className="img-fluid" src="img/carousel-1.jpg" alt="Carousel 1" />
                            </div>
                            <div className="owl-carousel-item">
                                <img className="img-fluid" src="img/carousel-2.jpg" alt="Carousel 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </div>
            <div>
                {/* Search Start */}
                <div className="container-fluid bg-primary mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ padding: 35 }}>
                    <div className="container">
                        <div className="row g-2">
                            <div className="col-md-10">
                                <div className="row g-2">
                                    <div className="col-md-4">
                                        <input type="text" className="form-control border-0 py-3" placeholder="Search Keyword" />
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select border-0 py-3">
                                            <option selected>Property Type</option>
                                            <option value={1}>Property Type 1</option>
                                            <option value={2}>Property Type 2</option>
                                            <option value={3}>Property Type 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select border-0 py-3">
                                            <option selected>Location</option>
                                            <option value={1}>Location 1</option>
                                            <option value={2}>Location 2</option>
                                            <option value={3}>Location 3</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <button className="btn btn-dark border-0 w-100 py-3">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Search End */}
                {/* Category Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <h1 className="mb-3">Property Types</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href>
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid" src="img/icon-apartment.png" alt="Icon" />
                                        </div>
                                        <h6>Apartment</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href>
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid" src="img/icon-villa.png" alt="Icon" />
                                        </div>
                                        <h6>Villa</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href>
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid" src="img/icon-house.png" alt="Icon" />
                                        </div>
                                        <h6>Home</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href>
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid" src="img/icon-housing.png" alt="Icon" />
                                        </div>
                                        <h6>Office</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href>
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid" src="img/icon-building.png" alt="Icon" />
                                        </div>
                                        <h6>Building</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href>
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid" src="img/icon-neighborhood.png" alt="Icon" />
                                        </div>
                                        <h6>Townhouse</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href>
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid" src="img/icon-condominium.png" alt="Icon" />
                                        </div>
                                        <h6>Shop</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <a className="cat-item d-block bg-light text-center rounded p-3" href>
                                    <div className="rounded p-4">
                                        <div className="icon mb-3">
                                            <img className="img-fluid" src="img/icon-luxury.png" alt="Icon" />
                                        </div>
                                        <h6>Garage</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Category End */}
                {/* About Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                    <img className="img-fluid w-100" src="img/about.jpg" />
                                </div>
                            </div>
                            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h1 className="mb-4">#1 Place To Find The Perfect Property</h1>
                                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <p><i className="fa fa-check text-primary me-3" />Tempor erat elitr rebum at clita</p>
                                <p><i className="fa fa-check text-primary me-3" />Aliqu diam amet diam et eos</p>
                                <p><i className="fa fa-check text-primary me-3" />Clita duo justo magna dolore erat amet</p>
                                <a className="btn btn-primary py-3 px-5 mt-3" href>Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About End */}
                {/* Property List Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="row g-0 gx-5 align-items-end">
                            <div className="col-lg-6">
                                <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                                    <h1 className="mb-3">Property Listing</h1>
                                    <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.</p>
                                </div>
                            </div>
                            <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                                <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                                    <li className="nav-item me-2">
                                        <a className="btn btn-outline-primary active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                                    </li>
                                    <li className="nav-item me-2">
                                        <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                                    </li>
                                    <li className="nav-item me-0">
                                        <a className="btn btn-outline-primary" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content">
                            <div id="tab-1" className="tab-pane fade show p-0 active">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-1.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-2.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-3.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-4.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-5.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-6.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center wow fadeInUp" data-wow-delay="0.1s">
                                        <a className="btn btn-primary py-3 px-5" href>Browse More Property</a>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-2" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-1.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-2.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-3.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-4.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-5.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-6.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <a className="btn btn-primary py-3 px-5" href>Browse More Property</a>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-3" className="tab-pane fade show p-0">
                                <div className="row g-4">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-1.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Appartment</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-2.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Villa</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-3.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Office</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-4.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Building</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-5.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Sell</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <div className="property-item rounded overflow-hidden">
                                            <div className="position-relative overflow-hidden">
                                                <a href><img className="img-fluid" src="img/property-6.jpg" alt /></a>
                                                <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">For Rent</div>
                                                <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Shop</div>
                                            </div>
                                            <div className="p-4 pb-0">
                                                <h5 className="text-primary mb-3">$12,345</h5>
                                                <a className="d-block h5 mb-2" href>Golden Urban House For Sell</a>
                                                <p><i className="fa fa-map-marker-alt text-primary me-2" />123 Street, New York, USA</p>
                                            </div>
                                            <div className="d-flex border-top">
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />1000 Sqft</small>
                                                <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />3 Bed</small>
                                                <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />2 Bath</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        <a className="btn btn-primary py-3 px-5" href>Browse More Property</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Property List End */}
                {/* Call to Action Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="bg-light rounded p-3">
                            <div className="bg-white rounded p-4" style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}>
                                <div className="row g-5 align-items-center">
                                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                        <img className="img-fluid rounded w-100" src="img/call-to-action.jpg" alt />
                                    </div>
                                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                        <div className="mb-4">
                                            <h1 className="mb-3">Contact With Our Certified Agent</h1>
                                            <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                                        </div>
                                        <a href className="btn btn-primary py-3 px-4 me-2"><i className="fa fa-phone-alt me-2" />Make A Call</a>
                                        <a href className="btn btn-dark py-3 px-4"><i className="fa fa-calendar-alt me-2" />Get Appoinment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Call to Action End */}
                {/* Team Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <h1 className="mb-3">Property Agents</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="team-item rounded overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/team-1.jpg" alt />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="team-item rounded overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/team-2.jpg" alt />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="team-item rounded overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/team-3.jpg" alt />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div className="team-item rounded overflow-hidden">
                                    <div className="position-relative">
                                        <img className="img-fluid" src="img/team-4.jpg" alt />
                                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                            <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                            <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center p-4 mt-3">
                                        <h5 className="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Team End */}
                {/* Testimonial Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <h1 className="mb-3">Our Clients Say!</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                            <div className="testimonial-item bg-light rounded p-3">
                                <div className="bg-white border rounded p-4">
                                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{ width: 45, height: 45 }} />
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-3">
                                <div className="bg-white border rounded p-4">
                                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{ width: 45, height: 45 }} />
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="testimonial-item bg-light rounded p-3">
                                <div className="bg-white border rounded p-4">
                                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                    <div className="d-flex align-items-center">
                                        <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{ width: 45, height: 45 }} />
                                        <div className="ps-3">
                                            <h6 className="fw-bold mb-1">Client Name</h6>
                                            <small>Profession</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>
            <Footer/>

        </div>

    )
}

export default Home
