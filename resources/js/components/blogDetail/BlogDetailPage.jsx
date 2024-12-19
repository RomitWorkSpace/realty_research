import React from 'react'
import PageBanner from '../common/PageBanner'
import BlogBanner from 'imgPath/banners/dk-blog-banner.jpg'
import DetailWrapper from './components/DetailWrapper'

function BlogDetailPage() {
    return (
        <>
        <PageBanner Banner={BlogBanner} MobileBanner={BlogBanner} PageName="NEWS DETAIL" />
        <DetailWrapper />
        </>
    )
}

export default BlogDetailPage
