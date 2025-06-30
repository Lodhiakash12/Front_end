import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function AEditprofile() {

    const redirect = useNavigate()

    const [edit, setedit] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""

    })

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        const res = await axios.get(`http://localhost:3000/admin/${localStorage.getItem("Aid")}`)
        console.log(res.data)
        setedit(res.data)
    }


    const getchange = (e) => {
        setedit({
            ...edit,
            [e.target.name]: e.target.value
        })
        console.log(edit)
    }

    const updatedata = async (e) => {
        e.preventDefault();

        try {

            if (!edit.email.trim() || !edit.password.trim() || !edit.name.trim()) {
                console.log("Pls field  required...!")
                toast.error("pls field  required")
                return false
            }

            const res = await axios.patch(`http://localhost:3000/admin/${edit.id}`, edit)
            console.log(res.data)
            localStorage.setItem("Uname", res.data.name)
            toast.success("profile updated..!")
            redirect("/dash")
            setedit({
                id: "",
                name: "",
                email: "",
                password: "",
                status: ""
            })

        } catch (error) {
            console.log("APi data not Found")
            toast.error("APi data not found")
            return false
        }
    }




    return (
        <div>


            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{ backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)' }}>
                <div className='mask gradient-custom-3'></div>
                <MDBCard className='m-5' style={{ maxWidth: '600px' }}>

                    <form onSubmit={updatedata} >
                        <MDBCardBody className='px-5'>
                            <h2 className="text-uppercase text-center mb-5">Update Details</h2>
                            <MDBInput value={edit.name} onChange={getchange} name='name' wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text' />
                            <MDBInput value={edit.email} onChange={getchange} name='email' wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email' />
                            <MDBInput value={edit.password} onChange={getchange} name='password' wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password' />

                             
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Update</MDBBtn>
                            <MDBBtn className='mb-4 w-100 gradient-custom-4' to="/dash" size='lg'>Home</MDBBtn>





                        </MDBCardBody>
                    </form>
                </MDBCard>
            </MDBContainer>




        </div>
    )
}

export default AEditprofile
