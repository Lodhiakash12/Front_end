import React, { useEffect, useState } from 'react';
import Header from '../Common/Header';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Test() {

    const [list, setlist] = useState([])

    const getdata = async () => {
        try {
            const res = await axios.get("http://localhost:3000/testimony")
            console.log(res.data)
            setlist(res.data)
        } catch (error) {
            console.error("Error fetching testimonials:", error);
        }
    }

    useEffect(() => {
        getdata()
    }, []);

    return (
        <div>
            <Header />
            <Navbar title="Testimonial" name="Testimony" />

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
                                            <option value="">Property Type</option>
                                            <option value={1}>Property Type 1</option>
                                            <option value={2}>Property Type 2</option>
                                            <option value={3}>Property Type 3</option>
                                        </select>
                                    </div>
                                    <div className="col-md-4">
                                        <select className="form-select border-0 py-3">
                                            <option value="">Location</option>
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
                {/* Testimonial Start */}
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <h1 className="mb-3">Our Clients Say!</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        
                        <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {
                                    list && list.map((data, index) => {
                                        return (
                                            <div key={data.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                                <div className="testimonial-item bg-light rounded p-3 mx-auto" style={{ maxWidth: 600 }}>
                                                    <div className="bg-white border rounded p-4">
                                                        <p>{data.desc}</p>
                                                        <div className="d-flex align-items-center">
                                                            <h4><i className="bi bi-person-circle"></i></h4>
                                                            <div className="ps-3">
                                                                <h6 className="fw-bold mb-1">{data.name}</h6>
                                                                <small>{data.title}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            
                            {/* Carousel Controls */}
                            {list.length > 1 && (
                                <>
                                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Previous</span>
                                    </button>
                                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="visually-hidden">Next</span>
                                    </button>
                                </>
                            )}
                            
                            {/* Carousel Indicators */}
                            {list.length > 1 && (
                                <div className="carousel-indicators">
                                    {list.map((_, index) => (
                                        <button
                                            key={index}
                                            type="button"
                                            data-bs-target="#testimonialCarousel"
                                            data-bs-slide-to={index}
                                            className={index === 0 ? 'active' : ''}
                                            aria-current={index === 0 ? 'true' : 'false'}
                                            aria-label={`Slide ${index + 1}`}
                                        ></button>
                                    ))}
                                </div>
                            )}
                        </div>

                        <div className='text-center mt-5'>
                            <Link to="/Addtestimony"><button className='btn btn-info btn-lg'>Add Testimony</button></Link>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
            </div>
            <Footer />

        </div>
    )
}

export default Test