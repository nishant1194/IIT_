import React from 'react'
import PosterRulebook from "../images/PosterRulebook.jpeg"
import Navbar from '../icl/Navbar'
import './Homee.css' ;


function PosterDetails() {
  return (
    <div>

        <Navbar />
           {/* <section >
    <div className="container py-5 ">
<div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0" >
    <div className="col-md-4">
      <img src={Gallery6} className="img-fluid rounded-start" alt="..." style={{height:"200px", width:"100%"}} />
    </div>
    <div className="col-md-8">
      <div className="card-body text-center" >
        <h5 className="card-title"><h2>Expert</h2></h5>
        <p className="card-text"><h5> Dr. ABC</h5></p>
        <p>xyz college</p>
        
      </div>
    </div>
  </div>
</div>
</div>
</section>   */}
{/* 
      <section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
            <div className="line2"></div>
              <h1 style={{textAlign:"center"}}>Event Guidelines</h1>
              <div className="line2"></div>
            </div>
          </div>
        </div>
        
      </section> */}

      {/* Event schedule Card */}

 
    {/* <div className="container py-5">
  <div className="row">
    <div className="col-md-12">
    
      <div id="content">
        <ul className="timeline-1 text-black">
          <li className="event" data-date="">
            <h4 className="mb-3">Venue : LHC</h4>
          </li>
          <li className="event" data-date="">
            <h4 className="mb-3 pt-3">Time: 10:00am-12pm </h4>
           
          </li>
          <li className="event" data-date="">
            <h4 className="mb-3 pt-3">General Guidlines</h4>
            <p><li></li></p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div> */}

<section style={{marginTop:"30px", textAlign:"center"}}>
        <div className="container ">
            <div className="row">
                <div className="col-md-12">
                    <p className=' ' style={{fontSize:"25px", textAlign:"center"}} >Format for poster<a href='https://docs.google.com/presentation/d/1GIcT8Vi41iKvttLPIYpuFau2JJwQwgAb/edit#slide=id.p1'> Click here</a> </p>
                    <p className='' style={{fontSize:"25px", textAlign:"center"}}>Submit your poster <a href='https://docs.google.com/forms/u/1/d/e/1FAIpQLSd4EMqXFRMRhlf2JlFRAFxauyaZWUQXi-B4bUjEr51dtb04hg/viewform?usp=sf_link&urp=gmail_link'>here</a></p>
                   
                </div>
            </div>
        </div>
      </section>

 
<section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
            <div className="line2"></div>
              <h1 style={{textAlign:"center"}}>Rulebook</h1>
              <div className="line2"></div>
            </div>
          </div>
        </div>
        
      </section>
      <div
        className="container py-5 "
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          className="card-img-top"
          src={PosterRulebook}
          alt="..."
          // style={{ height:"auto", width: "auto" }}
        />
        
      </div>


    </div>
  )
}

export default PosterDetails
