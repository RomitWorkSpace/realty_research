import React from 'react'
import PageBanner from '../common/PageBanner'
import DkBanner from 'imgPath/banners/dk-blog-banner.jpg'
import BlogWrapper from './components/BlogWrapper'

function BlogPage() {
    return (
        <>
        <PageBanner Banner={DkBanner} MobileBanner={DkBanner} PageName="BLOGS & NEWS" />
        <BlogWrapper />
        </>
    )
}

export default BlogPage
