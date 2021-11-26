import React from 'react'
import img1 from '../img/1.jpg'
import img2 from '../img/2.jpg'
import img3 from '../img/3.jpg'


const Slider = () => {
    return (
        <div className="container-fluid " style={{"backgroundColor":"#151320","margin":"78.5px 0px 0px 0px"}}>
           <div id="carouselExampleControlsNoTouching" class="carousel slide carousel-fade  auto"  data-bs-touch="false" data-interval="3000" data-bs-interval="false">
  <div class="carousel-inner" >
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
