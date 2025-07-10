import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createuser } from '../Slicedata/userSlice'

function Create() {

    const redirect = useNavigate()
    const dispatch = useDispatch()

    const [user, setuser] = useState({
        id: "",
        name: "",
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setuser({
            ...user,
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
    }

    const getsubmit = (e) => {
        e.preventDefault();
        dispatch(createuser(user))
        redirect("/")
        setuser({
            id: "",
            name: "",
            email: "",
            password: ""
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <h1>hello this Form data add</h1>
                        <form onSubmit={getsubmit}>
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Name </label>
                                    <input type="text" value={user.name} onChange={getchange} name='name' className="form-control" id="exampleFormControlInput2" placeholder="your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" value={user.email} onChange={getchange} name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label">your password</label>
                                    <input type="password" value={user.password} onChange={getchange} name='password' className="form-control" id="exampleFormControlInput3" placeholder="your password" />
                                </div>
                                <div className="mb-3">
                                    <input type="submit" className="btn btn-primary" value="Submit" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create