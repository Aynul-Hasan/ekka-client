import React,{useState,useEffect} from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BlogCard from '../card/BlogCard';

const Blog = () => {
    const [review, setreview] = useState([])
    useEffect(()=>{
            const getdata=async()=>{
                const res=await fetch('./review.json')
                const result=await res.json()
                setreview(result)

            }
            getdata()
    },[])
    // console.log(review)
    const settings = {
        customPaging: function(i) {
            return (
              <a>
               {/* { review.map((e)=><img src={e.img} alt='' />)} */}
               <img className="slick-img" src={review[i].img} alt="" />
               
              </a>
            );
          },
        dots: true,
        dotsClass: "slick-dots slick-ul ",
        // fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    return (
        <>
            <div className="container-fluid bg-light my-5">
                <h1 className="text-center py-5">Client Review</h1>
                <div>
                <Slider {...settings}>
                    {
                        review.map((e)=><BlogCard key={e.id}data={e}></BlogCard>)
                    }
                    
                </Slider>
                        {
                            // review.map((e)=><img src={e.img} alt='' />)
                        }
                </div>
                
            </div>
        </>
    )
}

export default Blog
