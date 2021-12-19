import React from 'react'
import ProductCard from '../card/ProductCard'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import './products.css'

const Products = () => {
    return (
        <>  <Navbar/>
            <div className="container-products p-0">
                    <h1 className="text-center pt-5">Product's</h1>
            </div>
            <div className="container-fluid p-0 mt-5">
                <div className="row m-0 g-3">
                    <div className="col-lg-3">
                    <h1>Categories</h1>
                    <button className="product-btns">Clothes</button><br />
                    <button className="product-btns">Shoes</button><br />
                    <button className="product-btns">Bag</button><br />
                    <button className="product-btns">Accessories</button>
                    </div>
                    <div className="col-lg-9">
                        <div className="row m-0 g-3">
                            <ProductCard name={'col-lg-6'}/>
                            <ProductCard name={'col-lg-6'}/>
                            <ProductCard name={'col-lg-6'}/>
                            <ProductCard name={'col-lg-6'}/>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Products
