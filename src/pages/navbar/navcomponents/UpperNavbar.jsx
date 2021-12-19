import React from 'react'
import {Link} from "react-router-dom"
import "../navbar.css"
const UpperNavbar = () => {
    return (
        <>
            <nav className=" mb-0 pb-0 navbar-light bg-light">
            <div className="container-fluid w-100 d-lg-flex justify-lg-content-evenly py-3">
                <div className=" text-center py-4 py-lg-0">
                <Link className="" to="/"><img src="./img/footer-logo.png" alt="" /></Link> 

                </div>
                <div className="ms-lg-auto text-center w-100">
                <form className="d-flex justify-content-center ">
                    <input className=" uppernav-input" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="nav-search-btn"><i class="fas fa-search"></i></button>
                </form>
                
                </div>
            </div>
            </nav>
        </>
    )
}

export default UpperNavbar
