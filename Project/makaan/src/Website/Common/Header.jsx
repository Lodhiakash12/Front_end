import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';

function Header() {

    const redirect = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("Uid")) {
            redirect("/login")
        }
    })

    const logout = () => {
        localStorage.removeItem("Uid")
        localStorage.removeItem("Uname")
        redirect("/login")
        toast.success("user logout successfully")
    }



    return (
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
            {/* Navbar Start */}
            <div className="container-fluid nav-bar bg-transparent">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                    <a href="index.html" className="navbar-brand d-flex align-items-center text-center">
                        <div className="icon p-2 me-2">
                            <img className="img-fluid" src="img/icon-deal.png" alt="Icon" style={{ width: 30, height: 30 }} />
                        </div>
                        <h1 className="m-0 text-primary">Makaan</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <NavLink to="/" className="nav-item nav-link  ">Home</NavLink>
                            <NavLink to="/About" className="nav-item nav-link">About</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/PropertyList" className="dropdown-item">Property List</NavLink>
                                    <NavLink to="/PropertyType" className="dropdown-item">Property Type</NavLink>
                                    <NavLink to="/PropertyAgent" className="dropdown-item">Property Agent</NavLink>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/Testimony" className="dropdown-item">Testimonial</NavLink>
                                    <a href="404.html" className="dropdown-item">404 Error</a>
                                </div>
                            </div>
                            <NavLink to="/Contact" className="nav-item nav-link">Contact</NavLink>
                        </div>
                        <a href className="btn btn-primary px-3 d-none d-lg-flex">Add Property</a>
                        {
                            (() => {
                                if (localStorage.getItem("Uid")) {
                                    return (
                                        <>
                                            <NavLink to="/Editprofile" className="btn btn-primary px-3 mx-2 d-none d-lg-flex">{localStorage.getItem("Uname")}</NavLink>
                                        </>
                                    )
                                }
                            })()
                        }
                        {
                            (() => {
                                if (localStorage.getItem("Uid")) {
                                    return (
                                        <>
                                            <NavLink onClick={logout} className="btn btn-primary px-3 mx-2 d-none d-lg-flex">Logout</NavLink>
                                        </>
                                    )
                                }
                                else {
                                    return (
                                        <>
                                            <NavLink to="/login" className="nav-item nav-link">Login</NavLink>
                                        </>
                                    )
                                }

                            })()
                        }
                    </div>
                </nav>
            </div>
            {/* Navbar End */}
        </div>

    )
}

export default Header
