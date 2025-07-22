import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import AceEstate from 'imgPath/projects/ace-estate.png'
import Amstoria from 'imgPath/projects/amstoria-bptp.png'
import AtsProvince from 'imgPath/projects/ats-province.png'
import AurumAlumini from 'imgPath/projects/aurum-alumini.png'
import GodrejLogo from 'imgPath/projects/godrej-logo.png'
import HeroHome from 'imgPath/projects/hero-home.png'
import Logo from 'imgPath/projects/logo.png'
import Nbcc from 'imgPath/projects/nbcc.png'
import Orris from 'imgPath/projects/orris.png'
import Ska from 'imgPath/projects/ska.png'
import Svp from 'imgPath/projects/svp.png'
import Popup from './Popup';
import PopupController from './PopupController';


function UpcommingProject() {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupContent, setPopupContent] = useState("");

    const popupData = ()=>{
      setPopupContent(Content);
      setIsPopupOpen(true);
    }

    return (
        <>
        
        <div className="container-fluid pt-10 pb-10 secondary-bg">
            <div className="max-w-3xl px-5 mx-auto">
                <h2 className="section-heading primary-color text-center text-3xl font-semibold">New Projects</h2>

                <div className=" slider-bg mt-8">
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            360: {
        
                              slidesPerView: 2,
                            },
                            768: {
            
                              slidesPerView: 3,
                            },
                            1280: {
            
                                slidesPerView: 4,
                              },
                          }} 
                        loop={true}
                        spaceBetween={0}
                        autoplay={{delay: 4000,
                        pauseOnMouseEnter: true,
                        disableOnInteraction: false}}
                        pagination={{ clickable: true }}
                        modules={[Autoplay]}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)} className="banner-section">
        
                            <SwiperSlide>
                                <img src={ AceEstate } alt="Ace Estate" width="80%" className='mx-auto' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ Amstoria } alt="Amstoria" width="80%" className='mx-auto' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ AtsProvince } alt="Ats Province" width="80%" className='mx-auto' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ AurumAlumini } alt="Aurum Alumini" width="80%" className='mx-auto' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ GodrejLogo } alt="Godrej Logo" width="80%" className='mx-auto' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ HeroHome } alt="Hero Home" width="80%" className='mx-auto' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ Logo } alt="Logo" width="80%" className='mx-auto' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ Nbcc } alt="Nbcc" width="80%" className='mx-auto' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ Orris } alt="Orris" width="80%" className='mx-auto' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ Ska } alt="Ska" width="80%" className='mx-auto' />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={ Svp } alt="SVP" width="80%" className='mx-auto' />
                            </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>


        
        </>
    )
}

export default UpcommingProject
