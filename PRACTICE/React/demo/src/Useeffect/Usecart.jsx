import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Usecart() {
    const [data, setdata] = useState([])

    useEffect(() => {
        fetchdata()
    }, [])

    const fetchdata = async () => {
        const res = await axios.get("https://dummyjson.com/carts")
        // console.log(data)
        setdata(res.data.carts)


    }


    return (
        <div className='container'>

            <div className='row'>

                {
                    data && data.map((carts, index) => {

                        console.log(data)

                        return (
                            <div class="card" style= {{width:"300px"}}>
                                <img src= {carts.products?.[0]?.thumbnail} class="card-img-top" alt="Sunset Over the Sea" />
                                <div class="card-body">
                                    <p class="card-text">{carts.id}</p>
                                    <p className="card-text">User ID: {carts.userId}</p>
                                        <p className="card-text">Total: ${carts.total}</p>
                                        <p className="card-text">Items: {carts.totalProducts}</p>
                                        <p className="card-text">Quantity: {carts.totalQuantity}</p>
                                </div>
                            </div>
                        )
                    }
                    )
                }
            </div>

        </div>
    )
}

export default Usecart
