import React from "react";
import Navbar from "../icl/Navbar";
import Slider1 from "../icl/Slider1";
import Footer from "../icl/Footer";
import "./Teamm.css";
import Annadhu from "../images/Annadhu.jpg"
import Satyam from "../images/Satyamsir.jpg"
import Annima from "../images/Annima.jpg"
import Sagnikk from "../images/Sagnikpresi.jpg"
import Nishant from "../images/Nishant.jpeg"
import Shiv from "../images/Shiv.jpg"
import Shiv_socialmedia from "../images/Shiv_socialmedia.jpg"
import Suraj from "../images/Suraj.jpeg"
import Shivam from "../images/Shivam.jpg"
import Ranjeet from "../images/Ranjeet.jpg"
import Ankush from "../images/Ankush.jpg"
import Azhar from "../images/Azhar.jpg"
import Praveen from "../images/Praveen.jpg"
import Kisor from "../images/kisor.jpeg"







function Team() {
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
                RSF-EE Team
              </h1>
              <div className="line2"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="line2"></div>
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "4px",
                  fontSize: "30px",
                }}
              >
                Facality Co-ordinator
              </h1>
              <div className="line2"></div>
            </div>
          </div>
        </div>
      </section>



      <section>
        <div className="container text-center ">
          <div className="row row-cols-1 row-cols-md-3 g-4 ">
            <div className="col facultyy">
              <div className="card">
                <img
                  src={Satyam}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Dr. SATYAM AGARWAL
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                    Assistant Professor,
                    <br />
                    Department of Electrical Engineering, IIT Ropar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* executive team */}

      <section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="line2"></div>
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "4px",
                  fontSize: "30px",
                }}
              >
                Executive Team
              </h1>
              <div className="line2"></div>
            </div>
          </div>
        </div>
      </section>


{/* cards */}
               

      <section>
        <div className="container text-center py-1">
          <div className="row row-cols-1 row-cols-md-3 g-4">

          <div className="col" >
              <div className="card">
                <img
                  src={Sagnikk}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                   Sagnik Bhattacharyya
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                    President of RSF<br /> <span style={{visibility:"hidden"}}>....</span>
                  </p>
                </div>
              </div>
            </div>

             {/* demonstration */}
             <div className="col">
              <div className="card">
                <img
                  src={Suraj}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
               
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Suraj
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                    Coordinator <br/> Demonstration
                  </p>
                </div>
              </div>
            </div>

           
            
              {/* postr presentation */}
          <div className="col">
              <div className="card">
                <img
                  src={Shiv}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
               
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Shiv Kumar
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                    Coordinator <br/> Poster Presentation
                  </p>
                </div>
              </div>
            </div>

          
           
          </div>
        </div>



      </section> 







      <section>

       

        <div className="container text-center py-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
           
  
          

           
            
            {/* circuit design */}

            <div className="col">
              <div className="card">
                <img
                  src={Shivam}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
               
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Shivam
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                    Coordinator <br/> Circuit Design
                  </p>
                </div>
              </div>
            </div>


            <div className="col" >
              <div className="card">
                <img
                  src={Praveen}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                   Praveen
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                    Member <br/> Circuit Design
                  </p>
                </div>
              </div>
            </div>

           
             
             {/* event management */}

            <div className="col">
              <div className="card">
                <img
                  src={Kisor}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Kishor
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                  Coordinator <br/> Event Managment
                  </p>
                </div>
              </div>
            </div>


            
            
          </div>
        </div>
    </section>



    <section>
        <div className="container text-center ">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card">
                <img
                  src={Shiv_socialmedia}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Shiv Kumar
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                    Coordinatior <br /> Social media and Web designing
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src={Nishant}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Nishant
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                  Member <br/> Web Manager
                  </p>
                </div>
              </div>
            </div>
         
            
            <div className="col">
              <div className="card">
                <img
                  src={Ankush}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Ankush
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                  Member <br/> Social media and Web designing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>








    <section>
        <div className="container text-center py-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">

          <div className="col" >
              <div className="card">
                <img
                  src={Annadhu}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                  Anandhu
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                  Coordinator <br/> Publicity
                  </p>
                </div>
              </div>
            </div>

          <div className="col">
              <div className="card">
                <img
                  src={Annima}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Annima Gupta
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                  Coordinator <br/> Alumini Relation
                  </p>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card">
                <img
                  src={Ranjeet}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Ranjeet
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                Member <br/> Alumini Relation
                  </p>
                </div>
              </div>
            </div>

             

          </div>
        </div>
    </section>

    <section>
        <div className="container text-center " style={{marginBottom:"60px"}}>
          <div className="row row-cols-1 row-cols-md-3 g-4">

          <div className="col">
              <div className="card">
                <img
                  src={Azhar}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Azhar
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                  Member <br/> Publicity
                  </p>
                </div>
              </div>
            </div>

            <div className="col" style={{visibility:"hidden"}}>
              <div className="card">
                <img
                  src={Ranjeet}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                    Ranjeet
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                Member <br/> Alumini Relation
                  </p>
                </div>
              </div>
            </div>

              <div className="col"style={{visibility:"hidden"}}>
              <div className="card">
                <img
                  src={Annadhu}
                  className="card-img-top"
                  alt="..."
                  style={{
                    height: "250px",
                    width: "250px",
                    borderRadius: "50%",
                    margin: "auto",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "25px" }}>
                  Anandhu
                  </h5>
                  <p className="card-text" style={{ fontSize: "20px" }}>
                  Coordinator <br/> Publicity
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
    </section>


    


            











      
 

      <Footer />
    </div>
  );
}

export default Team;


