import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
        <div className="container my-5 pt-5">
            <div className="row m-0">
                <div className="col-lg-4">
                    <img src="./img/footer-logo.png" alt="" />
                    <p>Phone: (440) - 234 - 5958</p>
                    <p>Email: contact@company.com</p>
                    <p>Address:9606 North MoPac Expressway Suite 700 Austin, TX 78759</p>
                </div>
                <div className='col-lg-4'>
                        <ul>
                        <li><Link className="nav-link text-black active" aria-current="page" to="/">Home</Link></li>
                        <li><Link className="nav-link text-black active" aria-current="page" to="/product">Products</Link></li>
                        <li><Link className="nav-link text-black active" aria-current="page" to="/contact">Contact</Link></li>
                        <li><Link className="nav-link text-black active" aria-current="page" to="/about">About US</Link></li>

                        </ul>
                </div>
                <div className="col-lg-4">
                    <h1>Join Our Newsletter</h1>
                    <p>Subscribe to our newsletter and get 10% off your first purchase.</p>
                    <div className=' d-lg-flex'>
                    <input type="text" className='form-input'/><button className='pro-btn bg-dark'><i className="far fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default Footer
