import React from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import { MDBInput, MDBCheckbox, MDBBtn, MDBValidation, MDBValidationItem,MDBTextArea } from 'mdb-react-ui-kit';

function Contact() {
  return (
    <div>
      <Header />
      {/* BLOG STARTS */}
      <section className="blog-section" style={{ backgroundColor: "#F4F6F9" }} >
        <div className="container ">
          {/* Section Title */}
          <div className="section-title">
            <p className="section-subtitle">Write Us</p>
            <h2 className="section-main-title">Don't hesitate to contact us <br />
              anytime with questions</h2>
          </div>

          <div   style={{margin:"0 auto"}}>
            <MDBValidation noValidate id='form' className='text-center' style={{ width: '100%', maxWidth: '300px',margin:"0 auto" }}>
      <h2>Contact us</h2>

      <MDBValidationItem invalid feedback='Please provide your name.'>
        <MDBInput label='Name' v-model='name' wrapperClass='mb-4' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide your email.'>
        <MDBInput type='email' label='Email address' v-model='email' wrapperClass='mb-4' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide mail subject.'>
        <MDBInput label='Subject' v-model='subject' wrapperClass='mb-4' required />
      </MDBValidationItem>

      <MDBValidationItem invalid feedback='Please provide a message text.'>
        <MDBTextArea wrapperClass='mb-4' label='Message' required />
      </MDBValidationItem>

      <MDBValidationItem feedback=''>
        <MDBCheckbox wrapperClass='d-flex justify-content-center' label='Send me copy' />
      </MDBValidationItem>

      <MDBBtn type='submit' color='primary' block className='my-4'>
        Send
      </MDBBtn>
    </MDBValidation>  
          </div>

             

        </div>
      </section>

      {/* BLOG ENDS */}





      <Footer />




    </div>
  )
}

export default Contact
