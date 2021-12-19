import React from 'react'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar/>
            <div className="container">
                <h1>Contact</h1>
                <div className="row m-0 g-3 ">
                    <div className="col-lg-6 bg-dark text-white p-5">
                        <hr />
                        <div>
                        (440) - 234 - 5958
                        </div><hr />
                        <div> 
                            contact@company.com
                        </div><hr />
                        <div>
                        9606 North MoPac Expressway Suite 700 Austin, TX 78759
                        </div><hr />
                        <div>
                        Monday - Sunday: 09:00 am - 20:00 pm
                        </div><hr />

                    </div>
                    <div className="col-lg-6">
                        <h5>Send us a message</h5>
                        <div>
                        <input placeholder="Name" className="form-input mb-3" type="text" />
                        <input placeholder="Email" className="form-input mb-3" type="text" />
                        <textarea placeholder="Message" className="form-input mb-3 py-3" type="text" />
                        <button className='form-btn'>Send</button>
                        </div>
                    </div>
                    <div className="col-lg-12">
                    <iframe width="" height="400" className='w-100 img-thumbnail' id="gmap_canvas" src="https://maps.google.com/maps?q=9606%20North%20MoPac%20Expressway%20Suite%20700%20Austin,%20TX%2078759&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Contact
