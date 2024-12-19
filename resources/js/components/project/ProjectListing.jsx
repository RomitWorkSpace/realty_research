import React from 'react'
import PageBanner from '../common/PageBanner'
import DkBanner from 'imgPath/banners/dk-product-banner.png'
import ProjectFilter from './components/ProjectFilter'

function ProjectListing() {
    return (
        <>
        <PageBanner Banner={DkBanner} MobileBanner={DkBanner} PageName="Project Listing" />
        <ProjectFilter />
        </>
    )
}

export default ProjectListing
