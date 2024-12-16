import React from 'react'
import Blog from 'imgPath/list1.jpg'
import { BiStar } from 'react-icons/bi'

function TopRatedProducts() {
    return (
        <div className="top-rated-product p-5 shadow-lg">
                <h3 className="text-gray-800 font-semibold text-xl border-l-4 pl-3">Top Rated Products</h3>
                <div className="pt-8">
                    <div className="product-bg pb-5">
                        <div className="flex gap-3">
                            <div className="w-1/3">
                                <img src={ Blog } alt="blog" width="100%" />
                            </div>
                            <div className="w-2/3">
                                <div className="blog-sm-content">
                                    <div className="flex">
                                        <BiStar className='text-yellow-600' />
                                        <BiStar className='text-yellow-600' />
                                        <BiStar className='text-yellow-600' />
                                        <BiStar className='text-yellow-600' />
                                        <BiStar className='text-yellow-600' />
                                    </div>
                                    <h5 className="font-semibold text-gray-800 text-sm">Luxury house in Greenvilla</h5>
                                    <strong className="text-red-500">$30,000,000</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-bg">
                        <div className="flex gap-3">
                            <div className="w-1/3">
                                <img src={ Blog } alt="blog" width="100%" />
                            </div>
                            <div className="w-2/3">
                                <div className="blog-sm-content">
                                    <div className="flex">
                                        <BiStar className='text-yellow-600' />
                                        <BiStar className='text-yellow-600' />
                                        <BiStar className='text-yellow-600' />
                                        <BiStar className='text-yellow-600' />
                                        <BiStar className='text-yellow-600' />
                                    </div>
                                    <h5 className="font-semibold text-gray-800 text-sm">Luxury house in Greenvilla</h5>
                                    <strong className="text-red-500">$30,000,000</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default TopRatedProducts
