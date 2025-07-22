import React from 'react'
import Residence from 'imgPath/icons/residence.png'
import Commercial from 'imgPath/icons/Commercial.png'
import House from 'imgPath/icons/House.png'
import Deal from 'imgPath/icons/Deal.png'
import Discount from 'imgPath/icons/Discount.png'
import CustomerSupport from 'imgPath/icons/customer-support.png'
import { Link } from 'react-router-dom'

function PropertyType() {
    return (
        <>
        <div className="container-fluid pt-12 pb-10">
            <div className="max-w-3xl mx-auto">
                <div className="flex flex-wrap">
                    <div className="md:w-1/2">
                        <div className="flex">
                            <div className="w-1/3 text-center mb-5">
                                <a href={`/property/noida/all/residential`}>
                                <img src={ Residence } alt="Residential" width="80%" className='mx-auto' />
                                <p className="mt-4">RESIDENTIAL</p>
                                </a>
                            </div>
                            <div className="w-1/3 text-center mb-5">
                                <a href="/property/noida/all/commercial">
                                <img src={ Commercial } alt="Commercial" width="80%" className='mx-auto' />
                                <p className="mt-4">COMMERCIAL</p>
                                </a>
                            </div>
                            <div className="w-1/3 text-center mb-5">
                                <a href="/property/best-property">
                                    <img src={ House } alt="House" width="80%" className='mx-auto' />
                                    <p className="mt-4">BEST<br/>PROPERTY</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex">
                            <div className="w-1/3 text-center">
                                <a href="/property/genuine-deal">
                                    <img src={ Deal } alt="Deal" width="80%" className='mx-auto' />
                                    <p className="mt-4">GENUINE<br/>DEAL</p>
                                </a>
                            </div>
                            <div className="w-1/3 text-center">
                                <a href="/property/exclusive-deal">
                                    <img src={ Discount } alt="Discount" width="80%" className='mx-auto' />
                                    <p className="mt-4">EXCLUSIVE<br/>DEAL</p>
                                </a>
                            </div>
                            <div className="w-1/3 text-center">
                                <Link to="/contact">
                                <img src={ CustomerSupport } alt="Customer support" width="80%" className='mx-auto' />
                                <p className="mt-4">CUSTOMER<br/>SUPPORT</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default PropertyType
