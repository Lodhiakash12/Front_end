import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteuser, showuser } from '../Slicedata/userSlice'
import { Link } from 'react-router-dom'

function Read() {
    const user = useSelector((state) => state.users.user)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(showuser())
    }, [dispatch])

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user && Array.isArray(user) && user.length > 0 ? (
                            user.map((data, index) => {
                                return (
                                    <tr key={data.id || index}>
                                        <th scope="row">{data.id}</th>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>
                                            <button className="btn btn-info btn-sm me-2">View</button>
                                            <button  className="btn btn-warning btn-sm me-2 ">
                                                <Link to="/update">Update</Link>
                                            </button>
                                            <button className="btn btn-danger btn-sm" onClick={()=>dispatch(deleteuser(data.id))}  >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    {user ? 'No users found' : 'Loading...'}
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Read