import React from 'react'
import { Link } from 'react-router-dom'
import './card.css'

const ProductCard = (props) => {
    
    return (
        <>
            <div className={`${props.name} card-main position-relative`}>
              <div className="w-100">
              <img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/06/jacket1xc-1.jpg.webp" className="w-100  img-fluid" alt="" />
              </div>
                    <div className="card-dtls">
                        <div className="position-relative h-100">
                        <div className=" text-end">
                          <button className='card-btns mb-1'><Link to='/product/id' className=""><i className="fas fa-search-plus"></i></Link></button><br />
                            <button className="card-btns"><i className="far fa-heart"></i></button>
                        </div>
                        <button className="card-btn">Order Now</button>
                        {/* <button className="card-btn">ADD TO CARD</button> */}

                        </div>
                       
                    </div>
            </div>
        </>
    )
}

export default ProductCard
