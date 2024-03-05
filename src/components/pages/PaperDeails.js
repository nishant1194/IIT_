import React from 'react'
import Navbar from '../icl/Navbar'
import PosterRulebook  from '../images/PaperRulebook.jpeg'

function PaperDeails() {
  return (
    <div>
        <Navbar />
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

export default PaperDeails
