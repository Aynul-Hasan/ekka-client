import React from 'react'
import "./share.css"
const Singin = () => {
    return (
        <>
            <div className="modal-dialog">
         <div className="modal-content">
              <div className="">
                <button type="button" className="btn-close d-block ms-auto p-3" data-bs-dismiss="modal" aria-label="Close"></button>
                <h1 className="modal-title text-center" id="exampleModalLabel">SingIn</h1>
              </div>
              <div className="modal-body">
              <input placeholder="Name" className="form-input mb-3" type="text" />
              <input placeholder="Email" className="form-input mb-3" type="text" />
              <input placeholder="password****" className="form-input mb-3" type="password" />
              <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
              <button className='form-btn'>SingIn</button>
                
              </div>
            </div>
          </div>
        </>
    )
}

export default Singin