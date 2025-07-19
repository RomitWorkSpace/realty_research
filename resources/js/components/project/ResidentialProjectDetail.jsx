import React from 'react'
import PageBanner from '../common/PageBanner'
import DkBanner from 'imgPath/banners/dk-product-banner.png'
import MbBanner from 'imgPath/banners/mb-product-banner.png'
import ProjectDetailWrapper from './components/ProjectDetailWrapper'

function ResidentialProjectDetail() {
    return (
        <>
        <PageBanner Banner={DkBanner} MobileBanner={MbBanner} PageName="PROJECT LISTING" />
        <ProjectDetailWrapper />
        </>
    )
}

export default ResidentialProjectDetail
