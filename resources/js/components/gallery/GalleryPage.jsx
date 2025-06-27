import React from 'react'
import PageBanner from '../common/PageBanner'

import DkBanner from 'imgPath/banners/dk-gallery-banner.jpg'
import MbBanner from 'imgPath/banners/mb-gallery-banner.jpg'
import Client1 from 'imgPath/gallery/client1.jpeg'
import Client2 from 'imgPath/gallery/client2.jpeg'
import Client3 from 'imgPath/gallery/client3.jpeg'
import Client4 from 'imgPath/gallery/client4.jpeg'
import Client5 from 'imgPath/gallery/client5.jpeg'
import Client6 from 'imgPath/gallery/client6.jpeg'
import Client7 from 'imgPath/gallery/client7.jpeg'
import Client8 from 'imgPath/gallery/client8.jpeg'
import Client9 from 'imgPath/gallery/client9.jpeg'
import Client10 from 'imgPath/gallery/client10.jpeg'
import Client11 from 'imgPath/gallery/client11.jpeg'
import Client12 from 'imgPath/gallery/client12.jpeg'
import Client13 from 'imgPath/gallery/client13.jpeg'
import Client14 from 'imgPath/gallery/client14.jpeg'
import Client15 from 'imgPath/gallery/client15.jpeg'
import Client16 from 'imgPath/gallery/client16.jpeg'
import Client17 from 'imgPath/gallery/client17.jpeg'
import Client18 from 'imgPath/gallery/client18.jpeg'
import Client19 from 'imgPath/gallery/client19.jpeg'
import Client20 from 'imgPath/gallery/client20.jpeg'
import SimpleBreadcrumb from '../common/SimpleBreadcrumb'
import OnPage from '../common/OnPage'

function GalleryPage() {
    return (
        <>
        <OnPage MetaTitle="Realty Research Property Gallery – Real Estate Projects in Noida"
        Keywords="property images Noida, Noida real estate gallery, Realty Research projects, real estate developments Noida"
        MetaDesc="Browse Realty Research’s visual gallery of residential and commercial projects across Noida. See images of properties and ongoing developments."
        />
        <PageBanner Banner={DkBanner} MobileBanner={MbBanner} PageName="GALLERY" />
        <SimpleBreadcrumb CurrentPage="Gallery" />
        <div className="container-fluid pt-10 pb-24 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-wrap">
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client1} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            EXOTICA FRESCO... SECTOR-137,NOIDA
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client2} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            JAYPEE KLASSIC HEIGHT.. SECTOR-134,NOIDA-
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client3} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            EXOTICA FRESCO... SECTOR-137,NOIDA
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className='w-full overflow-hidden'>
                                <img src={Client4} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            PARAS TIEREA... SECTOR-137,NOIDA
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client5} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            PARAMOUNT FLORAVILE... SECTOR-137,NOIDA
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client6} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            JAYPEE PAVILION HEIGHT... SECTOR-128,NOIDA
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client7} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            JAYPEE PAVILION HEIGHT... SECTOR-128,NOIDA
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client9} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                                NBCC LEISURE PARK... HAPPY CLIENT
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client10} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            NBCC SILICON CITY... KEY HANDOVER
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client11} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            NBCC SILICON CITY... KEY HANDOVER
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client12} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            AMRAPALI PRINCLEY ESTATE... KEY HANDOVER
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client13} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            AMRAPALI SILICON CITY... KEY HANDOVER
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client14} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            AMRAPALI PRINCLEY ESTATE... KEY HANDOVER
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client15} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            MARKETING ACTIVITY... DURGA PUJA EVENT
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client16} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            MARKETING ACTIVITY... DIWALI MELA EVENT
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client17} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            HOLI CELEBRATION 2025
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client18} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            HOLI CELEBRATION 2025
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client19} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            HOLI CELEBRATION 2025
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-4">
                        <div className="gallery-card primary-bg p-1 rounded-lg">
                            <div className="w-full overflow-hidden">
                                <img src={Client20} alt="Client" className='rounded-lg transition-all duration-300 hover:scale-110' width="100%" />
                            </div>
                            <div className="py-2 px-3 min-h-16 text-center font-semibold secondary-color">
                            ATS HOMECRAFT... PROVINCE D OLYMPIA
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default GalleryPage
