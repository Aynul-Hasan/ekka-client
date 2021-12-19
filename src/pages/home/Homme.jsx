import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Banner from './Banner'
import Blog from './Blog'
import Categories from './Categories'
import Newseller from './Newseller'
import ProductSection from './ProductSection'
import Supper from './Supper'
const Homme = () => {
    return (
        <>
        <Navbar/>
        <Banner/>
        <ProductSection/>
        <Supper/>
        <Categories/>
        <Newseller/>
        <Blog/>
        <Footer/>
        </>
    )
}

export default Homme
