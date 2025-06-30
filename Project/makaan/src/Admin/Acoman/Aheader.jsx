import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { toast } from 'react-toastify';


function Aheader() {

    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("Aid")) {
            navigate("/Alogin")
        }
    })
    const logout = () => {
        localStorage.removeItem("Aid")
        localStorage.removeItem("Aname")
        toast.success("Logout Successfull")
        navigate("/dash")
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
                        <h1 className="m-0 text-primary">Admin Dashboard</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav ms-auto">
                            <NavLink to="/dash" className="nav-item nav-link  ">Home</NavLink>
                            <NavLink to="/AdminAbout" className="nav-item nav-link">About</NavLink>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/listmanage" className="dropdown-item">Property List Manage</NavLink>
                                    <NavLink to="/Proadd" className="dropdown-item">Add Property</NavLink>
                                    <NavLink to="/PropertyType" className="dropdown-item">Property Type</NavLink>

                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/Testimony" className="dropdown-item">Testimonial</NavLink>
                                    <a href="404.html" className="dropdown-item">404 Error</a>
                                </div>
                            </div>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Agents</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <NavLink to="/Agentmanage" className="dropdown-item">Manage Agents</NavLink>
                                    <NavLink to="/Addagents" className="dropdown-item">Add Agents</NavLink>

                                </div>
                            </div>
                        </div>


                        {
                            (() => {
                                if (localStorage.getItem("Aid")) {
                                    return (
                                        <>
                                            <NavLink to="/AEditprofile" className="btn btn-primary px-3 d-none d-lg-flex">{localStorage.getItem("Aname")}</NavLink>
                                        </>
                                    )
                                }
                            })()
                        }
                        {
                            (() => {
                                if (localStorage.getItem("Aid")) {
                                    return (
                                        <>
                                            <NavLink onClick={logout} className="btn btn-primary px-3 mx-2 d-none d-lg-flex">Logout</NavLink>
                                        </>
                                    )
                                }
                                else{
                                                return(
                                                    <>
                                                        <NavLink to="/Alogin" className="nav-item nav-link">ALogin</NavLink>
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

export default Aheader