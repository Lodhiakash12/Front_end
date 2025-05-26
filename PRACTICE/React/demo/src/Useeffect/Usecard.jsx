import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Usecard() {

    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://fakestoreapi.com/products")
        setdata(res.data)
    }
    console.log(data)
    return (
        <div className='container'>

            <div className='row'>

                 {
                    data && data.map((product, index) => {
                        const {image,title,price,description} = product
                        return (
                            <div className="col-md-4" key={index}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={image} style={{height:"300px"}} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{title}</h5>
                                          <h5 className="card-title">{price} $</h5>
                                        <p className="card-text">{description.slice(0,60)}</p>
                                        {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>



        </div>
    )
}

export default Usecard
