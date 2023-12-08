import React from 'react'
import Main from '../images/mainimg.jpeg'
import Slider3 from '../images/Slider3.jpg'
import Department from '../images/Department.jpeg'
import './Slidder.css' ;

function Slider1() {

  return (

       <div>
        
<div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel" data-interval="3000">

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Main} className="d-block w-100 sliddder"  alt="..."  />

     
    </div>
    <div className="carousel-item">
      <img src={Department} className="d-block w-100"  alt="..." />
     
    </div>
    <div className="carousel-item">
      <img src={Slider3} className="d-block w-100" alt="..." />
     
    </div>
  </div>

</div>




    </div>
   
  );
}

export default Slider1
