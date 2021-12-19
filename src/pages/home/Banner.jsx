import React from 'react'
import './home.css'
const Banner = () => {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row m-0">
                    <div className="col-lg-4 p-0 position-relative banner-img">
                        <img  src="https://lusion.arrowtheme.com/wp-content/uploads/2020/06/banner-full1.jpg.webp" className="img-fluid" alt="" />
                        <div className="hover-div-1"></div>
                        <div className="hover-div-2">
                        </div>
                        <div className="banner-text">
                        <h1>Men</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0 position-relative banner-img">
                        <img  src="https://lusion.arrowtheme.com/wp-content/uploads/2020/06/Layer-41_01.jpg.webp" className="img-fluid" alt="" />
                        <div className="hover-div-1"></div>
                        <div className="hover-div-2">
                        </div>
                        <div className="banner-text">
                        <h1>Kids</h1>
                        </div>
                    </div>
                    <div className="col-lg-4 p-0 position-relative banner-img">
                        <img  src="https://lusion.arrowtheme.com/wp-content/uploads/2020/06/banner-full3.jpg.webp" className="img-fluid" alt="" />
                        <div className="hover-div-1"></div>
                        <div className="hover-div-2">
                        </div>
                        <div className="banner-text">
                        <h1>Women</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner
