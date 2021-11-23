import React from 'react'

const College = () => {
    return (
        <div>
            <div className="container-fluid" style={{"backgroundColor":"rgb(8, 27, 36)" ,"margin":"0px auto"}}>
                <div className="heading d-flex justify-content-center">
            <h1 className="text1 text-center my-3" style={{"fontSize":"55px" , "color":"white"}} >Welcome to <span className="text-head" style={{"color":"black"}}>JEC</span> <span className="text-head" style={{"color":"black"}} >KAKSHA</span> </h1>
            </div>
            <h2 className="text-center" style={{"color":"white"}}>Please Select Your !</h2>
            <div className="button-sec d-flex justify-content-center">
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
