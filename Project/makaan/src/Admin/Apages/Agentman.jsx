import React, { useEffect, useState } from 'react';
import Aheader from '../Acoman/Aheader';
import Anav from '../Acoman/Anav';
import axios from 'axios';

function Agentman() {



    const [agents, setagents] = useState([])

    useEffect(() => {
        fetchdata()

    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/agents")
        console.log(res.data)
        setagents(res.data)


    }

    const [agentdata, setagentdata] = useState({

        img: "",
        name: "",

        Profile: ""

    })

    // view data

    const getdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/agents/${id}`)
        setagentdata(res.data)

    }





    /// remove data
    const removedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/agents/${id}`)
        fetchdata()
    }

    //update data

    const [agupdate, setagupdate] = useState(null)

    const [updateag, setupdateag] = useState({

        img: "",
        name: "",

        Profile: ""

    })

    const [errors, setErrors] = useState({})

    const openmodel = (data) => {
        setagupdate(data.id)
        setupdateag({
            img: data.img,
            name: data.name,
            Profile: data.Profile
        })

    }


    const getchange = (e) => {
        setupdateag({
            ...updateag,
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
        
        if (!updateag.name.trim()) {
            newErrors.name = "Name is required"
        }
        
        if (!updateag.Profile.trim()) {
            newErrors.Profile = "Designation is required"
        }
        
        if (!updateag.img.trim()) {
            newErrors.img = "Image URL is required"
        }
        
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleag = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        const res = await axios.put(`http://localhost:3000/agents/${agupdate}`, updateag)
        fetchdata()
        setupdateag({
            img: "",
            name: "",
            Profile: ""
        })
        setagupdate(null)
    }




    return (
        <div>
            <Aheader />
            <Anav title="Manage Agents" name="Manage Agents" />

            <div className='container'>

                <h1 className='my-4 text-center'>Manage Agents</h1>

                <table className="table table-dark table-hover">
                    <thead className='text-center'>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {
                            agents && agents.map((data) => {
                                console.log(data)
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.Profile}</td>
                                        <td className='text-center' >
                                            <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getdata(data.id)}>   View</button>
                                            <button className='btn btn-success mx-2' onClick={() => openmodel(data)}>Update</button>
                                            <button className='btn btn-danger' onClick={() => removedata(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>

                {/* <!-- Modal --> */}
                <div className="modal fade mt-5 pt-5" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Agents</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="col-lg-12 col-md-6 wow fadeInUp " data-wow-delay="0.1s">
                                    <div className="team-item rounded overflow-hidden">
                                        <div className="position-relative">
                                            <img className="img-fluid" src={agentdata.img} style={{ height: "200px", width: "100%" }} alt />
                                            <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                                <a className="btn btn-square mx-1" href><i className="fab fa-facebook-f" /></a>
                                                <a className="btn btn-square mx-1" href><i className="fab fa-twitter" /></a>
                                                <a className="btn btn-square mx-1" href><i className="fab fa-instagram" /></a>
                                            </div>
                                        </div>
                                        <div className="text-center p-4 mt-3">
                                            <h5 className="fw-bold mb-0">{agentdata.name}</h5>
                                            <small>{agentdata.Profile}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {
                    agupdate && (
                        <div className='container my-5'>
                            <form onSubmit={handleag}>
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="form-floating">
                                            <input type="text" value={updateag.name}
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
                                                value={updateag.Profile}
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
                                                value={updateag.img}
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
                                        <button className="btn btn-primary w-100 py-3" type="submit">Update Agent</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )
                }


            </div>











        </div>
    )
}

export default Agentman;