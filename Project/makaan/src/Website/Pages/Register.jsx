import React, { useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Register() {


    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            id: new Date().getTime().toString(),
            status: "unblock",
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {
        e.preventDefault();

        if (!form.email.trim() || !form.password.trim() || !form.name.trim()) {
            console.log("Pls field  required...!")
            toast.error("pls field  required")
            return false
        }

        const res = await axios.post("http://localhost:3000/user", form)
        console.log(res.data)
        redirect("/login")
        toast.success("Register successfully....")

    }




    return (
        <div>

            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>
                  
                  <form onSubmit={getsubmit}>
                      <MDBCardBody className='px-5'>
                        <h2 className="text-uppercase text-center mb-5">Create an account</h2>
                        <MDBInput  value={form.name} onChange={getchange} name='name' wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                        <MDBInput  value={form.email} onChange={getchange} name='email' wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                        <MDBInput  value={form.password} onChange={getchange} name='password' wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />

                        <div className='d-flex flex-row justify-content-center mb-4'>
                            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
                        </div>
                        <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>

                        <h6>Have already an account?  <Link to="/Login"> Login here</Link></h6>
                    </MDBCardBody>
                  </form>
                </MDBCard>
            </MDBContainer>

        </div>
    )
}

export default Register
