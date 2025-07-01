import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiBath } from "react-icons/bi";
import { BsBuilding } from "react-icons/bs";
import { FaCamera } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineBedroomParent, MdOutlineViewArray } from "react-icons/md";
import { Link } from "react-router-dom";

const PropertyFilterTabs = () => {
  const priceRanges = [
    { id: 1, label: "0 - 50* Lacs", min: 0, max: 50 },
    { id: 2, label: "50 - 1* Cr", min: 50, max: 100 },
    { id: 3, label: "1 - 5* Cr", min: 100, max: 500 },
    { id: 4, label: "Above 5* Cr", min: 500, max: Infinity }
  ];

  // const initialProperties = [
  //   {
  //     id: 1,
  //     title: "Modern Downtown Apartment",
  //     price: 250000,
  //     beds: 2,
  //     baths: 2,
  //     sqft: 1200,
  //     description: "Beautiful modern apartment in the heart of downtown",
  //     image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
  //   },
  //   {
  //     id: 2,
  //     title: "Luxury Penthouse Suite",
  //     price: 750000,
  //     beds: 4,
  //     baths: 3,
  //     sqft: 2500,
  //     description: "Stunning penthouse with panoramic city views",
  //     image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
  //   },
  //   {
  //     id: 3,
  //     title: "Cozy Suburban Home",
  //     price: 180000,
  //     beds: 3,
  //     baths: 2,
  //     sqft: 1800,
  //     description: "Perfect family home in a quiet neighborhood",
  //     image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
  //   },
  //   {
  //     id: 4,
  //     title: "Waterfront Villa",
  //     price: 450000,
  //     beds: 5,
  //     baths: 4,
  //     sqft: 3200,
  //     description: "Luxurious villa with stunning water views",
  //     image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
  //   }
  // ];

  const [initialProperty, setInitialProperty] = useState([]);
  const [properties, setProperties] = useState(initialProperty);
  const [activeTab, setActiveTab] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=>{
    axios.get('https://realtyresearch.in/api/home-property-list').then(res => {
      setInitialProperty(res.data.property_list);
    })
    
  },[]);

  const filterProperties = (min, max) => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered = initialProperty.filter(
        (property) => property.price >= min && property.price <= max
      );
      setProperties(filtered);
      setIsLoading(false);
    }, 1000);
  };

  const handleTabClick = (tabId, min, max) => {
    setActiveTab(tabId);
    filterProperties(min, max);
  };

  return (
    <div className="max-w-7xl mx-auto md:px-16 px-4 py-8">
      <div className="mb-8">
        <div className="p-4 primary-bg rounded-lg">
        <div className="flex flex-wrap gap-2 items-center">
          <div className="text-white text-center font-semibold text-3xl">OUR BUDGET</div>
          {priceRanges.map((range) => (
            <button
              key={range.id}
              onClick={() => handleTabClick(range.id, range.min, range.max)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeTab === range.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              disabled={isLoading}
            >
              {range.label}
            </button>
          ))}
        </div>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <FaSpinner className="animate-spin text-4xl text-blue-600" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab ? properties.map((property, index) => {
            if(index < 6){
              return(
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
              )
            }
          }) : initialProperty.map((property, index) => {
            if(index < 6){
              return(
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
                                      <BiBath className="text-xl" /><div className="px-2 text-sm"><p className="font-semibold">Bathroom</p> {property.bathroom}</div>
                                    </div>
                           </div>
                        
                      </div>
                    </div>
                  </div>
                  </Link>
              )
            }
          })}
        </div>
      )}

      {!isLoading && activeTab && properties.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            No properties found in this price range.
          </p>
        </div>
      )}
    </div>
  );
};

export default PropertyFilterTabs;
