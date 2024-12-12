import React, { useState } from "react";
import { FaBed, FaBath, FaRulerCombined } from "react-icons/fa";
import { FaSpinner } from "react-icons/fa";

const PropertyFilterTabs = () => {
  const priceRanges = [
    { id: 1, label: "$0 - $100,000", min: 0, max: 100000 },
    { id: 2, label: "1 - 3* Lacs", min: 100000, max: 300000 },
    { id: 3, label: "3 - 5* Lacs", min: 300000, max: 500000 },
    { id: 4, label: "Above 5* Lacs", min: 500000, max: Infinity }
  ];

  const initialProperties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: 250000,
      beds: 2,
      baths: 2,
      sqft: 1200,
      description: "Beautiful modern apartment in the heart of downtown",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
    },
    {
      id: 2,
      title: "Luxury Penthouse Suite",
      price: 750000,
      beds: 4,
      baths: 3,
      sqft: 2500,
      description: "Stunning penthouse with panoramic city views",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    {
      id: 3,
      title: "Cozy Suburban Home",
      price: 180000,
      beds: 3,
      baths: 2,
      sqft: 1800,
      description: "Perfect family home in a quiet neighborhood",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9"
    },
    {
      id: 4,
      title: "Waterfront Villa",
      price: 450000,
      beds: 5,
      baths: 4,
      sqft: 3200,
      description: "Luxurious villa with stunning water views",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
    }
  ];

  const [properties, setProperties] = useState(initialProperties);
  const [activeTab, setActiveTab] = useState(priceRanges[0].id);
  const [isLoading, setIsLoading] = useState(false);

  const filterProperties = (min, max) => {
    setIsLoading(true);
    setTimeout(() => {
      const filtered = initialProperties.filter(
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
          {properties.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="relative h-64">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2";
                  }}
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                  ${property.price.toLocaleString()}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-4">{property.description}</p>

                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex items-center gap-2">
                    <FaBed className="text-blue-600" />
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBath className="text-blue-600" />
                    <span>{property.baths} baths</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaRulerCombined className="text-blue-600" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {!isLoading && properties.length === 0 && (
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
