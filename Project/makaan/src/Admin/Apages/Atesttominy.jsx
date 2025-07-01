import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Anav from '../Acoman/Anav'
import Footer from '../../Website/Common/Footer'
import axios from 'axios'

function Atesttominy() {

    const [test, settest] = useState([])

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        const res = await axios.get("http://localhost:3000/testimony")
        console.log(res.data)
        settest(res.data)
    }

    //api
    const [testlist, settestlist] = useState({
        id: "",
        title: "",
        desc: "",
        name: ""
    })

    //view data
    const viewdata = async (id) => {
        const res = await axios.get(`http://localhost:3000/testimony/${id}`)
        settestlist(res.data)
    }


    //delete data

     const deletedata = async (id) => {
        const res = await axios.delete(`http://localhost:3000/testimony/${id}`)
        settestlist(res.data)
    }

    return (
        <div>

            <Aheader />
            <Anav title="MANAGE TESTIMONY" name="Testimont" />

            <table className="table">
                <thead className='text-center'>
                    <tr>
                        <th scope="col">#ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Profession</th>
                        <th scope="col">Desc</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>

                    {
                        test && test.map((data) => {
                            return (
                                <tr key={data.id}>
                                    <th scope="row">{data.id}</th>
                                    <td>{data.name}</td>
                                    <td>{data.title}</td>
                                    <td>{data.desc}</td>
                                    <td>
                                        <button className='btn btn-info' data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => viewdata(data.id)}>View</button>
                                        <button className='btn btn-danger mx-2' onClick={() => deletedata(data.id)} >Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <div className="modal fade mt-5 pt-5" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content text-center ">
                        <div className="modal-header">
                            <h4 className="modal-title " id="exampleModalLabel" >Testimonies</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body ">

                            <div className="card " style={{ width: '18rem',margin:"0 auto" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{testlist.title}</h5>
                                    <p className="card-text">{testlist.desc}</p>
                                    <a  className="btn btn-primary">{testlist.name}</a>
                                </div>
                            </div>

                        </div>
                        <div className="text-center my-2">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Atesttominy