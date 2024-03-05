import React from 'react'
import PosterRulebook from "../images/PosterRulebook.jpeg"
import Navbar from '../icl/Navbar'

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

export default PosterDetails ;
