import React, { useEffect, useState } from 'react'
import Navb from '../Common/Navb'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import axios from 'axios'

function Team() {

  const [teams, setteams] = useState([])

  useEffect(() => {
    fetchdata()

  }, [])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/team")
    console.log(res.data)
    setteams(res.data)
  }

  return (
    <div>
      <Header />

      <Navb title="Team" name="Team" />
      {/* Team Start */}
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 800 }}>
            <h1 className="display-5 text-capitalize mb-3">Customer<span className="text-primary"> Suport</span> Center</h1>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio,
            </p>
          </div>
          <div className="row g-4">
           {
            teams && teams.map((data) =>{
              console.log(data)


              return(
                 <div className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay="0.1s">
              <div className="team-item p-4 pt-0">
                <div className="team-img">
                  <img src={data.img}  style={{height:"200px"}} className="img-fluid rounded w-100 object-fit-contain" alt="Image" />
                </div>
                <div className="team-content pt-4">
                  <h4>{data.name}</h4>
                  <p>{data.desc}</p>
                  <div className="team-icon d-flex justify-content-center">
                    <a className="btn btn-square btn-light rounded-circle mx-1" href><i className="fab fa-facebook-f" /></a>
                    <a className="btn btn-square btn-light rounded-circle mx-1" href><i className="fab fa-twitter" /></a>
                    <a className="btn btn-square btn-light rounded-circle mx-1" href><i className="fab fa-instagram" /></a>
                    <a className="btn btn-square btn-light rounded-circle mx-1" href><i className="fab fa-linkedin-in" /></a>
                  </div>
                </div>
              </div>
            </div>
              )
        
            })
           }
             
          </div>
        </div>
      </div>
      {/* Team End */}
      <Footer />
    </div>

  )
}

export default Team
