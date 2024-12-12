import React from 'react'
import ListingCard from './ListingCard'

import P1 from 'imgPath/list1.jpg'
import P2 from 'imgPath/list2.jpg'

function ListingSection() {
    return (
        <>
        <div className="container-fluid py-12">
            <div className="text-center mb-10">
                <div className="inline-block secondary-bg rounded-lg font-semibold px-4">Properties</div>
                <h2 className="font-semibold primary-color text-3xl">Latest Listings</h2>
            </div>
            <div className="md:px-16">
                <div className="flex flex-wrap">
                    <div className="md:w-1/4 px-3 mb-5">
                        <ListingCard Villa={ P1 } />
                    </div>
                    <div className="md:w-1/4 px-3 mb-5">
                        <ListingCard Villa ={P2} />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ListingSection
