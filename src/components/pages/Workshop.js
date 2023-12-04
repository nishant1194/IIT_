import React from "react";
import Navbar from "../icl/Navbar";
import Slider1 from "../icl/Slider1";
import Footer from "../icl/Footer";
import Gallary6 from "../gallaryimg/gallary6.jpg";
import Pratush from "../images/Pratush.jpg";

// import "./ResearchDayy.css";

function Workshop() {
  return (
    <div>
      <Navbar />
      <Slider1 />

      <section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="line2"></div>
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "4px",
                  fontSize: "50px",
                }}
              >
                Workshop
              </h1>
              <div className="line2"></div>
            </div>
          </div>
        </div>
      </section>

          <section>
            <div className="container py-3 ">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={Pratush}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body ">
                      <h5 className="card-title">
                        <h2>Matlab tutorial on AI/ML, Comm. system, SDR Protyping.</h2>
                      </h5>
                      
                      <p className="card-text">
                        <h5> Speaker: Pratyush Gautam </h5>
                      </p>
                    
                      <p className="card-text">
                        <h5> Venue: Department of Electrical Engineering , IIT Ropar.</h5>
                      </p>
                      <div class="mb-1 text-muted card-text">April 7th, 2023 </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>



          <section>
            <div className="container  ">
              <div className="card mb-3">
                <div className="row g-0">
  
                  <div className="col-md-8">
                    <div className="card-body ">
                      <h5 className="card-title">
                        <h2>Workshop on Explore ML Crowdsource.</h2>
                      </h5>
                      
                      <p className="card-text">
                        <h5> Speaker: Mr. Vassu</h5>
                      </p>
                      <p className="card-text">
                        <h5> Venue: Department of Electrical Engineering , IIT Ropar.</h5>
                      </p>
                      <div class="mb-1 text-muted">Sep 23, 2023</div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <img
                      src={Gallary6}
                      className="img-fluid rounded-start"
                      alt="..."
                      style={{ height: "100%", width: "100%" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        

      {/* Coming soon */}

      {/* <div className="container py-5">

         
  <div className="row">
    <div className="col-md-12">
    <h1 style={{
      fontStyle:"oblique",
      fontSize:"60px",
      textAlign:"center"

    }}>Coming soon ..... </h1>
     
    </div>
  </div>
        </div>  */}

      <Footer />
    </div>
  );
}

export default Workshop;
