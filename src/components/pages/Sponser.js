import React from "react";
import Navbar from "../icl/Navbar";
import "./Sponser.css";
import IEEE from "../images/IEEE_logo.svg.png"
import Agmatel from "../images/Agmatel.jpeg" ;
import Rigol from "../images/Rigol.jpeg" ;
import Keysight from "../images/Keysight.jpeg" ;
import IeeeD from "../images/IeeeDelhi.jpeg" ;


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

            
              <div className="container " style={{display:"flex" ,alignItems:"center" , justifyContent:"center" , paddingTop:"50px"}}>
                      <img className="card-img-top mx-4" src={IEEE} alt="..." style={{ width: "18rem" }}/>
                      <img className="card-img-top mx-4" src={IeeeD} alt="..." style={{ width: "18rem" }}/>
                      <img className="card-img-top mx-4" src={Keysight} alt="..." style={{ width: "18rem" }}/>
                     

             </div>

             <div className="container " style={{display:"flex" ,alignItems:"center" , justifyContent:"center"}}>
                      
                      <img className="card-img-top mx-4" src={Rigol} alt="..." style={{ width: "18rem" }}/>
                      <img className="card-img-top mx-4" src={Agmatel} alt="..." style={{ width: "18rem" }}/>

             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sponser;

