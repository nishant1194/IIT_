import React from 'react'
import Navbar from '../icl/Navbar'
import Slider1 from '../icl/Slider1'
import './ResearchDayy.css'
import Footer from "../icl/Footer";
import Poster from "../images/PosterRSF.jpg"
function ResearchDay() {
  return (
    <div>

        <Navbar />
        <Slider1 />

       <section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
            <div className="line2"></div>
              <h1 style={{textAlign:"center"}}>Expert Talk</h1>
              <div className="line2"></div>
              <h1  style={{
                marginTop:"10px",
      fontStyle:"oblique",
      fontSize:"60px",
      textAlign:"center"

    }}>Coming soon ..... </h1>
            </div>
            
          </div>
        </div>
        
      </section>


 {/*<section >
    <div className="container py-5 ">
<div className="card mb-3" style={{maxWidth: "540px"}}>
  <div className="row g-0" >
    <div className="col-md-4">
      <img src={Gallary6} className="img-fluid rounded-start" alt="..." style={{height:"200px", width:"100%"}} />
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
</section>  */}


{/* <section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
            <div className="line2"></div>
              <h1 style={{textAlign:"center"}}>Event Schedule</h1>
              <div className="line2"></div>
            </div>
          </div>
        </div>
        
      </section> */}


{/* Event schedule Card */}

{/* 
    <div className="container py-5">
  <div className="row">
    <div className="col-md-12">
    
      <div id="content">
        <ul className="timeline-1 text-black">
          <li className="event" data-date="Yet to be confirmed">
            <h4 className="mb-3">Registration</h4>
            <p>Coming Soon.</p>
          </li>
          <li className="event" data-date="Tentative 9:00-10:00 AM">
            <h4 className="mb-3 pt-3">Opening Ceremony</h4>
            <p>Welcome Speech by our Satyam sir.</p>
          </li>
          <li className="event" data-date="10:00-5:00PM">
            <h4 className="mb-3 pt-3">Main Event</h4>
            <p>We have excited events for you guys. So be prepared for showing your skills</p>
          </li>
          <li className="event" data-date="10:00-5:00PM">
            <h4 className="mb-3 pt-3">Event 2</h4>
            <p>We have excited events for you guys. So be prepared for showing your skills</p>
          </li>
          <li className="event" data-date="10:00-5:00PM">
            <h4 className="mb-3 pt-3">Event 3</h4>
            <p>We have excited events for you guys. So be prepared for showing your skills</p>
          </li>
          <li className="event" data-date="8:30 - 9:30pm">
            <h4 className="mb-3 pt-3">Closing Ceremony</h4>
            <p className="mb-0">Result declearation and Prize destribution along with ThankU speech by Satyam sir.</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
 */}

<section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
            <div className="line2"></div>
              <h1 style={{textAlign:"center"}}>Event Description</h1>
              <div className="line2"></div>
            </div>
          </div>
        </div>
        
      </section>


<div className="container py-5 " style={{display:"flex" ,alignItems:"center" , justifyContent:"center"}}>
                    <img className="card-img-top" src={Poster} alt="..."  style={{height:"48rem" ,width:"38rem"}}/>
             </div>
          


<Footer />
     
      
    </div>
  )
}

export default ResearchDay
