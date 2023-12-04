import React from 'react'
import Navbar from '../icl/Navbar'
import Slider1 from '../icl/Slider1'
import './Homee.css' ;
import Footer from '../icl/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Slider1 />

      <section className='py-5'>
        <div className="container ">
            <div className="row">
                <div className="col-md-12">
                <div className='line2'></div>
                    <div className='about' style={{textAlign:"center", marginTop:"4px",fontSize:"50px" , fontWeight:"500"}}>About RSF-EE</div>
                    <div className='line2'></div>
                    <p className='py-3 para' >Oftentimes, research scholars face obstacles and hurdles that can only be understood by their fellow researchers and faculty members who have faced similar challenges in their journeys. This initiative aims to provide a bridge between the scholars and faculty members, facilitating an environment of better cooperation and opportunity. This official student body provides research scholars a better outreach and support.</p>
                    <p className='para'>The most prominent objectives of this forum are to provide better communication and strong coordination between research scholars, which provides a platform for showcasing their research activities and establish a supportive relationship between scholars, faculty members, and alumni.</p>
                    <p className='para'>RSF-EE is envisioned to accomplish the following activities</p>
                    <p className="para">
                        <ul className=''>
                            <li className='py-2'>
                            Technical talks & workshops
                            </li>
                            <li className='py-2'>
                            Industry Collaboration
                            </li>
                            <li className='py-2'>
                            Conferences/symposiums
                            </li>
                            <li className='py-2'>
                            Extra-curricular activities
                            </li>
                            <li className='py-2'>
                            Publish Magazines / Newsletter
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
      </section>

      <Footer />

     
    </div>
  )
}

export default Home




