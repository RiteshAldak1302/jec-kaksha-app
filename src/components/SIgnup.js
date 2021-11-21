import React from 'react'

const SIgnup = () => {
    return (
        <>
 
<button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Signup
</button>


<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Signup For an Account</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form  >
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text"  className="form-control"   name="name" id="name" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email"  className="form-control"   name="email" id="email" aria-describedby="emailHelp" minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password"  className="form-control" name="password" id="Password" minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
    <input type="password"  className="form-control" name="cpassword" id="cPassword" minLength={5} required/>
  </div>
  
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger mx-3">Submit</button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default SIgnup
