import React from "react";
import Navbar from "../icl/Navbar";
import "./Sponser.css";
import IEEEropar from "../images/IEEE IIT Ropar logo_cropped.png"
import Agmatel from "../images//Agmatell.png" ;
import Rigol from "../images/rigol new logo_black no tag-01 (1).png" ;
import Keysight from "../images/keysight-technologies-vector-logo-2022-small.png" ;
import IeeeCom from "../images/IEEE ComSoc.png" ;
import IeeeVTS from "../images/IEEE_VTS logo.png" ;


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
                      <img className="card-img-top mx-4" src={IeeeCom} alt="..." style={{ width: "18rem" }}/>
                      <img className="card-img-top mx-4" src={IEEEropar} alt="..." style={{ width: "18rem" }}/>
                      <img className="card-img-top mx-4" src={IeeeVTS} alt="..." style={{ width: "18rem" }}/>
                     

             </div>

             <div className="container " style={{display:"flex" ,alignItems:"center" , justifyContent:"center"}}>
                      
                      <img className="card-img-top mx-4" src={Keysight} alt="..." style={{ width: "18rem" }}/>
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


