import React, { useState } from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Addtest() {

    const redirect=useNavigate()

    const [test, settest] = useState({
        id: "",
        title: "",
        desc: "",
        name: ""
    })

    const getchange = (e) => {
        settest(
            {
                ...test,
                id: new Date().getTime().toString(),
                [e.target.name]: e.target.value
            }
        )
    }

    const getdata = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("http://localhost:3000/testimony", test)

            redirect("/")

            settest({
                id: "",
                title: "",
                desc: "",
                name: ""
            })
        } catch (error) {
            console.log("Api not Found")
        }
    }

    return (
        <div>
            <Header />
            <Navbar title="ADD TESTIMONY" name="Testimony" />
            <div className="col-md-12 container my-5">
                <div className="wow fadeInUp" data-wow-delay="0.5s">

                    <h2 className='text-center pb-4'>Add Testimony</h2>

                    <form onSubmit={getdata}>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" value={test.name} name='name' onChange={getchange} className="form-control" id="name" placeholder="Your Name" />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" value={test.title} name='title' onChange={getchange} className="form-control" id="profession" placeholder="Your Profession" />
                                    <label htmlFor="profession">Your Profession</label>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea value={test.desc} name='desc' onChange={getchange} className="form-control" placeholder="Leave a message here" id="message" style={{ height: 150 }} />
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Send Testimony</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />

        </div>
    )
}

export default Addtest