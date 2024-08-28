import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <div>
            <footer className="footer pt-4 bg-dark container-fluid">
                <div className='row p-lg-4 m-lg-4 p-2 gap-4 lg-lg-0'>
                    <div className='col-lg-4'>
                        <h5 className='text-custom fw-bold '>SHIFT VENDOR</h5>
                        <div className="row col-lg-4">
                            <div className="col-6 mb-2">
                                <a href="#" className="icon rounded-circle d-flex justify-content-center align-items-center text-white">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                            </div>
                            <div className="col-6 mb-2">
                                <a href="#" className="icon rounded-circle d-flex justify-content-center align-items-center text-white">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </div>
                            <div className="col-6">
                                <a href="#" className="icon rounded-circle d-flex justify-content-center align-items-center text-white">
                                    <FontAwesomeIcon icon={faEnvelope} size="2x" />
                                </a>
                            </div>
                            <div className="col-6">
                                <a href="#" className="icon rounded-circle d-flex justify-content-center align-items-center text-white">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-8 row'>
                        <div className="col-lg-3 col-6 text-white">
                            <span className='fw-semibold fs-5'>Our Product</span>
                            <ul className=' list list-group '>
                                <li className=''> Support</li>
                                <li>Guide</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-6 text-white">
                            <span className='fw-semibold fs-5'>Terms & policies</span>
                            <ul className=' list list-group '>
                                <li>Terms of Service</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-6 text-white">
                            <span className='fw-semibold fs-5'>Company</span>
                            <ul className=' list list-group '>
                                <li>Home</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-6 text-white">
                            <span className='fw-semibold fs-5'>Contact</span>
                            <ul className=' list list-group '>
                                <li> tcv@shifthospitality.com</li>
                                
                            </ul>
                        </div>
                        
                    </div>
                </div>
                <div className='text-center pt-4 pb-2'>
                    <p className='text-white fs-6'>©SHIFTVENDOR - All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer