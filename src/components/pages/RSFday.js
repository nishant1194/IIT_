import React from "react";
import Navbar from "../icl/Navbar";
import Slider1 from "../icl/Slider1";
import "./RSFday.css";
import Footer from "../icl/Footer";
function RSFday() {
  return (
    <div>
      <Navbar />
      <Slider1 />

      <section className="py-5">
        <div className="container ">
          <div className="row">
            <div className="col-md-12">
              <div className="line2"></div>
              <div
                className="about"
                style={{
                  textAlign: "center",
                  marginTop: "4px",
                  fontSize: "30px",
                  fontWeight: "500",
                }}
              >
                Research Scholar Forum(RSF) Day : Igniting, Innovation and Collaboration
              </div>
              <div className="line2"></div>

              <div className="heading intro py-3">INTRODUCTION : </div>

              <p className="para">
                Welcome to the Research Scholar Forum (RSF) Day, a premier event
                showcasing the cutting-edge research and creativity of our
                institute's brightest minds! RSF Day is an annual celebration of
                intellectual exploration, where passionate scholars have the
                opportunity to share their groundbreaking work, forge valuable
                connections, and ignite impactful collaborations. "We warmly
                invite students from neighboring institutes to participate in
                RSF Day! Take advantage of this platform to share your research,
                compete for awards, and connect with peers and experts from
                across the region."
              </p>

              <div className="heading ">AGENDA : </div>

              <p className="para py-3">
                RSF Day is a day packed with dynamic activities designed to
                inspire, challenge, and connect:
                <br />
                <span className="morning"> Morning:</span> The day gets
                kickstarter with thought-provoking keynotes and panel
                discussions featuring renowned academics and industry experts.
                These sessions offer invaluable insights into cutting-edge
                research trends, industry perspectives, and career
                opportunities.
              </p>
              <p className="para">
                <span className="morning"> Afternoon:</span> The afternoon comes
                alive with a vibrant showcase of student research through:
              </p>
              <p className="para ">
                <ul className="">
                  <li className="py-2">
                    Research Poster Presentations: Scholars get to present their
                    research findings in compelling visual formats, fostering
                    interactive discussions and feedback from peers and experts
                    (Winners will be awarded prizes for Best Overall Poster,
                    Most Innovative Approach, and Outstanding Communication.)
                  </li>
                  <li className="py-1">
                    Circuit Designing Competition: Budding innovators put their
                    engineering skills to the test, designing and building
                    functional circuits, judged for creativity, efficiency, and
                    real-world applicability. (Top teams will be recognized with
                    awards for Best Design, Most Innovative Solution, and
                    Outstanding Functionality.)
                  </li>
                  <li className="py-2">
                    Project/Idea Demonstration: A platform for scholars to
                    showcase their innovative ideas and prototypes, sparking
                    collaborations and potential funding opportunities. (Judges
                    will select the most promising and impactful ideas for
                    awards, encouraging entrepreneurial spirit and future
                    development.)
                  </li>
                  <li className="py-2">
                    Expert Talks: Esteemed speakers from academia and industry
                    will share their insights, providing valuable perspectives
                    on current trends and future directions in research and
                    technology.
                  </li>
                  <li className="py-2">
                    Networking Lunch: An opportunity for all attendees to
                    network, exchange ideas, and build connections over a shared
                    meal.
                  </li>
                  <li className="py-2">and many more... </li>
                </ul>
              </p>
              <div className="heading ">END GOAL :</div>

              <p className="para py-3">
                RSF Day is more than just an event; it's a catalyst for:
                Empowering Student Research: We provide a platform for scholars
                to gain valuable feedback, refine their research, and build
                confidence in presenting their work to a wider audience.
                <br />
                Bridging the Academia-Industry Gap: By featuring experts from
                both academia and industry, we facilitate knowledge exchange,
                fostering collaborations that bridge the gap between theoretical
                research and practical implementation.
                <br />
                Nurturing Innovation and Entrepreneurship: The competitive
                atmosphere and networking opportunities encourage students to
                think outside the box, develop marketable ideas, and explore
                entrepreneurial ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default RSFday;
