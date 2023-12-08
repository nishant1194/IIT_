import React from "react";
import Navbar from "../icl/Navbar";
import Slider1 from "../icl/Slider1";
import "./ResearchDayy.css";
import Footer from "../icl/Footer";
import Speaker23 from "../images/rsf23speaker.png";
import Rsf23 from "../images/rsf23.png";


function ResearchDay22() {
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
        <div className="container py-3 ">
          <div className="card mb-3">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={Speaker23}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "90%", width: "90%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body ">
                  <h1 className="card-title" >
                   Dr. N. Kannan
                  </h1>

                  <p className="card-text">
                    <h5 style={{alignItems:"center"}}>
                      
                      To delight us with his expertise and knowledge in every
                      way, we have the honourable Dr N. Kannan, Solution
                      director of Cadence Design Systems, as our chief guest. Dr
                      N. Kannan has more than 18 years of experience in the
                      domain of Physical Design Implementation and Signoff of
                      Digital VLSI Designs.
                    </h5>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

     

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
          src={Rsf23}
          alt="..."
          style={{ height: "48rem", width: "38rem" }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default ResearchDay22;
