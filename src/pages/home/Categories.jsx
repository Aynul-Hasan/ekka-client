import React from 'react'
import { Link } from 'react-router-dom'
import "./home.css"
const Categories = () => {
    return (
        <>
            <div className="container mt-5 pt-5">
                <div className="row m-0 text-center">
                <h1>Choose Categories</h1>
                <p>Browse The Collection of Top Categories</p>
                    <div className="col-lg-12 position-relative cate">
                        <div>
                            <img src="./img/1.jpg" className="img-fluid w-100" alt="" />
                        </div>
                        <div className="cate-div d-flex align-items-center justify-content-center">
                            <button className="supper-btn"><Link className=' nav-link text-white' to='/product'>  Viwe All </Link></button>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Categories
