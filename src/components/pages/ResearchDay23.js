import React from 'react'
import Navbar from '../icl/Navbar'
import Slider1 from '../icl/Slider1'
import './ResearchDayy.css'
import Footer from "../icl/Footer";
import Speaker22 from "../images/SpeakerRsf22.jpeg";
import Rsf22 from "../images/Rsf22.jpeg";
function ResearchDay23() {
  return (
    <div>
    <Navbar />
    <Slider1 />

    <section className="py-5">
      <div className="container ">
        <div className="row">
          <div className="col-md-12">
            <div className="line2"></div>
            <h1 style={{ textAlign: "center" }}>Expert Talk</h1>
            <div className="line2"></div>
           
          </div>
        </div>
      </div>
    </section>

    <section>
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
        src={Speaker22}
        alt="..."
        style={{ height: "48rem", width: "38rem" }}
      />
    </div>
    </section>

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
            <h1 style={{ textAlign: "center" }}>Event Description</h1>
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
        src={Rsf22}
        alt="..."
        style={{ height: "48rem", width: "38rem" }}
      />
    </div>

    <Footer />
  </div>
  )
}

export default ResearchDay23
