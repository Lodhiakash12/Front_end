import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Table() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://dummyjson.com/users")
        setdata(res.data.users)
    }
    return (
        <div className='container'>
            <table border={5}>
                <thead>

                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>eamil</th>
                        <th>age</th>
                        <th>gender</th>
                    </tr>


                </thead>

                <tbody>
                    {
                        data && data.map((users, index) => {
                            return (
                                <tr>
                                    <td>{users.id}</td>
                                    <td>{users.firstName}</td>
                                    <td>{users.email    }</td>
                                    <td>{users.age}</td>
                                    <td>{users.gender}</td>
                                </tr>


                            )
                        })

                    }
                </tbody>
            </table>


        </div>
    )
}

export default Table
