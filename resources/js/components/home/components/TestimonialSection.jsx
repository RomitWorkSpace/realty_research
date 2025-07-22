import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { FaUser } from 'react-icons/fa';

function TestimonialSection() {
    return (
        <>
        <div className="container-fluid py-12 bg-gray-800">
            <div className="max-w-4xl mx-auto px-4">
                <p className="text-white">Client's Testimonial</p>
                <h2 className="text-white text-3xl font-semibold mt-5">See What's Our Client<br/>Says About Us</h2>
            </div>
            <div className="relative">
        <div className="testimonial-slider">
            <div className="max-w-5xl mx-auto px-4">
                <div className="mt-8">
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
                            
                                                slidesPerView: 2,
                                              },
                                          }} 
                                        loop={true}
                                        spaceBetween={50}
                                        autoplay={{delay: 4000,
                                        pauseOnMouseEnter: true,
                                        disableOnInteraction: false}}
                                        pagination={{ clickable: true }}
                                        modules={[Autoplay]}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)} className="banner-section">
                        
                                            <SwiperSlide>
                                                <div className="py-10 px-5 rounded-lg border border-gray-300 shadow-lg bg-gray-50">
                                                    <div className="text-justify">
                                                        <p className="">I have recently invested in Ats Province D in Olympia, a residential plotting project in Sec-22-D on the Yamuna Expressway. I bought the plot only 2 months ago, and without a doubt,
                                                             I am already impressed by the ease of the procedure and the clarity with which everything has been presented to me. Ats Province D is a beautiful residential property with great floor plans and a good location and a ready room for the property to boom. The project is reminiscent of a peaceful but lively community, perfect for families
                                                             who want to build their own home in a tranquil setting. I respect the professionalism and care of the staff, easing the process and mind. Can't wait to see this blossom over the next few years!
                                                        </p>
                                                    </div>
                                                    <div className="client-info float-right">
                                                        <div className="flex">
                                                            <FaUser className='secondary-color text-2xl' /> <span className="ml-4 font-semibold">Pranshu Deshwal</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide>
                                                <div className="py-10 px-5 rounded-lg border border-gray-300 shadow-lg bg-gray-50">
                                                    <div className="text-justify">
                                                        <p className="">From the inception, it has been an exciting journey investing in Prestige City at Siddharth Vihar. While the Prestige City project is new and the delivery is four years away,
                                                             the innovative concepts behind it make all the difference. The master plan provides a township with contemporary facilities and sustainable living. As a buyer, I am feeling certain and 
                                                             positive about the future, as this project has a developer who they say is dedicated to quality and on-time deliveries.” It's not a purely real estate investment as much as one in a lifestyle that combines convenience with community. I can't wait to watch the development take shape and turn into a lively community we are proud to call home.</p>
                                                    </div>
                                                    <div className="client-info float-right">
                                                        <div className="flex">
                                                            <FaUser className='secondary-color text-2xl' /> <span className="ml-4 font-semibold">Manan Batra</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                            <SwiperSlide>
                                                <div className="py-10 px-5 rounded-lg border border-gray-300 shadow-lg bg-gray-50">
                                                    <div className="text-justify">
                                                        <p className="">Shifting to my flat at Amrapali Silicon City has just been a dream come true. This society, ready to move in, has more than just four walls; it's a lifestyle that offers comfort, easy accessibility and a strong sense of community. 
                                                            That warm and lively feel has been here since day one, in a community where no amenity is an afterthought, and everything is designed to bring joy to everyday living. The place in Sector-76, Noida, is a perfect fit for both urban connectivity 
                                                            and serene ambiance. The things that stood out the most were an effortless handover process (a rare thing) and quality workmanship throughout the estate. I am proud to call Amrapali Silicon City home and am thrilled to be a part of such a vibrant community.</p>
                                                    </div>
                                                    <div className="client-info float-right">
                                                        <div className="flex">
                                                            <FaUser className='secondary-color text-2xl' /> <span className="ml-4 font-semibold">Aditya Kapoor</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            
                                    </Swiper>
                                </div>
            </div>
        </div>
        </div>
        </div>
        
        </>
    )
}

export default TestimonialSection
