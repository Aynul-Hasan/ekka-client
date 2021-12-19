import React from 'react'
import Slider from "react-slick";
const Feed = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    
        // cssEase: "linear"
      };
    return (
        <>
        <div className="container">
        <Slider {...settings}>
            <div className=' feed-slick'>
                <img src="https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/1.jpg" width='300' alt="" />
            </div>
            <div className=' feed-slick'>
                <img src="https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/6.jpg" width='300' alt="" />
            </div>
            <div className=' feed-slick'>
                <img src="https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/7.jpg" width='300' alt="" />
            </div>
            <div className="feed-slick">
            <img src="https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/3.jpg" width='300' alt="" />
            </div>
            <div className='feed-slick'>
            <img src="https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/2.jpg" width='300' alt="" />
            </div>
            <div className='feed-slick'>
            <img src="https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/4.jpg" width='300' alt="" />
            </div>
            <div className='feed-slick'>
            <img src="https://loopinfosol.in/themeforest/ekka-html-v2/ekka-html/assets/images/instragram-image/5.jpg" width='300' alt="" />
            </div>
         </Slider>
        </div>
            
        </>
    )
}

export default Feed
