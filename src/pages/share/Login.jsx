import React from 'react'
import "./share.css"

const Login = () => {
    return (
        <>
             <div className="modal-dialog">
               <div className="modal-content">
                     <div className="">
                       <button type="button" className="btn-close d-block ms-auto p-2" data-bs-dismiss="modal" aria-label="Close"></button>
                       <h1 className="modal-title text-center" id="exampleModalLabel">Login</h1>
                     </div>
                     <div className="modal-body pb-5">
                            <input placeholder="Email" className="form-input mb-3" type="text" />
                            <input placeholder="Password****" className="form-input mb-3" type="password" />
                            <button className='form-btn'>Login</button>
                     </div>
                   </div>
            </div>
        </>
    )
}

export default Login
