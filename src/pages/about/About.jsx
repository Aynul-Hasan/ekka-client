import React from 'react'
import Footer from '../footer/Footer'
import Blog from '../home/Blog'
import Navbar from '../navbar/Navbar'
import Feed from './Feed'

const About = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-5">
                <h1 className="text-center mb-5">About US</h1>

                <div className="row m-0 g-2">
                    <div className="col-lg-6">
                        <img src="./img/1 (1).jpg" className="img-fluid img-thumbnail" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h5>
                          EKKA providing rare & beautiful items sourced both locally & globally.
                        </h5>
                        <p className="text-muted">
                        We have worked hand-in-hand with a large scale of customers all over the world accomplishing a wide range of industries and services for 10+ years. Each of our work represents our dedication to the quality. <br /> <br />
                         Please browse through our case studies to see the difference we can bring to your business.
                         <br /><br />
                         Our comprehensive experience is the key to give our Clients best services.
                         <br /><br />
                         <img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/09/about-img-2.jpg.webp"  alt="" />


                        </p>
                    </div>
                </div>
            </div>
            <Blog/>
            <div className="container-fluid mt-5 pt-5">
                <h5 className=' text-center'>Instagram Feed</h5>
                <p className=' text-center'>Share your store with us</p>
                    <div>
                        <Feed/>
                    </div>
            </div>
            <Footer/>
        </>

    )
}

export default About
