import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Blog from 'imgPath/blog1.jpg'
import Blog1 from 'imgPath/list1.jpg'

function PopularBlog() {
    return (
        <>
        <div className="popular-blog p-5 mt-8 border-2">
        <h3 className="text-gray-800 font-semibold text-xl border-l-4 pl-3 mb-4">Popular Properties</h3>
        <Swiper
                slidesPerView={1}
                loop={true}
                spaceBetween={0}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                modules={[Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">

                    <SwiperSlide>
                        <div className="shadow-lg">
                            <img src={ Blog } alt="realty" width="100%" />
                            <div className="p-4">
                                <p className="secondary-color font-semibold">$36,000/month</p>
                                <h4 className="font-semibold text-gray-800">New Appartment Nice view</h4>
                                <div className="mt-5 flex justify-between">
                                    <div className="text-sm">2 Bathroom</div>
                                    <div className="text-sm">3 Bedrooms</div>
                                    <div className="text-sm">3450 sq ft</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="shadow-lg">
                            <img src={ Blog1 } alt="realty" width="100%" />
                            <div className="p-4">
                                <p className="secondary-color font-semibold">$36,000/month</p>
                                <h4 className="font-semibold text-gray-800">New Appartment Nice view</h4>
                                <div className="mt-5 flex justify-between">
                                    <div className="text-sm">2 Bathroom</div>
                                    <div className="text-sm">3 Bedrooms</div>
                                    <div className="text-sm">3450 sq ft</div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}

export default PopularBlog
