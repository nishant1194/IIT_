import React from "react";
import Navbar from "../icl/Navbar";
import Slider1 from "../icl/Slider1";
import Footer from "../icl/Footer";
import './Contactt.css'

function Contact() {
  return (
    <div >
      <Navbar />
      <Slider1 />
      <section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
            <div className="line2"></div>
              <h1 style={{textAlign:"center"}}>Contact Us</h1>
              <div className="line2"></div>
              <p className="py-3 para">
                <h3 className="py-5" style={{textAlign:"center"}}>For any query, suggestion, feedback or complaint,<br /> you can reach out to us.</h3>
              </p>
              <p className="para">
                
              </p>
              <p className="para" style={{textAlign:"center"}} >
                <h5 style={{display:"inline"}}> Email id:</h5>ee.rsf.coord@iitrpr.ac.in
                <br />
                <h5 style={{display:"inline"}}> Mob:</h5>9830069564
              </p>
              
               
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
