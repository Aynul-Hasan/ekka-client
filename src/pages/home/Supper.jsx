import React from 'react'
import './home.css'

const Supper = () => {
    return (
        <>
        <div className="container-fluid supper text-end">
            <div className="ms-auto pt-3 pe-5">
                <h1 className="fw-bolder">SUNGLASS <br /> SUPPER OFFER</h1>
                <img src="./img/1.png" className="img-fluid" alt="" />
                <h2 className="fw-bolder">Acetate Frame Sunglasses</h2>
                <h2 className="fw-bolder">$20.00</h2>
                <button className="supper-btn">Shop now</button>
            </div>
        </div>
            
        </>
    )
}

export default Supper
