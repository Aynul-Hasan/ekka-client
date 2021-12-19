import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCard from '../../card/ShoppingCard'
import Login from '../../share/Login'
import Singin from '../../share/Singin'
import '../navbar.css'

const Navbarfooter = () => {
    return (
        <>
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="nav d-flex order-lg-2">
                <li className="nav-item me-3">
                <Link className="nav-link text-dark" aria-current="page" to="/"><i className="far fa-2x fa-heart"></i></Link>
                </li>
                <li className="nav-item me-3 dropdown">
                <Link className="nav-link text-dark dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="far fa-2x fa-user"></i>
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                <span className="ps-3" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            login
               </span>
                </li>
                <li>
                <span className="ps-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Singin
                 </span>
                </li>
                <li><hr className="dropdown-divider"/></li>
                    <li><Link className="dropdown-item" to="/">Logout</Link></li>
                </ul>
                </li>       
                <li className="nav-item me-3">
                <span  className="nav-link text-dark" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                <i className="fas fa-2x fa-shopping-bag"></i>
                </span>
                {/* <span className="" >  </span> */}
                </li>
                </ul>
                <div className="collapse navbar-collapse order-lg-1" id="navbarSupportedContent">
                <ul className="navbar-nav pt-3  me-auto mb-2 mb-lg-0">
              
               <li className="nav-item bg-light list-group-item border-0">
               <Link className="nav-link text-black active" aria-current="page" to="/">Home</Link>
               </li>
               <li className="nav-item  bg-light list-group-item border-0">
               <Link className="nav-link  text-black"to='/product'>Products</Link>
               </li>
               <li className="nav-item bg-light list-group-item border-0">
               <Link className="nav-link text-black" aria-current="page" to="/about">About us</Link>
               </li>
               <li className="nav-item bg-light  list-group-item border-0">
               <Link className="nav-link text-black" to="/contact">Contact us</Link>
               </li>
                </ul>

                </div>
             
            </div>
            
            </nav>
            <div>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <ShoppingCard/>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <Singin/>
            </div>
            <div className="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                <Login/>
            </div>
            </div>
        </>
    )
}

export default Navbarfooter

