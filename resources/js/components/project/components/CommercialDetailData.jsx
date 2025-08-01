import React, { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import ProjectSlider from './ProjectSlider'
import { useParams } from 'react-router-dom'
import { PiElevatorDuotone } from 'react-icons/pi'
import { MdOutlineViewArray } from 'react-icons/md'

function CommercialDetailData() {
    const {pid} = useParams();
    const [propertyData, setPropertyData] = useState([]);

    useEffect(() => {
        // Fetch your dropdown data from the database
        // Replace the following with your actual API call or data retrieval logic
        const fetchData = async () => {
          try {
            const response = await fetch(`/api/property-detail/commercial/${pid}`);
            const data = await response.json();
            setPropertyData(data.property_detail);
          } catch (error) {
            console.error('Error fetching property data:', error);
          }
        };
    
        fetchData();
      }, [pid]);

    return (
        <> 
        <div className="p-3">
            {propertyData && propertyData.map((property)=>(
                <>

            <h2 className="text-3xl ml-3">{property.property_name}</h2>
            <p className="text-gray-600 ml-3">By {property.builder_name}</p>
            <div className="flex items-center ml-3">
                <FaLocationDot className='text-gray-600' /><p className="text-gray-600 text-sm">{property.location}</p>
            </div>
            <div className="">
                <ProjectSlider images = {JSON.parse(property.images)} />
            </div>

            <div className="p-4 md:p-6 bg-white shadow-md mb-8">
                <h4 className="font-semibold">Overview</h4>
                <div className="flex mt-3 justify-between">
                    <div className="text-sm font-semibold text-gray-600">
                        <p className="">Updated on:</p>
                        <p className="">{property.created_at}</p>
                    </div>
                    <div className="text-sm font-semibold text-gray-600">
                        <MdOutlineViewArray className='text-xl' />
                        <p className="">{property.area} Area</p>
                    </div>
                    <div className="text-sm font-semibold text-gray-600">
                        <PiElevatorDuotone className='text-xl' />
                        <p className="">{property.lift} Lift</p>
                    </div>
                </div>
            </div>

            <div className="p-4 md:p-6 bg-white shadow-md mb-8">
                <h4 className="font-semibold">Description</h4>
                <div className="mt-3 text-justify text-gray-600">
                <div className='text-sm'
                    dangerouslySetInnerHTML={{__html: property.description}}
                />
                </div>
            </div>

            <div className="p-4 md:p-6 bg-white shadow-md mb-5">
                <h4 className="font-semibold">Address</h4>
                <div className="flex flex-wrap text-sm text-gray-600 mt-3">
                    <div className="w-1/2 mb-4">
                        <p className=""><span className='font-semibold'>Address: </span>{property.location}</p>
                    </div>
                    <div className="w-1/2 mb-4">
                        <p className=""><span className='font-semibold'>City: </span>{property.p_location.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
                    </div>
                    <div className="w-1/2 mb-4">
                        <p className=""><span className='font-semibold'>Zip Code: </span>110024</p>
                    </div>
                    <div className="w-1/2 mb-4">
                        <p className=""><span className='font-semibold'>Country: </span>India</p>
                    </div>
                </div>
            </div>

            <div className="p-4 md:p-6 bg-white shadow-md mb-5">
                <h4 className="font-semibold">Details</h4>
                <div className="flex flex-wrap text-sm text-gray-600 mt-3">
                    <div className="w-1/2 mb-3">
                        <p className=""><span className='font-semibold'>Property ID: </span>{property.p_id}</p>
                    </div>
                    <div className="w-1/2 mb-3">
                        <p className=""><span className='font-semibold'>Price: </span>₹ {property.price > 99 ? property.price/100 + ' Cr' : property.price + ' Lacs'}</p>
                    </div>
                    <div className="w-1/2 mb-3">
                        <p className=""><span className='font-semibold'>Lift: </span>{property.lift}</p>
                    </div>
                    <div className="w-1/2 mb-3">
                        <p className=""><span className='font-semibold'>Washrooms: </span>{property.washroom}</p>
                    </div>
                    <div className="w-1/2 mb-3">
                        <p className=""><span className='font-semibold'>Area: </span>{property.area} sq-ft</p>
                    </div>
                    <div className="w-1/2 mb-3">
                        <p className=""><span className='font-semibold'>Ownership: </span>Leasehold</p>
                    </div>
                    <div className="w-1/2 mb-3">
                        <p className=""><span className='font-semibold'>Furnishing: </span>{property.furnishing}</p>
                    </div>
                    <div className="w-1/2 mb-3">
                        <p className=""><span className='font-semibold'>Brokerage: </span>1% + GST</p>
                    </div>
                    <div className="w-1/2 mb-3">
                        <p className=""><span className='font-semibold'>Price Negotiable: </span>Yes</p>
                    </div>
                </div>
            </div>

            <div className="p-4 md:p-6 bg-white shadow-md mb-5">
                <h4 className="font-semibold mb-6">Features & Amenities</h4>
                <p className="font-semibold text-sm">Amenities</p>
                <div className="flex flex-wrap text-sm text-gray-600 mt-3">
                    {JSON.parse(property.features).map((feature, index)=>(
                        <div className="w-full md:w-1/3 mb-3">
                            <p key={index} className="">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
            </>
            ))}
        </div>
        </>
    )
}

export default CommercialDetailData
