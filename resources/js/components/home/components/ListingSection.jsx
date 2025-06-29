import React, { useEffect, useState } from 'react'
import ListingCard from './ListingCard'

import P1 from 'imgPath/list1.jpg'
import P2 from 'imgPath/list2.jpg'
import axios from 'axios'

function ListingSection() {

    const [latestProperty, setLatestProperty] = useState([])

    useEffect(()=>{
        axios.get('/api/latest-property').then(res =>{
            setLatestProperty(res.data.properties);
        })
    },[])

    return (
        <>
        <div className="container-fluid py-12">
            <div className="text-center mb-10">
                <div className="inline-block secondary-bg rounded-lg font-semibold px-4">Properties</div>
                <h2 className="font-semibold primary-color text-3xl">Latest Listings</h2>
            </div>
            <div className="md:px-16">
                <div className="flex flex-wrap">
                    
                    {latestProperty && latestProperty.map((property)=>(
                        <div className="md:w-1/4 px-3 mb-5">
                            <ListingCard PropertyImage = {JSON.parse(property.images)[0]} Price = {property.price} 
                            Title = {property.property_title} 
                            Description ={property.description} 
                            Slug = {property.slug}
                            PLocation = {property.p_location}
                            Pid = {property.p_id}
                            Bathroom = {property.bathroom}
                            Area = {property.area}
                            Room = {property.room}
                            />
                        </div>
                    ))}
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default ListingSection
