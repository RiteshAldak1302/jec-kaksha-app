import React from 'react'

const College = () => {
    return (
        <div>
            <div className="container-fluid home-box" style={{"backgroundColor":"#151320" ,"margin":"0px auto"}}>
                <div className="heading d-flex justify-content-center">
            <h1 className="text1 text-center my-3" style={{"fontSize":"58.6px" , "color":"white"}} >Welcome to <div className="center"> <span className="text-head heading-shadow2" style={{"color":"black"}}>JEC</span> <span className="text-head heading-shadow2" style={{"color":"black"}} >KAKSHA</span></div> </h1>
            </div>
            <h2 className="text-center my-3" style={{"color":"white"}}>Please Select Your Year !</h2>
            
            <div className="button-sec d-flex justify-content-center container" style={{"height":"132px" }}>
            <button class="glow-on-hover mx-3 my-3"  type="button"> <a href="/" style={{"textDecoration":"none" , "color":"white"}}>First Year</a></button>
            <button class="glow-on-hover mx-3 my-3" type="button"><a href="/" style={{"textDecoration":"none" , "color":"white"}}>Second Year</a></button>
            <button class="glow-on-hover mx-3 my-3" type="button"><a href="/" style={{"textDecoration":"none" , "color":"white"}}>Third Year</a></button>
            <button class="glow-on-hover mx-3 my-3" type="button"><a href="/" style={{"textDecoration":"none" , "color":"white"}}>Fourth Year</a></button>
            
            </div>

            </div>
        </div>

    )
}

export default College
