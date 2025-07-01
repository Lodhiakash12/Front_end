import React, { useEffect, useState } from 'react';
import Aheader from '../Acoman/Aheader';
import Anav from '../Acoman/Anav';
import axios from 'axios';

function Listmanage() {

    const [list, setlist] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        try {
            const res = await axios.get("http://localhost:3000/list")
            console.log(res.data)
            setlist(res.data)
        } catch (error) {
            console.error("Error fetching data:", error)
        }
    }

    const [listdata, setlistdata] = useState({
        id: "",
        type: "",
        img: "",
        price: "",
        title: "",
        add: "",
        badge: ""
    })

    //get individual id
    const getdata = async (id) => {
        try {
            const res = await axios.get(`http://localhost:3000/list/${id}`)
            setlistdata(res.data)
        } catch (error) {
            console.error("Error getting individual data:", error)
        }
    }

    //delete
    const removedata = async (id) => {
        try {
            const res = await axios.delete(`http://localhost:3000/list/${id}`)
            fetchdata()
        } catch (error) {
            console.error("Error deleting data:", error)
        }
    }

    //update
    const [listupdate, setlistupdate] = useState(null)

    const [updatelist, setupdatelist] = useState({
        id: "",
        type: "",
        img: "",
        price: "",
        title: "",
        add: "",
        badge: ""
    })

    const handleUpdateClick = (data) => {
        setlistupdate(data.id)
        setupdatelist(data)
    }

    const handleUpdateChange = (e) => {
        setupdatelist({
            ...updatelist,
            [e.target.name]: e.target.value
        })
    }

    const handleUpdateSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/list/${updatelist.id}`, updatelist)
            setlistupdate(null)
            fetchdata()
        } catch (error) {
            console.error("Error updating data:", error)
        }
    }

    return (
        <div>
            <Aheader />
            <Anav title="List Manage" name="List Manage" />

            <h1 className='text-center my-4'>This is List Manage</h1>

            <div className='container-fluid'>
                <table className="table table-hover">
                    <thead className='text-center'>
                        <tr>
                            <th scope="col">#ID</th>
                            <th scope="col">Type</th>
                            <th scope="col">Title</th>
                            <th scope="col">Add</th>
                            <th scope="col">Badge</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className='table table-hover text-center'>
                        {
                            list && list.map((data) => {
                                return (
                                    <tr key={data.id}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.type}</td>
                                        <td>{data.title}</td>
                                        <td>{data.add}</td>
                                        <td>{data.badge}</td>
                                        <td>{data.price}</td>
                                        <td>
                                            <button className='btn btn-info text-dark' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => getdata(data.id)} >View</button>
                                            <button className='btn btn-success text-dark mx-2' onClick={() => handleUpdateClick(data)}>Update</button>
                                            <button className='btn btn-danger text-dark' onClick={() => removedata(data.id)}>Delete</button>
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
                                <h5 className="modal-title" id="exampleModalLabel">Property List</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="col-lg-12 col-md-12" key={listdata.id}>
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="#"><img className="img-fluid" style={{ height: "250px", width: "100%" }} src={listdata.img} alt="" /></a>
                                            <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{listdata.badge}</div>
                                            <div className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">{listdata.type}</div>
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="text-primary mb-3">${listdata.price}</h5>
                                            <a className="d-block h5 mb-2" href="#">{listdata.title}</a>
                                            <p><i className="fa fa-map-marker-alt text-primary me-2" />{listdata.add}</p>
                                        </div>
                                        <div className="d-flex border-top">
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-primary me-2" />{listdata.sqft || '1000'} Sqft</small>
                                            <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-primary me-2" />{listdata.bed || '3'} Bed</small>
                                            <small className="flex-fill text-center py-2"><i className="fa fa-bath text-primary me-2" />{listdata.bath || '2'} Bath</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Attractive Update Form */}
                {
                    listupdate && (
                        <div className="mt-5">
                            <div className="card shadow-lg border-0">
                                <div className="card-header bg-gradient " style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'}}>
                                    <h4 className="card-title align-center   mb-0 d-flex  ">
                                        <i className="fa fa-edit me-2"></i>
                                        Update Property Details
                                    </h4>
                                </div>
                                <div className="card-body p-4" style={{background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}}>
                                    <form onSubmit={handleUpdateSubmit}>
                                        <div className="row g-4">
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input 
                                                        type="text" 
                                                        value={updatelist.badge} 
                                                        name="badge" 
                                                        onChange={handleUpdateChange} 
                                                        className="form-control shadow-sm border-0" 
                                                        id="Badge" 
                                                        placeholder="Sell/Rent"
                                                        style={{borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.9)'}}
                                                    />
                                                    <label htmlFor="Badge" className="text-primary fw-semibold">
                                                        <i className="fa fa-tag me-1"></i>Sell/Rent
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input 
                                                        type="text" 
                                                        value={updatelist.type} 
                                                        name="type" 
                                                        onChange={handleUpdateChange} 
                                                        className="form-control shadow-sm border-0" 
                                                        id="type" 
                                                        placeholder="Property Type"
                                                        style={{borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.9)'}}
                                                    />
                                                    <label htmlFor="type" className="text-primary fw-semibold">
                                                        <i className="fa fa-home me-1"></i>Property Type
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input 
                                                        type="text" 
                                                        value={updatelist.price} 
                                                        name="price" 
                                                        onChange={handleUpdateChange} 
                                                        className="form-control shadow-sm border-0" 
                                                        id="price" 
                                                        placeholder="Price"
                                                        style={{borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.9)'}}
                                                    />
                                                    <label htmlFor="price" className="text-primary fw-semibold">
                                                        <i className="fa fa-dollar-sign me-1"></i>Price
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-floating">
                                                    <input 
                                                        type="text" 
                                                        value={updatelist.img} 
                                                        name="img" 
                                                        onChange={handleUpdateChange} 
                                                        className="form-control shadow-sm border-0" 
                                                        id="img" 
                                                        placeholder="Image URL"
                                                        style={{borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.9)'}}
                                                    />
                                                    <label htmlFor="img" className="text-primary fw-semibold">
                                                        <i className="fa fa-image me-1"></i>Image URL
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <input 
                                                        type="text" 
                                                        value={updatelist.title} 
                                                        name="title" 
                                                        onChange={handleUpdateChange} 
                                                        className="form-control shadow-sm border-0" 
                                                        id="title" 
                                                        placeholder="Property Title"
                                                        style={{borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.9)'}}
                                                    />
                                                    <label htmlFor="title" className="text-primary fw-semibold">
                                                        <i className="fa fa-home me-1"></i>Property Title
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-floating">
                                                    <textarea 
                                                        className="form-control shadow-sm border-0" 
                                                        value={updatelist.add} 
                                                        name="add" 
                                                        onChange={handleUpdateChange} 
                                                        placeholder="Property Address" 
                                                        id="message" 
                                                        style={{ height: 120, borderRadius: '15px', backgroundColor: 'rgba(255,255,255,0.9)' }} 
                                                    />
                                                    <label htmlFor="message" className="text-primary fw-semibold">
                                                        <i className="fa fa-map-marker-alt me-1"></i>Property Address
                                                    </label>
                                                </div>
                                            </div>
                                            
                                            
                                            
                                            <div className="col-12">
                                                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                                    <button 
                                                        className="btn btn-outline-secondary px-4 py-2 me-md-2" 
                                                        type="button" 
                                                        onClick={() => setlistupdate(null)}
                                                        style={{borderRadius: '25px', fontWeight: '500'}}
                                                    >
                                                        <i className="fa fa-times me-1"></i>Cancel
                                                    </button>
                                                    <button 
                                                        className="btn px-4 py-2 text-white fw-semibold" 
                                                        type="submit"
                                                        style={{
                                                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                            borderRadius: '25px',
                                                            border: 'none',
                                                            boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)'
                                                        }}
                                                    >
                                                        <i className="fa fa-save me-1"></i>Update Property
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Listmanage