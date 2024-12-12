import React from 'react'
import PageBanner from '../common/PageBanner'
import DkBanner from 'imgPath/banners/dk-about-banner.jpg'

function AboutPage() {
    return (
        <>
        <PageBanner Banner={DkBanner} MobileBanner={DkBanner} PageName="About us" />
        </>
    )
}

export default AboutPage
