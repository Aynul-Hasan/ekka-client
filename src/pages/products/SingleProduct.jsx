import React from 'react'
import ProductCard from '../card/ProductCard'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import ProDtls from './ProDtls'

const SingleProduct = () => {
    return (
        <>  
            <Navbar/>   
            <div className="container-fluid">
                <div className="m-0 row g-5">
                    <div className="col-lg-6">
                        <img src="https://lusion.arrowtheme.com/wp-content/uploads/2020/08/5435504800_2_4_3.jpg" width='' className=' img-fluid' alt="" />
                    </div>
                    <div className="col-lg-6">
                            <ProDtls/>                        
                    </div>
                </div>
                <div className="container mt-5"> 
                <h1> Related Products</h1>
                <div className="row m-0 g-3 ">
                    <ProductCard name={'col-lg-4'}/>
                    <ProductCard name={'col-lg-4'}/>
                    <ProductCard name={'col-lg-4'}/>
                </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default SingleProduct
