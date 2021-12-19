import React from 'react'
import './home.css'
const Newseller = () => {
    return (
        <>
        <div className="container-newSeller p-0 text-center bg-light pt-5">
            <h1>Newsletter</h1>
            <p>Sign up to receive information about new products</p>
            <div>
                <input type="text" placeholder="Type your Email" className="newSeller-input bg-light" /><button className="newSeller-btn" type="submit"><i className="far fa-paper-plane"></i> </button>
            </div>
            <div className="mt-5">
            <button className="social-icon">  <i className="fab fa-2x fa-facebook-f"></i></button>
            <button className="social-icon">  <i className="fab fa-2x fa-instagram"></i></button>
            <button className="social-icon">   <i className="fab fa-2x fa-twitter"></i></button>
            </div>
        </div>
            
        </>
    )
}

export default Newseller
