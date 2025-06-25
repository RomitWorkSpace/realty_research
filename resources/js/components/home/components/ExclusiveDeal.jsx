import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DkBanner from 'imgPath/banners/dk-product-banner.png'
import MbBanner from 'imgPath/banners/mb-product-banner.png'
import PageBanner from '../../common/PageBanner';
import { Link } from 'react-router-dom';
import { FaLocationDot } from 'react-icons/fa6';
import { FaCamera } from 'react-icons/fa';
import { MdOutlineBedroomParent, MdOutlineViewArray } from 'react-icons/md';
import { BsBuilding } from 'react-icons/bs';

function ExclusiveDeal() {

    const [exclusiveDeal, setExclusiveDeal] = useState([]);

    useEffect(()=>{
        axios.get('/api/residential-property/exclusive-deal').then(res=>{
            if(res.status == 200){
                setExclusiveDeal(res.data.exclusive_deal);
            }
        }).catch(console.log("Property Loading Error"));
    },[]);

    return (
        <>
        <PageBanner Banner={DkBanner} MobileBanner={MbBanner} PageName="EXCLUSIVE DEAL" />
        <div className="max-w-7xl mx-auto md:px-16 px-4 pt-8 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {exclusiveDeal && exclusiveDeal.map((property)=>(
                    <Link to={`/residential/${property.p_location}/${property.slug}/${property.p_id}`}>
                    <div
                    key={property.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                  >
                    <div className="relative">
                    <img
                      src={`/images/property/${JSON.parse(property.images)[0]}`}
                      alt={property.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-3" style={{backgroundColor:'#262525a6'}}>
                    <div className="flex items-center justify-between text-gray-100 text-sm font-semibold">
                        <div className="flex items-center"><FaLocationDot /> {property.location}</div>
                        <div className="flex items-center text-gray-300"><FaCamera /> 3</div>
                      </div>
                    </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{property.property_name}</h3>
                      <div className="space-y-1">
                      <div className="flex justify-between">
                          <p className="secondary-color text-lg font-semibold">₹ {property.price > 99 ? property.price/100 + ' Cr' : property.price + ' Lacs'}</p>
                          <div className={property.property_status == "Resale" ? 'py-1 rounded-md px-2 bg-green-200 text-green-900 text-sm' : 'py-1 rounded-md px-2 bg-purple-200 text-purple-900 text-sm'}>{property.property_status}</div>
                        </div>
                          <div className="flex justify-between">
                                    <div className="w-1/4 text-gray-600 flex items-center border-r-2 border-gray-300">
                                      <MdOutlineBedroomParent className="text-xl" /><div className="px-2 text-sm"><p className="font-semibold">Room</p> <p className="text-[12px] md:text-sm">{property.room}</p></div>
                                    </div>
                                    <div className="w-1/3 text-gray-600 flex items-center border-r-2 border-gray-300">
                                      <MdOutlineViewArray className="text-xl" /><div className="px-2 text-sm"><p className="font-semibold">Area</p> <p className="text-[12px] md:text-sm">{property.area} sqft</p></div>
                                    </div>
                                    <div className="w-1/3 text-gray-600 flex items-center">
                                      <BsBuilding className="text-xl" /><div className="px-2 text-sm"><p className="font-semibold">Bathroom</p> {property.bathroom}</div>
                                    </div>
                           </div>
                        
                      </div>
                    </div>
                  </div>
                  </Link>
                ))}
            </div>
        </div>
        </>
    )
}

export default ExclusiveDeal
