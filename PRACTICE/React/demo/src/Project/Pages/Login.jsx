import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import "./login.css"

function Login() {
  return (
    <div>
      <Header />

      <div className="container"> {/* Fixed: was classname */}
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex align-items-center justify-content-center h-100">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <img 
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" 
                  className="img-fluid" 
                  alt="Phone image" 
                />
              </div>
              <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                <form>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form1Example13">Email address</label>
                    <input 
                      type="email" 
                      id="form1Example13" 
                      className="form-control form-control-lg" 
                      placeholder="Enter your email"
                    />
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form1Example23">Password</label>
                    <input 
                      type="password" 
                      id="form1Example23" 
                      className="form-control form-control-lg" 
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="d-flex justify-content-around align-items-center mb-4">
                    {/* Checkbox */}
                    <div className="form-check">
                      <input 
                        className="form-check-input" 
                        type="checkbox" 
                        defaultValue="" 
                        id="form1Example3" 
                        defaultChecked 
                      />
                      <label className="form-check-label" htmlFor="form1Example3">
                        Remember me
                      </label>
                    </div>
                    <a href="#!">Forgot password?</a>
                  </div>
                  {/* Submit button */}
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg w-100 mb-3"
                  >
                    Sign in
                  </button>
                  <div className="divider d-flex align-items-center my-4">
                    <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                  </div>
                  <button 
                    type="button"
                    className="btn btn-lg w-100 mb-2" 
                    style={{ backgroundColor: '#3b5998', color: 'white' }}
                  >
                    <i className="fab fa-facebook-f me-2" />
                    Continue with Facebook
                  </button>
                  <button 
                    type="button"
                    className="btn btn-lg w-100" 
                    style={{ backgroundColor: '#55acee', color: 'white' }}
                  >
                    <i className="fab fa-twitter me-2" />
                    Continue with Twitter
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Login