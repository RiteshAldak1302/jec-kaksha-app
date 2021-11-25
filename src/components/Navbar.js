import React from 'react'
import Login from './Login'
import SIgnup from './SIgnup'

const Navbar = () => {
  // const ref = useRef(null)
  // const refclose = useRef(null)
  // const update =(current)=>{
  //   ref.current.click()
 
  // }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar " style={{"backgroundColor":"#1c1b29"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> <span className="title1 heading-shadow"> JEC </span> <span className="title2 heading-shadow"> Kaksha </span> </a>
    <button className="navbar-toggler  navbar-toggler-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon icon-bar navbar-toggler-icon-light"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3 nav-link-ltr">
          <a className="nav-link active font hover-underline-animation" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item mx-3  ">
          <a className="nav-link active font hover-underline-animation" href="/">About</a>
        </li>
        <li className="nav-item  mx-3 ">
          <a className="nav-link active font hover-underline-animation" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Notice
          </a>
        </li>
        <li className="nav-item mx-3  ">
          <a className="nav-link active font hover-underline-animation" href="/">Services</a>
        </li>
        <li className="nav-item  mx-3 ">
          <a className="nav-link active font hover-underline-animation" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          opportunities
          </a>
        </li>
        <li className="nav-item mx-3">
          <a className="nav-link  active font hover-underline-animation" href="/">Contact</a>
        </li>
        
      </ul>
    
      <Login/>
      <SIgnup/>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Navbar
