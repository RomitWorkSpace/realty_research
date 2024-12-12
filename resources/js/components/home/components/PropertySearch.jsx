import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiBed, BiBath } from "react-icons/bi";
import { FaRulerCombined } from "react-icons/fa";

const PropertySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({ search: "", city: "" });
  const [filteredProperties, setFilteredProperties] = useState([]);

  const properties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      price: "$450,000",
      city: "New York",
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118"
    },
    {
      id: 2,
      title: "Luxury Beachfront Villa",
      price: "$1,200,000",
      city: "Los Angeles",
      beds: 4,
      baths: 3,
      sqft: 2800,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    },
    {
      id: 3,
      title: "Cozy Studio Apartment",
      price: "$280,000",
      city: "Chicago",
      beds: 1,
      baths: 1,
      sqft: 600,
      image: "https://images.unsplash.com/photo-1501183638710-841dd1904471"
    },
    {
      id: 4,
      title: "Family Home with Garden",
      price: "$650,000",
      city: "Houston",
      beds: 3,
      baths: 2.5,
      sqft: 2200,
      image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83"
    }
  ];

  const cities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
  ];


  const handleSearch = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!searchQuery.trim()) {
      validationErrors.search = "Please enter a search term";
    }

    if (!selectedCity) {
      validationErrors.city = "Please select a city";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setFilteredProperties([]);
      return;
    }

    setErrors({});
    
    // Filter properties based on search query and selected city
    const filtered = properties.filter(property => {
      const matchesCity = property.city.toLowerCase() === selectedCity.toLowerCase();
      const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCity && matchesSearch;
    });

    setFilteredProperties(filtered);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Find Your Dream Property
        </h2>

        <form
          onSubmit={handleSearch}
          className="primary-bg rounded-md shadow-lg p-6"
        >
          <div className="flex flex-wrap items-end space-x-4">
          <div className="md:w-64">
              <div className="relative">
                <button
                  type="button"
                  className={`w-full px-4 py-2 text-left border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white flex items-center justify-between transition-colors`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  aria-haspopup="listbox"
                  aria-expanded={isDropdownOpen}
                >
                  <span className="flex items-center">
                    <IoLocationOutline className="mr-2 text-gray-400" />
                    {selectedCity || "Select city"}
                  </span>
                  <MdKeyboardArrowDown
                    className={`transition-transform duration-200 ${isDropdownOpen ? "transform rotate-180" : ""}`}
                  />
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto">
                    {cities.map((city) => (
                      <button
                        key={city}
                        type="button"
                        className="w-full px-4 py-2 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none"
                        onClick={() => {
                          setSelectedCity(city);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              {errors.city && (
                <p className="mt-1 text-sm text-red-500">{errors.city}</p>
              )}
            </div>
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  id="search"
                  className={`w-full pl-10 pr-4 py-2 border ${errors.search ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                  placeholder="Enter keywords, location, or property type"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search properties"
                />
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              {errors.search && (
                <p className="mt-1 text-sm text-red-500">{errors.search}</p>
              )}
            </div>

            

            <button
              type="submit"
              className="px-8 w-full md:w-auto mt-3 md:mt-0 py-2 secondary-bg text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform transition-transform hover:scale-105 h-[42px]"
              aria-label="Search properties"
            >
              SEARCH
            </button>
          </div>
        </form>

        {/* Property Results Section */}
        {filteredProperties.length > 0 && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProperties.map((property) => (
              <div key={property.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900">{property.title}</h3>
                  <p className="text-2xl font-bold text-blue-600 mt-2">{property.price}</p>
                  <div className="mt-4 flex items-center justify-between text-gray-600">
                    <div className="flex items-center">
                      <BiBed className="text-lg mr-1" />
                      <span>{property.beds} beds</span>
                    </div>
                    <div className="flex items-center">
                      <BiBath className="text-lg mr-1" />
                      <span>{property.baths} baths</span>
                    </div>
                    <div className="flex items-center">
                      <FaRulerCombined className="text-lg mr-1" />
                      <span>{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredProperties.length === 0 && searchQuery && selectedCity && (
          <div className="mt-8 text-center text-gray-600">
            No properties found matching your search criteria.
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertySearch;
