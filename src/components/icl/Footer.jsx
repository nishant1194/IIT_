import React from "react";
import { Link } from "react-router-dom";



function Footer() {
  return (
    <div>
      <section className="py-5" style={{ background: "rgb(7,7,35)", color: "white" }}>
        <div className="container ">
          <div className="row">
            <div className="col-md-4">
              <h4>
                Follow Us
              </h4>
              <hr style={{backgroundColor :"white"}} />
              <div className="py-1"> <a className="text-decoration-none text-white" href="https://instagram.com/eersf_iitropar?utm_source=qr&igshid=MThlNWY1MzQwNA==" target="_blank">Instagram</a></div>
               <div className="py-1"> <a className="text-decoration-none text-white" href="https://www.linkedin.com/company/ee-rsf-iit-ropar/" target="_blank">LinkedIn</a> </div>
               {/* <div className="py-1"> <a className="text-decoration-none text-white" to="www.twitter.com">Twitter</a></div> */}
         

            </div>

            <div className="col-md-4">
              <h4>
               Quick Links
               </h4>
               <hr style={{backgroundColor :"white"}} />
               <div className="py-1"> <Link className="text-decoration-none text-white" to="/">Home </Link></div>
               <div className="py-1"> <Link className="text-decoration-none text-white" to="/contact">Contact</Link> </div>
               <div className="py-1"> <Link className="text-decoration-none text-white" to="/team">Team</Link></div>
               <div className="py-1"> <Link className="text-decoration-none text-white" to="/gallary">Gallery</Link></div>
          
            </div>
            <div className="col-md-4">
              <h4>
                Contact Us
              </h4>
              <hr style={{backgroundColor :"white"}} />
              <div> <p> <h6 style={{display:"inline"}}>Address:</h6> Department of Electric Engineering,<br /> JC Bose, Main campus IIT Ropar, Rupnagar, <br />Pin: 140001</p> </div>
              <div> <p><h6 style={{display:"inline"}}>Mobile:</h6> 9830069564</p> </div>
              <div> <p><h6 style={{display:"inline"}}>Email:</h6> ee.rsf.coord@iitrpr.ac.in</p> </div>



            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;





