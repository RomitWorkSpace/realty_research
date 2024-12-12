import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import Img1 from 'imgPath/sliders/img1.jpg'
import Img2 from 'imgPath/sliders/img2.jpg'
import Img3 from 'imgPath/sliders/img3.jpg'
import Img4 from 'imgPath/sliders/img4.jpg'


function ImageSlider() {

    // const [services, setServices] = useState([]);

    // useEffect(() => {

    //     axios.get(`/api/getservices`).then(res => {
    //         setServices(res.data.getservices);
    //     })

    // },[]);

    return (
        <>
        <div className=" slider-bg">
            <Swiper
                slidesPerView={1}
                breakpoints={{
                    360: {

                      slidesPerView: 1,
                    },
                    768: {
    
                      slidesPerView: 2,
                    },
                    1280: {
    
                        slidesPerView: 4,
                      },
                  }} 
                loop={true}
                spaceBetween={0}
                autoplay={{delay: 4000,
                disableOnInteraction: false}}
                pagination={{ clickable: true }}
                modules={[Autoplay]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)} className="banner-section">

                    <SwiperSlide>
                        <img src={ Img2 } alt="realty" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ Img1 } alt="realty" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ Img3 } alt="realty" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ Img4 } alt="realty" width="100%" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={ Img3 } alt="realty" width="100%" />
                    </SwiperSlide>
            </Swiper>
        </div>
        </>
    )
}

export default ImageSlider
