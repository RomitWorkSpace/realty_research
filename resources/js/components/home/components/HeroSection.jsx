import React from 'react'
import PropertySearch from './PropertySearch'

import HeroBg from 'imgPath/hero-bg.jpg'

function HeroSection() {
    return (
        <>
        <div className="container-fluid pt-12 pb-12 hero-bg" style={{backgroundImage: `url(${HeroBg})`}}>
            <div className="container text-white text-center">
                <h2 className="font-semibold text-3xl">MORE THAN JUST PROPERTIES,</h2>
                <h2 className="font-semibold text-3xl">WE BUILD FUTURE.</h2>
            </div>
            <PropertySearch />
        </div>
        </>
    )
}

export default HeroSection
