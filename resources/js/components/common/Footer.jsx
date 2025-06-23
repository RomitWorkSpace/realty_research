import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";
import Logo from 'imgPath/white-logo.png'
import { FaAngleRight } from 'react-icons/fa';
import Iframe from 'react-iframe';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
        <div className="container-fluid py-8 bg-gray-800 relative">
            <div className="max-w-3xl secondary-bg p-8 absolute top-[-80px] mx-auto left-[0px] right-[0px]">
                <h2 className="text-white md:text-3xl text-xl font-semibold">Looking for a dream house?</h2>
                <div className="flex items-center mt-4">
                    <div className="w-3/5">
                    <p className="text-white">We can help you realize your dream of new home.</p>
                    </div>
                    <div className="w-2/5">
                        <Link to="/contact">
                        <div className="inline-block px-4 py-2 border-2 border-white text-white text-center">Contact Us</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid py-10 primary-bg">
            <div className="md:px-16 px-4">
                <div className="flex flex-wrap">
                    <div className="md:w-2/5 px-4 mb-4">
                    <img src={ Logo } alt="Realty Research Logo" width="120px" className='mb-4' />
                    <p className="text-white text-justify text-sm">Realty Research is a real estate consultancy firm providing services for buying, selling and leasing services.</p>
                    <div className="text-gray-400 text-sm flex mt-4 gap-1">
                        <IoLocationOutline className='text-lg secondary-color' /> <span>Plot no: SH-8H, 1st Floor, Sector-141, Noida 201304.</span>
                    </div>
                    <div className="text-gray-400 text-sm flex mt-2 gap-1">
                        <FiPhoneCall className='text-lg secondary-color' /> <span>+91 8377005024</span>
                    </div>
                    <div className="text-gray-400 text-sm flex mt-2 gap-1">
                        <BsEnvelope className='text-lg secondary-color' /> <span>rsquarenoida@gmail.com</span>
                    </div>
                    </div>
                    <div className="w-full md:w-[15%] px-4 mb-4">
                        <h4 className="secondary-color font-semibold text-lg">Company</h4>
                        <div className="h-[2px] w-[50px] inline-block secondary-bg"></div>
                        <div className="mt-3 text-gray-400 text-sm">
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><Link to="/about"><span>About us</span></Link></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><span>Products</span></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><Link to="/blog"><span>Blogs</span></Link></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><Link to="/gallery"><span>Gallery</span></Link></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><Link to="/contact"><span>Help Center</span></Link></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><Link to=""><span>Terms & Condition</span></Link></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><Link to=""><span>Privacy Policy</span></Link></p>
                        </div>
                    </div>
                    <div className="w-full md:w-[20%] px-4 mb-4">
                        <h4 className="secondary-color font-semibold text-lg">Properties</h4>
                        <div className="h-[2px] w-[50px] inline-block secondary-bg"></div>
                        <div className="mt-3 text-gray-400 text-sm">
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><a href="/property/noida/all/residential"><span>Property in Noida</span></a></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><a href="/property/ghaziabad/all/residential"><span>Property in Ghaziabad</span></a></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><a href="/property/gurgaon/all/residential"><span>Property in Gurgaon</span></a></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><a href="/property/gandhi-nagar/all/residential"><span>Property in Gandhi Nagar</span></a></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><span>Best Properties</span></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><span>Residential Properties</span></p>
                            <p className='flex items-center'><FaAngleRight className='secondary-color' /><span>Commercial Properties</span></p>
                        </div>
                    </div>
                    <div className="md:w-[25%] w-full">
                        <h4 className="secondary-color font-semibold text-lg">Get Location</h4>
                        <div className="h-[2px] w-[50px] inline-block secondary-bg"></div>
                        <div className="mt-3">
                            <Iframe url="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7012.28959926867!2d77.41404514043322!3d28.505290902937404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSH-8H%20Sector%20141!5e0!3m2!1sen!2sin!4v1735047568807!5m2!1sen!2sin"
                                height="200px"
                                id=""
                                className="w-full"
                                display="block"
                                position="relative"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid py-4 bg-gray-800 text-center text-white">
            <p className='text-sm'>Copyright @ 2025 | All right reserved | Designed & Developed by <a href="https://livetechservices.in" target="_blank" rel="noopener noreferrer">LTS</a> </p>
        </div>
        </>
    )
}

export default Footer
