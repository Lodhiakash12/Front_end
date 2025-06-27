import React, { useState } from 'react'
import Aheader from '../Acoman/Aheader'
import Navdata from '../Acoman/Navdata'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Blogadd() {


    const redirect = useNavigate()

    const [form, setform] = useState({
        id: "",
        title: "",
        desc: "",
        comment: "",
        name: "",
        date: "",
        img: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            // Set New ID
            id: new Date().getTime().toString(),
            [e.target.name]: e.target.value  // Fixed: removed array brackets
        })
    }

    // Submit form
    const bloghandle = async (e) => {
        // Prevent refresh
        e.preventDefault()

         // Simple validation
        if (form.name === '') {
            alert("Name is required")
            return
        }
        if (form.date === '') {
            alert("Date is required")
            return
        }
        if (form.img === '') {
            alert("Image URL is required")
            return
        }
        if (form.comment === '') {
            alert("Comment is required")
            return
        }
        if (form.title === '') {
            alert("Title is required")
            return
        }
        if (form.desc === '') {
            alert("Description is required")
            return
        }

        try {

            
                     
            // Fixed: send form data in the request body
            const res = await axios.post("http://localhost:3000/blog", form)
            console.log("Blog added successfully:", res.data)

            redirect("/Blogmanage")

            
            
            // Clear the form after successful submission
            setform({
                id: "",
                title: "",
                desc: "",
                comment: "",
                name: "",
                date: "",
                img: ""
            })
        } catch (error) {
            console.error("Error adding blog:", error)
            // Handle error appropriately (show user feedback)
        }
    }

    return (
        <>
            <div>
                <Aheader />
                <Navdata title="Add Blog" name="Add Blog" />
                <div className="container bg-secondary my-5 py-5 rounded">
                    <h4 className="text-primary mb-4">Send Your Message</h4>
                    <form onSubmit={bloghandle}>
                        <div className="row g-4">
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input 
                                        type="text" 
                                        value={form.name} 
                                        name="name" 
                                        onChange={getchange} 
                                        className="form-control" 
                                        id="name" 
                                        placeholder="Your Name" 
                                    />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input 
                                        type="date" 
                                        value={form.date} 
                                        name="date" 
                                        onChange={getchange} 
                                        className="form-control" 
                                        id="date" 
                                        placeholder="Date" 
                                    />
                                    <label htmlFor="date">Date</label> {/* Fixed: changed htmlFor to match id */}
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input 
                                        type="text" 
                                        value={form.img} 
                                        name="img" 
                                        onChange={getchange} 
                                        className="form-control" 
                                        id="image" 
                                        placeholder="Image URL" 
                                    />
                                    <label htmlFor="image">Your Image URL</label> {/* Fixed: changed htmlFor to match id */}
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-6">
                                <div className="form-floating">
                                    <input 
                                        type="text" 
                                        value={form.comment} 
                                        name="comment" 
                                        onChange={getchange} 
                                        className="form-control" 
                                        id="comment" 
                                        placeholder="Comment" 
                                    />
                                    <label htmlFor="comment">Your Comment</label> {/* Fixed: changed htmlFor to match id */}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input 
                                        type="text" 
                                        value={form.title} 
                                        name="title" 
                                        onChange={getchange} 
                                        className="form-control" 
                                        id="title" 
                                        placeholder="Title" 
                                    />
                                    <label htmlFor="title">Title</label> {/* Fixed: changed htmlFor to match id */}
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea 
                                        className="form-control" 
                                        value={form.desc} 
                                        name="desc" 
                                        onChange={getchange} 
                                        placeholder="Leave a message here" 
                                        id="message" 
                                        style={{ height: 160 }}
                                    />
                                    <label htmlFor="message">Description</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-light w-100 py-3" type="submit">
                                    Add Blog
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Blogadd