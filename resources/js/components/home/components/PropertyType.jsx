import React from 'react'
import Residence from 'imgPath/icons/residence.png'
import Commercial from 'imgPath/icons/Commercial.png'
import House from 'imgPath/icons/House.png'
import Deal from 'imgPath/icons/Deal.png'
import Discount from 'imgPath/icons/Discount.png'
import CustomerSupport from 'imgPath/icons/customer-support.png'

function PropertyType() {
    return (
        <>
        <div className="container-fluid pt-12 pb-10">
            <div className="max-w-3xl mx-auto">
                <div className="flex flex-wrap">
                    <div className="md:w-1/2">
                        <div className="flex">
                            <div className="w-1/3 text-center mb-5">
                                <img src={ Residence } alt="Residence" width="80%" className='mx-auto' />
                                <p className="mt-4">RESIDENCE</p>
                            </div>
                            <div className="w-1/3 text-center mb-5">
                                <img src={ Commercial } alt="Commercial" width="80%" className='mx-auto' />
                                <p className="mt-4">COMMERCIAL</p>
                            </div>
                            <div className="w-1/3 text-center mb-5">
                                <img src={ House } alt="House" width="80%" className='mx-auto' />
                                <p className="mt-4">BEST<br/>PROPERTY</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <div className="flex">
                            <div className="w-1/3 text-center">
                                <img src={ Deal } alt="Deal" width="80%" className='mx-auto' />
                                <p className="mt-4">GENIUNE<br/>DEAL</p>
                            </div>
                            <div className="w-1/3 text-center">
                                <img src={ Discount } alt="Discount" width="80%" className='mx-auto' />
                                <p className="mt-4">EXCLUSIVE<br/>DEAL</p>
                            </div>
                            <div className="w-1/3 text-center">
                                <img src={ CustomerSupport } alt="Customer support" width="80%" className='mx-auto' />
                                <p className="mt-4">CUSTOMER<br/>SUPPORT</p>
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
