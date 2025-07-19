import React from 'react'
import PageBanner from '../common/PageBanner'
import DkBanner from 'imgPath/banners/dk-product-banner.png'
import MbBanner from 'imgPath/banners/mb-product-banner.png'
import ProjectCategoryFilter from './components/ProjectCategoryFilter'
import { useParams } from 'react-router-dom'
import CommercialCategoryFilter from './components/CommercialCategoryFilter'

function ProjectCategoryListing() {

    const {queryCategory} = useParams();

    return (
        <>
        <PageBanner Banner={DkBanner} MobileBanner={MbBanner} PageName="PROJECT LISTING" />
        {queryCategory == "residential" ? <ProjectCategoryFilter /> : <CommercialCategoryFilter /> }
        </>
    )
}

export default ProjectCategoryListing
