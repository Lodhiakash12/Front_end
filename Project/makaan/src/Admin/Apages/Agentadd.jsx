import React, { useState } from 'react';
import Aheader from '../Acoman/Aheader';
import Anav from '../Acoman/Anav';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Agentadd() {
    const redirect = useNavigate()

    const [agent, setagent] = useState({
        "id": "",
        "img": "",
        "name": "",
        "Profile": ""
    })

    const [errors, setErrors] = useState({})

    const getchange = (e) => {
        setagent({
            ...agent,
            // new id create
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value
        })
        
        // Clear error when user starts typing
        if (errors[e.target.name]) {
            setErrors({
                ...errors,
                [e.target.name]: ""
            })
        }
    }

    const validateForm = () => {
        const newErrors = {}
        
        if (!agent.name.trim()) {
            newErrors.name = "Name is required"
        }
        
        if (!agent.Profile.trim()) {
            newErrors.Profile = "Designation is required"
        }
        
        if (!agent.img.trim()) {
            newErrors.img = "Image URL is required"
        }
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleagent = async (e) => {
        e.preventDefault()
        
        if (!validateForm()) {
            return
        }

        const res = await axios.post("http://localhost:3000/agents", agent)
        setagent(res.data)
        redirect("/Agentmanage")

        setagent({
            "id": "",
            "img": "",
            "name": "",
            "Profile": ""
        })
    }

    return (
        <div>
            <Aheader />
            <Anav title="ADD AGENTS" name="Add Agents" />

            <h1 className='text-center mt-5'> Add Agents</h1>

            <div className='container my-5'>
                <form onSubmit={handleagent}>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text" value={agent.name}
                                    name='name'
                                    onChange={getchange} 
                                    className={`form-control ${errors.name ? 'is-invalid' : ''}`} 
                                    id="name" 
                                    placeholder="Your Name" />
                                <label htmlFor="name">Your Name</label>
                                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-floating">
                                <input type="text"
                                    value={agent.Profile}
                                    name='Profile'
                                    onChange={getchange}
                                    className={`form-control ${errors.Profile ? 'is-invalid' : ''}`} 
                                    id="email" 
                                    placeholder="Your Designation" />
                                <label htmlFor="text">Designation</label>
                                {errors.Profile && <div className="invalid-feedback">{errors.Profile}</div>}
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-floating">
                                <input type="text"
                                    value={agent.img}
                                    name='img'
                                    onChange={getchange} 
                                    className={`form-control ${errors.img ? 'is-invalid' : ''}`} 
                                    id="subject" 
                                    placeholder="IMG" />
                                <label htmlFor="subject">Image</label>
                                {errors.img && <div className="invalid-feedback">{errors.img}</div>}
                            </div>
                        </div>

                        <div className="col-12">
                            <button className="btn btn-primary w-100 py-3" type="submit">Add Agent</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Agentadd