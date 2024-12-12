import React from 'react'
import { IoLocationOutline } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { BsEnvelope } from "react-icons/bs";

function Footer() {
    return (
        <>
        <div className="container-fluid py-8 bg-gray-800 relative">
            <div className="max-w-3xl secondary-bg p-8 absolute top-[-80px] mx-auto left-[0px] right-[0px]">
                <h2 className="text-white md:text-3xl text-xl font-semibold">Looking for a dream house?</h2>
                <p className="text-white mt-4">We can help you realize your dream of new home.</p>
            </div>
        </div>
        <div className="container-fluid py-10 primary-bg">
            <div className="md:px-16 px-4">
                <div className="flex flex-wrap">
                    <div className="md:w-1/4 px-4 mb-4">
                    <p className="text-white text-justify text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                    <div className="text-gray-400 text-sm flex mt-4 gap-1">
                        <IoLocationOutline className='text-lg' /> <span>Brooklyn, New York, United State</span>
                    </div>
                    <div className="text-gray-400 text-sm flex mt-2 gap-1">
                        <FiPhoneCall className='text-lg' /> <span>+0123-5435968</span>
                    </div>
                    <div className="text-gray-400 text-sm flex mt-2 gap-1">
                        <BsEnvelope className='text-lg' /> <span>info@realtyresearch.in</span>
                    </div>
                    </div>
                    <div className="w-full md:w-1/4 px-4 mb-4">
                        <h4 className="text-white font-semibold text-lg">Company</h4>
                        <div className="mt-4 text-gray-400 text-sm">
                            <p>About us</p>
                            <p>Products</p>
                            <p>Blogs</p>
                            <p>Term & Conditions</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/4 px-4">
                        <h4 className="text-white font-semibold text-lg">Services</h4>
                        <div className="mt-4 text-gray-400 text-sm">
                            <p>Property Listing</p>
                            <p>Filter Product</p>
                            <p>Cart</p>
                            <p>Compare Price</p>
                            <p>Privacy Policy</p>
                        </div>
                    </div>
                    <div className="md:w-1/4">
                    
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid py-4 bg-gray-800 text-center text-white">
            <p className='text-sm'>Copyright @ 2024 | All right reserved | Designed & Developed by LTS</p>
        </div>
        </>
    )
}

export default Footer
