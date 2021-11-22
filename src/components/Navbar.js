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
            <nav className="navbar navbar-expand-lg navbar-danger bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"> <span className="title1"> JEC </span> <span className="title2"> Kaksha </span> </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item mx-3 nav-link-ltr">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item mx-3 active">
          <a className="nav-link" href="/">About</a>
        </li>
        <li className="nav-item  mx-3 active">
          <a className="nav-link" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Notice
          </a>
        </li>
        <li className="nav-item dropdown mx-3 active">
          <a className="nav-link dropdown-toggle dropdown-toggle-light" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          College
          </a>
          <ul className="dropdown-menu dropdown-menu-dark" style={{"backgroundColor":"white"}} aria-labelledby="navbarDropdown">
          <li><a className="dropdown-item" href="/">First Year</a></li>
          <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Second Year</a></li> 
            <li><hr className="dropdown-divider"/></li> 
            <li><a className="dropdown-item" href="/">Third Year</a></li>  
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Forth Year</a></li>   
            <li><hr className="dropdown-divider"/></li>              

          </ul>
        </li>
        <li className="nav-item mx-3 active">
          <a className="nav-link" href="/">Contact</a>
        </li>
        
      </ul>
    
      <Login/>
      <SIgnup/>
      <ul id="social-sidebar">
  <li>
    <a className="entypo-twitter" href="/"><span>Tweeter</span></a>
  </li>
  <li>
    <a className="entypo-facebook" href="/"><span>Facebook</span></a>
  </li>
  <li>
    <a className="entypo-gplus" href="/"><span>Google+</span></a>
  </li>
  <li>
    <a className="entypo-github" href="/"><span>Github</span></a>
  </li>
</ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default Navbar
