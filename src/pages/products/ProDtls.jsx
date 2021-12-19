import React, { useState } from 'react'
import './products.css'
const ProDtls = () => {
    const [count, setcount] = useState(1)
    return (
        <>
            <div className="container-fluid">
            <h1>Baby Doll Flower Dress</h1>
            <h4>£94.86</h4>
            <div className="btn-group mb-5" role="group" aria-label="Basic outlined example">
                <button onClick={()=>count>=2? setcount(count-1):setcount(1)} className='pro-btn'>-</button><input disabled className='pro-input' type="number" value={count} />
                <button onClick={()=>setcount(count+1)} className='pro-btn'>+</button>
                    <div>
                    <button className='add-btn'>Order Now</button>
                    </div>
            </div>

                <p>Ekka Essentials is focused on creating affordable, high-quality, and long-lasting everyday clothing you can rely on. Our line of men’s must-haves includes polo shirts, chino pants, classic-fit shorts, casual button-downs, and crew-neck tees. Our consistent sizing takes the guesswork out of shopping, and each piece is put to the test to maintain the highest standards in quality and comfort.</p>
            </div>
        </>
    )
}

export default ProDtls
