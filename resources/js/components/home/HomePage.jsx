import React from 'react'
import HeroSection from './components/HeroSection'
import PropertyType from './components/PropertyType'
import UpcommingProject from './components/UpcommingProject'
import ListingSection from './components/ListingSection'
import ImageSlider from './components/ImageSlider'
import ProjectGallery from './components/ProjectGallery'
import TestimonialSection from './components/TestimonialSection'
import NewsSection from './components/NewsSection'
import OnPage from '../common/OnPage'
import BannerSlider from './components/BannerSlider'
import VideoTestimonial from './components/VideoTestimonial'

function HomePage() {
    return (
        <>
        <OnPage MetaTitle="Realty Research - Best Real Estate Advisory in Noida"
        Keywords="Realty Research, Noida real estate, property dealers Noida, buy property in Noida, best real estate company Noida"
        MetaDesc="Discover top residential and commercial properties in Noida with Realty Research. Trusted experts, verified listings, and seamless real estate services."
        />
        <HeroSection />
        <PropertyType />
        <UpcommingProject />
        <BannerSlider />
        <ListingSection />
        <ImageSlider />
        <ProjectGallery />
        <TestimonialSection />
        <VideoTestimonial />
        <NewsSection />
        </>
    )
}

export default HomePage
