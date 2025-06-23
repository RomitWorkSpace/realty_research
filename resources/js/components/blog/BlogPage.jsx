import React from 'react'
import PageBanner from '../common/PageBanner'
import DkBanner from 'imgPath/banners/dk-blog-banner.jpg'
import MbBanner from 'imgPath/banners/mb-blog-banner.png'
import BlogWrapper from './components/BlogWrapper'
import SimpleBreadcrumb from '../common/SimpleBreadcrumb'
import OnPage from '../common/OnPage'

function BlogPage() {
    return (
        <>
        <OnPage MetaTitle="Realty Research Blog – Real Estate News & Insights in Noida"
        Keywords="real estate blog Noida, Realty Research news, Noida property trends, investment tips, Noida real estate insights"
        MetaDesc="Stay updated with Realty Research Blog featuring latest news, investment tips, property trends, and insights on Noida’s dynamic real estate market."
        />
        <PageBanner Banner={DkBanner} MobileBanner={MbBanner} PageName="BLOGS & NEWS" />
        <SimpleBreadcrumb CurrentPage="Blog" />
        <BlogWrapper />
        </>
    )
}

export default BlogPage
