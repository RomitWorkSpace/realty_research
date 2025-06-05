import React from 'react'
import AboutImg from 'imgPath/about-realty-research.jpeg'
import { MdOutlineHomeWork } from 'react-icons/md'
import { BsCloudSunFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function AboutCompany() {
    return (
        <>
        <div className="container-fluid py-12">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap">
                    <div className="md:w-2/5">
                        <div className="p-4">
                            <img src={AboutImg} alt="about img" className='shadow-lg rounded-lg' width="100%" />
                        </div>
                    </div>
                    <div className="md:w-3/5">
                        <div className="about-wrap p-4">
                            <div className="bg-pink-200 text-pink-900 inline-block py-2 px-4 rounded-lg">About us</div>
                            <h2 className="text-3xl secondary-color font-semibold mt-4">The Leading <span className='primary-color'>Real Estate</span> Consulting Marketplace.</h2>
                            <p className="text-gray-600 text-justify mt-4">Realty Research is a real estate consultancy firm providing services for buying, selling and leasing services into Residential, Commercial, Institutional, and Industrial property of Delhi, Noida, Greater Noida, Yamuna Expressway, Ghaziabad, Faridabad, Gurgaon , Gandhinagar(Gujrat) and other cities of INDIA.</p><br/>
                            <p className="text-gray-600 text-justify"><span className='text-3xl font-semibold primary-color'>R</span>ealty Research spent time on fair research and facts to come up and present real facts in front of viewers, Buyers and Investors of Ready to Move and Under Construction Apartments, Group Housing Society Flats, Commercial Retail Shop, Office Space, Institutional Building, Industrial Land/plot, Agriculture Land.</p><br/>
                            <p className="text-gray-600 text-justify">Realty Research is managed and handled by expert team of same and different fields whose advice and experience give best possible solution for all the potential Buyer, Seller and Investors of Real Estate Industry.</p><br/>
                            <p className="text-gray-600 font-semibold">Realty Research also provide Legal consultancy related to Real Estate Industry.</p><br/>

                            <Link to="/contact">
                            <div className="inline-block py-2 px-4 rounded-full text-center secondary-color font-semibold primary-bg shake-top cursor-pointer">Contact Us</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AboutCompany
