import React, { useState } from 'react'

export default function Form() {



  const [data, setdata] = useState({

    username: "",
    email: ""

  })


  const getchange= (e) =>{
    setdata({
      ...data,
      [e.target.name]:e.target.value
    })
  }


  return (
    <div>

      {/* <label htmlFor="">username:</label>
      <input type="text" placeholder="enter Username" value={data.username}  onChange={(e) => setdata({ ...data, username: e.target.value })} />

      <label htmlFor="">Email</label>
      <input type="text" placeholder="enter Email" value={data.email}  onChange={(E) => setdata({...data,email:E.target.value})} /> */}


       <form action="">
                            <div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput2" className="form-label">Enter your Name</label>
                                    <input type="text" name='name' value={data.name} onChange={getchange} className="form-control" id="exampleFormControlInput2" placeholder="Enter your name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" name='email' value={data.email} onChange={getchange} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput3" className="form-label">Enter your number</label>
                                    <input type="tel" name='phone' value={data.phone} onChange={getchange} className="form-control" id="exampleFormControlInput3" placeholder="Enter your number" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput4" className="form-label">Enter your Password</label>
                                    <input type="password" name='password' value={data.password} onChange={getchange} className="form-control" id="exampleFormControlInput4" placeholder="Enter your Password" />
                                </div>
                                <div>
                                    <input type="submit" />
                                </div>MN
                            </div>
                        </form>


    </div>
  )
}


