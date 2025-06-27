import React, { useEffect, useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Navdata from '../Acoman/Navdata'
import axios from 'axios'

function Blogmanage() {

    const [blogmanage, setblogmanage] = useState([])

    useEffect(() => {
        fetchdata()

    }, [])

    const fetchdata = async () => {
        const res = await axios.get("http://localhost:3000/blog")
        // console.log(res.data)
        setblogmanage(res.data)
    }

    return (
        <div>

            <Aheader />
            <Navdata title="Blogmanage" name="Blogs" />
             
            <div className='container pt-4' >
                <h1 className="text-center">This is blog manage</h1>
                <table className="table table-dark table-hover table-striped ">
                    <thead>
                        <tr className='text-center'>
                            <th scope="col">#ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Title</th>

                            <th scope="col">Date</th>
                            <th scope="col">Comment</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            blogmanage && blogmanage.map((data) => {
                                console.log(data)
                                return (
                                    <tr className='text-center'>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.title}</td>

                                        <td>{data.date}</td>
                                        <td>{data.comment}</td>
                                        <td  >
                                            <button className='btn btn-info'>View</button>
                                            <button className='btn btn-success mx-2'>Update</button>
                                            <button className='btn btn-danger'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                            )
                        }


                    </tbody>
                </table>
            </div>





        </div>
    )
}

export default Blogmanage
