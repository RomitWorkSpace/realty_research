import React from 'react'
import PageBanner from '../common/PageBanner'
import DkBanner from 'imgPath/banners/dk-about-banner.jpg'
import MbBanner from 'imgPath/banners/mb-about-banner.png'
import AboutCompany from './components/AboutCompany'
import AboutOwner from './components/AboutOwner'
import SimpleBreadcrumb from '../common/SimpleBreadcrumb'
import TeamProfile from './components/TeamProfile'
import OnPage from '../common/OnPage'

function AboutPage() {
    return (
        <>
        <OnPage MetaTitle="About Realty Research – Trusted Real Estate Advisors in Noida"
        Keywords="about Realty Research, real estate consultants Noida, Noida property advisors, property experts Noida"
        MetaDesc="Learn about Realty Research, Noida’s most trusted property advisory service, helping you find the perfect home or commercial space with expert guidance."
        />
        <PageBanner Banner={DkBanner} MobileBanner={MbBanner} PageName="ABOUT US" />
        <SimpleBreadcrumb CurrentPage="About Us" />
        <AboutCompany />
        <TeamProfile />
        </>
    )
}

export default AboutPage
