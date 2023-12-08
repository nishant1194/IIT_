import React from "react";
import Navbar from "../icl/Navbar";
import "./Sponser.css";
import IEEE from "../images/IEEE_logo.svg.png"


function Sponser() {
  return (
    <div>
      <Navbar />

      <section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="line2"></div>
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "4px",
                  fontSize: "40px",
                }}
              >
                Sponsors
              </h1>
              <div className="line2"></div>
            </div>

            
              <div className="container py-5 " style={{display:"flex" ,alignItems:"center" , justifyContent:"center"}}>
                      <img className="card-img-top" src={IEEE} alt="..." style={{ width: "18rem" }}/>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponser;
