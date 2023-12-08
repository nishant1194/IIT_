import React from "react";
import Navbar from "../icl/Navbar";
import Slider1 from "../icl/Slider1";
import Footer from "../icl/Footer";
import "./ResearchDayy.css";
import AbhayShah from "../images/AbahyShah.jpg";
import Narayan from "../images/Narayan_Tripathi.jpg";
import BFrenandes from "../images/BFrenandes.jpg";
import Capture from "../images/Capture.jpg";
import Capture1 from "../images/Capture1.jpg";
// import Capture2 from "../images/Capture2.jpg";
import Capture3 from "../images/Capture3.jpg";
import Capture4 from "../images/Capture4.jpg";
import Capture5 from "../images/Capture5.jpg";
import Capture6 from "../images/Capture6.jpg";
// import Capture7 from "../images/Capture7.jpg";
// import Capture8 from "../images/Capture8.jpg";



function InvitedTalkSeries() {
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
                Invited Talk Series
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
                  src={Capture}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "240px", width: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body ">
                  <h5 className="card-title">
                    <h2>From MOSFETs to MIS-HEMTs-an evolution.</h2>
                  </h5>

                  <p className="card-text">
                    <h5> Speaker: Amitava DasGupta.</h5>
                  </p>

                  <div class="mb-1 text-muted card-text">Dec 4, 2021</div>
                  <p>
                    Dr.Amitava DasGupta received the B.E. degree in Electronics
                    and Telecommunication Engineering from Jadavpur
                    University,Kolkata, India in 1982, M.Tech degree in
                    Electrical Engineering from I.I.T. Madras in 1984 and Ph.D
                    from I.I.T. Kharagpur in 1988.
                  </p>
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
                    <h2>
                      {" "}
                      Emerging challenges and opportunities in a power system
                      (Role of digitization).
                    </h2>
                  </h5>

                  <p className="card-text">
                    <h5> Speaker: Dr. Subrat Sahoo.</h5>
                  </p>

                  <div class="mb-1 text-muted">Jan 25, 2023</div>
                  <p>
                    {/* Dr.Amitava DasGupta received the B.E. degree in Electronics
                    and Telecommunication Engineering from Jadavpur
                    University,Kolkata, India in 1982, M.Tech degree in
                    Electrical Engineering from I.I.T. Madras in 1984 and Ph.D
                    from I.I.T. Kharagpur in 1988. */}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={Capture1}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
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
                  src={AbhayShah}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "200px", width: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body ">
                  <h5 className="card-title">
                    <h2>Signal Detection in Cell-Free Massive MIMO Systems</h2>
                  </h5>

                  <p className="card-text">
                    <h5> Speaker: Abhay Kumar sah.</h5>
                  </p>

                  <p className="card-text">
                    <h5> </h5>
                  </p>
                  <div class="mb-1 text-muted card-text">Feb 16, 2023 </div>
                  <p>
                  Dr. Abhay kumar sah had done his Ph.D. from IIT Kanpur in 2017. Wireless Communication, 5G and beyond Systems, Next Generation Massive MIMO Systems, Intelligent Wireless Systems, Applications of AI and Deep Learning. 
                  </p>
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
                    <h2>
                      Monitoring solar effect with cubesats on cosmic ray at sea
                      level.
                    </h2>
                  </h5>

                  <p className="card-text">
                    <h5> Speaker: Ashwin Ashok.</h5>
                  </p>
                  <p className="card-text">
                    <h5> </h5>
                  </p>
                  <div class="mb-1 text-muted">Oct 18, 2022</div>
                  <p>
                  Associate professor, Department of
                  Computer Science, Georgia State University
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={Capture3}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
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
                  src={Capture4}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body ">
                  <h5 className="card-title">
                    <h2>Intelligent receiver and future communication system.</h2>
                  </h5>

                  <p className="card-text">
                    <h5> Speaker: Sudhan Majhi, Associate professor.</h5>
                  </p>

                  <p className="card-text">
                    <h5> </h5>
                  </p>
                  <div class="mb-1 text-muted card-text">Feb 8, 2022 </div>
                  <p>
                  Department of Electrical Engineering, IISc Bangalore
                  </p>
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
                    <h2>
                    Digital Energy Transformation and Green Transition.
                    </h2>
                  </h5>

                  <p className="card-text">
                    <h5> Speaker: Prof. Sri Niwas Singh, Director.</h5>
                  </p>
                  <p className="card-text">
                    <h5> </h5>
                  </p>
                  <div class="mb-1 text-muted">July 22, 2023</div>
                  <p>
                  Atal Bihari Bajpayee - Indian Institute of Information Technology and management, Gwalior.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={Capture5}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
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
                  src={Capture6}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body ">
                  <h5 className="card-title">
                    <h2>Industrial 5G
</h2>
                  </h5>

                  <p className="card-text">
                    <h5> Speaker: Bighnaraj Panigrahi.</h5>
                  </p>

                  <p className="card-text">
                    <h5> </h5>
                  </p>
                  <div class="mb-1 text-muted card-text">Oct 16, 2021 </div>
                  <p>
                  {/* Department of Electrical Engineering, IISc Bangalore */}
                  </p>
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
                    <h2>
                   Research Trends and Techniques in B5G/6G Wireless Communications and SWIPT
                    </h2>
                  </h5>

                  <p className="card-text">
                    <h5> Speaker: Prof. Sumit Gautam (Assistant Professor at IIT Indore).
</h5>
                  </p>
                  <p className="card-text">
                    <h5> </h5>
                  </p>
                  <div class="mb-1 text-muted">July 7, 2023</div>
                  <p>
                  {/* Atal Bihari Bajpayee - Indian Institute of Information Technology and management, Gwalior. */}
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={Capture6}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
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
                  src={Narayan}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body ">
                  <h5 className="card-title">
                    <h2>Challenges in Next generation chip design </h2>
                  </h5>

                  <p className="card-text">
                    <h5> Speaker: Jai Narayan Tripathi.</h5>
                  </p>

                  <p className="card-text">
                    <h5> </h5>
                  </p>
                  <div class="mb-1 text-muted card-text">April 7th, 2023 </div>
                  <p>
                  {/* Department of Electrical Engineering, IISc Bangalore */}
                  </p>
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
                    <h2>
                  My experience from the past, Electric machines and Research Scholars
                    </h2>
                  </h5>

                  <p className="card-text">
                    <h5> Speaker: B.G.Fernandes..</h5>
                  </p>
                  <p className="card-text">
                    <h5> </h5>
                  </p>
                  <div class="mb-1 text-muted">May 14, 2023</div>
                  <p>
                  Prof. B.G.Fernandes had done his Ph.D from Indian Institute of Technology Bombay, India, 1993. His research ineterst lies in Inverter topologies for VAr compensation, Power electronic interface for non-conventional energy sources etc.
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src={BFrenandes}
                  className="img-fluid rounded-start"
                  alt="..."
                  style={{ height: "220px", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

export default InvitedTalkSeries;
