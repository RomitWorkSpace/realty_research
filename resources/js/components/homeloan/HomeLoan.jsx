import React from 'react'
import PageBanner from '../common/PageBanner'

import DkBanner from 'imgPath/banners/dk-contact-banner.jpg'
import MbBanner from 'imgPath/banners/mb-contact-banner.png'
import SBI from 'imgPath/icons/sbi.png'
import BOM from 'imgPath/icons/BOM.png'
import UNION from 'imgPath/icons/UBOI.svg'
import Canara from 'imgPath/icons/canara.jpeg'
import BOB from 'imgPath/icons/BOB.png'
import Central from 'imgPath/icons/central.png'
import HDFC from 'imgPath/icons/hdfc.png'
import ICICI from 'imgPath/icons/icici.jpg'
import Axis from 'imgPath/icons/axis.jpg'
import Kotak from 'imgPath/icons/kotak.png'
import Piramal from 'imgPath/icons/piramal.png'
import Bandhan from 'imgPath/icons/bandhan.jpeg'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'

function HomeLoan() {

    const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (e)=>{
    e.preventDefault()
  }

    return (
        <>
        {/* <PageBanner Banner={DkBanner} MobileBanner={MbBanner} PageName="APPLY FOR LOAN" /> */}
        <div className="home-loan py-10 bg-blue-50">
            <div className="max-w-6xl mx-auto primary-bg px-4 py-10 md:px-12 rounded-md">
                <div className="home-loan-bg flex flex-wrap">
                    <div className="w-full md:w-1/2">
                        <h3 className="font-bold text-3xl text-yellow-500 text-center">Apply for Home Loan Estimate</h3>
                        <img src="https://www.suryodaybank.com/cms/uploads/Home_Loan_8b35f56123.png" alt="loan" width="80%" className='mx-auto' />
                    </div>
                    <div className="w-full md:w-1/2">
                        <div className="form-section bg-white rounded-lg shadow-lg py-8 px-5">
                            <h3 className="font-semibold mb-5">Lets find out how much home loan you are eligible for?</h3>
                            <form onSubmit={handleSubmit(onSubmit)} >
                                <div className="relative mb-4">
                                    <input type="text" name="name" 
                                    id="name" className={`w-full border rounded-sm h-14 px-4 pt-2 outline-none ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register("name", { required: true })}
                                    />
                                    <label htmlFor="name" className={`absolute top-1 left-4 text-xs ${errors.name ? 'text-red-500' : 'text-gray-500'} `}>Name</label>
                                </div>
                                <div className="relative mb-4">
                                    <input type="text" name="email" id="email" className={`w-full border border-gray-300 rounded-sm h-14 px-4 pt-2 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                    {...register("email", { required: true })}
                                    />
                                    <label htmlFor="email" className={`absolute top-1 left-4 text-xs ${errors.email ? 'text-red-500' : 'text-gray-500'} `}>Email</label>
                                </div>
                                <div className="relative mb-4">
                                    <input type="number" name="phone" id="phone" className={`w-full border border-gray-300 rounded-sm h-14 px-4 pl-12 pt-2 outline-none ${errors.email ? 'border-red-500' : 'border-gray-300'}`} />
                                    <label htmlFor="phone" className={`absolute top-1 left-4 text-xs ${errors.email ? 'text-red-500' : 'text-gray-500'}`}>Phone</label>
                                    <span className="absolute top-5 left-4 text-md text-gray-500">+91</span>
                                </div>
                                <div className="">
                                    <button type="submit" className='block w-full bg-yellow-500 py-2 rounded-full hover:bg-yellow-600 '>Get Home Loan Estimate</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="loan-info bg-blue-50 pb-12">

            <div className="max-w-5xl mx-auto">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 p-4">
                        <div className="shadow-lg rounded-lg bg-white px-4 py-6 text-center">
                            <h2 className="text-xl font-semibold text-center">Home Loan Eligibility Calculator</h2>
                            <Link to="/eligibility-check">
                                <div className="inline-block mt-4 rounded-full px-4 py-2 mx-auto primary-bg cursor-pointer text-white font-semibold">Calculate</div>
                            </Link>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                        <div className="shadow-lg rounded-lg bg-white px-4 py-6 text-center">
                            <h2 className="text-xl font-semibold text-center">Home Loan EMI Calculator</h2>
                            <Link to="/emi-calculator">
                                <div className="inline-block mt-4 rounded-full px-4 py-2 mx-auto primary-bg cursor-pointer text-white font-semibold">Calculate</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-5xl pt-10 mx-auto px-4">
                <div className="text-center">
                    <h3 className="text-xl">Get personalised home loan offers from top banks in just <span className="font-semibold text-yellow-500">2 mins...</span> </h3>
                </div>
                <div className="flex flex-wrap mt-8">
                    <div className="w-full md:w-1/2 mb-5">
                        <div className="info px-4 border-l-4 border-indigo-900">
                            <p className="font-semibold primary-color">Quick Approvals</p>
                            <p className="">Get your loan approved within 24 hours</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mb-5">
                        <div className="info px-4 border-l-4 border-indigo-900">
                            <p className="font-semibold primary-color">Secure Process</p>
                            <p className="">Your data is protected with bank-grade security</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mb-5">
                        <div className="info px-4 border-l-4 border-indigo-900">
                            <p className="font-semibold primary-color">100% Digital Process</p>
                            <p className="">Complete your loan application online from anywhere, anytime.</p>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 mb-5">
                        <div className="info px-4 border-l-4 border-indigo-900">
                            <p className="font-semibold primary-color">Best Interest Rates</p>
                            <p className="">Competitive interest rates from top banks</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div className="pt-10 pb-24">
                <div className="max-w-5xl mx-auto">
                    <h3 className="primary-color text-2xl font-semibold text-center">Associated With Banks</h3>

                    <div className="pt-10 flex flex-wrap">
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={SBI} alt="sbi" className='h-10 mx-auto' />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={BOM} alt="Bank of Maharastra" className='h-10 mx-auto' />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={UNION} alt="Union bank of India" className='h-10 mx-auto' />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={Canara} alt="Canara Bank" className='h-10 mx-auto' />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={BOB} alt="Bank of Baroda" className='h-10 mx-auto' />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={Central} alt="CEntral Bank" className='h-10 mx-auto' />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={HDFC} alt="hdfc bank" className='h-10 mx-auto' />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={ICICI} alt="ICICI bank" className='h-10 mx-auto' />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={Axis} alt="Axis bank" className='h-10 mx-auto' />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={Kotak} alt="Kotak bank" className='h-10 mx-auto' />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={Piramal} alt="Piramal bank" className='h-10 mx-auto' />
                            </div>
                        </div>
                        <div className="w-1/2 md:w-1/4 p-3">
                            <div className="w-full shadow-md">
                                <img src={Bandhan} alt="Bandhan bank" className='h-10 mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeLoan
