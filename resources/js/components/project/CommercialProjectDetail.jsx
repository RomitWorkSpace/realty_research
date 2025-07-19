import React from 'react'
import PageBanner from '../common/PageBanner'
import DkBanner from 'imgPath/banners/dk-product-banner.png'
import MbBanner from 'imgPath/banners/mb-product-banner.png'
import CommercialDetailWrapper from './components/CommercialDetailWrapper'

function CommercialProjectDetail() {
    return (
        <>
        <PageBanner Banner={DkBanner} MobileBanner={MbBanner} PageName="PROJECT LISTING" />
        <CommercialDetailWrapper />
        </>
    )
}

export default CommercialProjectDetail
