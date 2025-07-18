import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateuser } from '../Slicedata/userSlice'

function Update() {
    const redirect = useNavigate()
    const { id } = useParams() // Get the user ID from URL params
    const dispatch = useDispatch()
    const { user } = useSelector((state) => state.users)

    // Initialize state with proper structure
    const [updatedata, setupdatadata] = useState({
        id: '',
        name: '',
        email: '',
        password: ''
    })

    // Load user data when component mounts or user/id changes
    useEffect(() => {
        if (user && id) {
            const singleuser = user.find((data) => data.id === id)
            if (singleuser) {
                setupdatadata(singleuser)
            }
        }
    }, [user, id]) // Proper dependencies

    // Handle form input changes
    const getchange = (e) => {
        setupdatadata({
            ...updatedata,
            [e.target.name]: e.target.value
        })
    }

    // Handle form submission
    const getupdate = (e) => {
        e.preventDefault()
        
        // Destructure to separate id from other user data
        const { id, ...userData } = updatedata
        
        // Dispatch the update action with proper format
        dispatch(updateuser({ 
            id: id, 
            data: userData 
        }))
        
        // Redirect after update
        redirect("/")
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <h1>Update User</h1>
                    <form onSubmit={getupdate}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                                type="text" 
                                onChange={getchange} 
                                value={updatedata.name || ''} 
                                name="name" 
                                className="form-control" 
                                placeholder="Your name" 
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input 
                                type="email" 
                                onChange={getchange} 
                                value={updatedata.email || ''} 
                                name="email" 
                                className="form-control" 
                                placeholder="email@example.com" 
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input 
                                type="password"  
                                onChange={getchange} 
                                value={updatedata.password || ''} 
                                name="password" 
                                className="form-control" 
                                placeholder="Your password" 
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Update User
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Update