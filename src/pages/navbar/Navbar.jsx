import React, { useState } from 'react'
import Navbarfooter from './navcomponents/Navbarfooter'
import UpperNavbar from './navcomponents/UpperNavbar'

const Navbar = () => {
    const [click, setclick] = useState(false)
    return (
        <>
           <UpperNavbar/> 
         
           <Navbarfooter click={click} setclick={setclick}/>
          
        </>
    )
}

export default Navbar
