import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Useaxios() {

  const [data, setdata] = useState([])

  useEffect(() => {
    fetchdata()

  }, [])


  const fetchdata = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users")
    // console.log(res.data)
    setdata(res.data)
  }
  console.log(data)

  return (
    <div>

      <table>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">name</th>
            <th scope="col">Email</th>
            <th scope="col">phone</th>
            <th scope="col">company</th>
            <th>Website</th>
          </tr>
        </thead>
       <tbody>
          {
            data && data.map((user, index) => {
              console.log(user)
              const {id,name,email,phone,company,website} = user
              return (
                <tr key={index}>
                  <th scope="row">{id}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{company.name}</td>
                  <td>{website}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
  )
}

export default Useaxios
