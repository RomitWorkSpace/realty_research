import React from 'react'
import PageBanner from '../common/PageBanner'
import DkBanner from 'imgPath/banners/dk-product-banner.png'
import MbBanner from 'imgPath/banners/mb-product-banner.png'
import ProjectFilter from './components/ProjectFilter'
import { useParams } from 'react-router-dom'
import CommercialFilter from './components/CommercialFilter'

function ProjectListing() {

    const {property_type} = useParams();

    return (
        <>
        <PageBanner Banner={DkBanner} MobileBanner={MbBanner} PageName="PROJECT LISTING" />
        {property_type == "r" ? <ProjectFilter /> : <CommercialFilter /> }
        </>
    )
}

export default ProjectListing
