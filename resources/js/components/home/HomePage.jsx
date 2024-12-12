import React from 'react'
import HeroSection from './components/HeroSection'
import PropertyType from './components/PropertyType'
import UpcommingProject from './components/UpcommingProject'
import ListingSection from './components/ListingSection'
import ImageSlider from './components/ImageSlider'
import ProjectGallery from './components/ProjectGallery'
import TestimonialSection from './components/TestimonialSection'
import NewsSection from './components/NewsSection'

function HomePage() {
    return (
        <>
        <HeroSection />
        <PropertyType />
        <UpcommingProject />
        <ListingSection />
        <ImageSlider />
        <ProjectGallery />
        <TestimonialSection />
        <NewsSection />
        </>
    )
}

export default HomePage
