import React from 'react'
import ProductCard from '../card/ProductCard'
import './home.css'

const ProductSection = () => {
    return (
        <>
            <div className="container mt-5 pt-5">
                <h1 className="text-center">New Arrivals</h1>
                <div className="text-center">
                    <button className="product-btns">Clothes</button>
                    <button className="product-btns">Shoes</button>
                    <button className="product-btns">Bag</button>
                    <button className="product-btns">Accessories</button>
                </div>

                <div className="row m-0 g-3">
                        <ProductCard name={"col-lg-3"}/>
                        <ProductCard name={"col-lg-3"}/>
                        <ProductCard name={"col-lg-3"}/>
                        <ProductCard name={"col-lg-3"}/>
                </div>
            </div>
        </>
    )
}

export default ProductSection
