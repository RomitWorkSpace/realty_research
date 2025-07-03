import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Banner1 from 'imgPath/sliders/property-banner1.jpeg'
import Banner2 from 'imgPath/sliders/property-banner2.jpeg'
import Banner3 from 'imgPath/sliders/property-banner3.jpeg'
import Banner4 from 'imgPath/sliders/property-banner4.jpeg'
import Banner5 from 'imgPath/sliders/property-banner5.jpeg'
import Banner6 from 'imgPath/sliders/property-banner6.jpeg'
import Banner7 from 'imgPath/sliders/property-banner7.jpeg'
import Banner8 from 'imgPath/sliders/property-banner8.jpeg'


function BannerSlider() {

    // const [services, setServices] = useState([]);

    // useEffect(() => {

    //     axios.get(`/api/getservices`).then(res => {
    //         setServices(res.data.getservices);
    //     })

    // },[]);

    return (
        <>
        <div className="slider-bg">
            <Swiper
                slidesPerView={1}
                
                loop={true}
                spaceBetween={0}
                autoplay={{delay: 5000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                modules={[Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">

                    <SwiperSlide>
                        <img src={ Banner1 } alt="realty" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ Banner2 } alt="realty" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ Banner3 } alt="realty" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ Banner4 } alt="realty" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ Banner5 } alt="realty" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ Banner6 } alt="realty" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ Banner7 } alt="realty" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ Banner8 } alt="realty" width="100%" />
                    </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}

export default BannerSlider
