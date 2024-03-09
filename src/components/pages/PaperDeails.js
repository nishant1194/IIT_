import React from 'react'
import Navbar from '../icl/Navbar'
import PaperRulebook  from '../images/PaperRulebook.jpeg'

function PaperDeails() {
  return (
    <div>
        <Navbar />
        <section style={{marginTop:"30px", textAlign:"center"}}>
        <div className="container ">
            <div className="row">
                <div className="col-md-12">
                    <p className=' ' style={{fontSize:"25px", textAlign:"center"}} >Format for paper presentation<a href='https://drive.google.com/file/d/1D4Lp5GMwaAFfgR_Z3tUbahUYDwLkLpOW/view?usp=drive_link'> Click here</a> </p>
                    <p className='' style={{fontSize:"25px", textAlign:"center"}}>Submit your paper presentation<a href='https://docs.google.com/forms/d/e/1FAIpQLSf_jZ27HrpkXmOBeiahZqsjupLqehAI2yhFbBvya06vrmztJg/viewform'>here</a></p>
                   
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
          src={PaperRulebook}
          alt="..."
          // style={{ height:"auto", width: "auto" }}
        />
        
      </div>

    </div>
  )
}

export default PaperDeails

