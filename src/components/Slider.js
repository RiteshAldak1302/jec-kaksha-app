import React from 'react'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'


const Slider = () => {
    return (
        <div className="container-fluid" style={{"backgroundColor":"rgb(8, 27, 36)"}}>
           <div id="carouselExampleControlsNoTouching" class="carousel slide carousel-fade" style={{"height":"45vh"}}  data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner" style={{"height":"45vh"}}>
    <div class="carousel-item active" >
      <img src={img1}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2}  class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3}  class="d-block w-100" alt="..."/>
    </div>
  </div>


  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div >
    )
}

export default Slider
