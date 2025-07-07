import React, { useState, useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiBed, BiBath } from "react-icons/bi";
import { FaRulerCombined } from "react-icons/fa";
import axios from "axios";

const PropertySearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [errors, setErrors] = useState({ search: "", state: "" });
  const [filteredProperties, setFilteredProperties] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [propertyType, setPropertyType] = useState("r");


  const cities = [
    "Noida",
    "Ghaziabad",
    "Gurgaon",
    "Gandhi Nagar",
  ];

  const mockData = [
    "Experion Elements",
    "Godrej Riverine",
    "Godrej Tropicle Isle",
    "Dasnac WestMinster",
    "MBM max estate",
    "ATS Knightsbridge",
    "Amrapali Sapphire",
    "Lotus Boulevard",
    "ATS Hamlet",
    "ATS Village",
    "Omaxe Grand",
    "Gulshan Vivante",
    "Ajnara Daffodil",
    "Logix Blossom County",
    "Gulshan Ikebana",
    "SKA Orion",
    "Gulshan Botnia",
    "Gulshan Dynasty",
    "Jaypee Kosmos",
    "Jaypee Klassic",
    "TATA Eureka Park",
    "ATS Pristine",
    "ACE Parkway",
    "ACE Golfshire",
    "IVORY County",
    "Mahagun Medalleo",
    "Amrapali Silicon City",
    "Amrapali Crystal Homes",
    "Amrapali HeartBeat City",
    "Mahagun Moderne",
    "Mahagun Mezzaria",
    "Mahagun Mirabella",
    "Prateek Wisteria",
    "Ajnara Grand Heritage",
    "Supertech Capetown",
    "Urbtech Hilston",
    "Civitech sampriti",
    "IVY County",
    "Elite golf greens",
    "Express Zenith",
    "Gaur Yamuna City",
    "Supertech Golf country",
    "Oasis Grandstand",
    "Imperia Prideville",
    "ATS allure",
    "ACE Estate"
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // useEffect(() => {
  //   const fetchData = async () => {
  //         try {
    
  //           axios.get(`/api/property_name`).then(res => {
  //             setMockData(convertObjectsToNestedArray(res.data.property_name));
  //             console.log(mockData);
  //         })

  //         } catch (error) {
  //           console.error('Error fetching property name data:', error);
  //         }
          
  //       };
  //       fetchData();
  // }, []);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim()) {
      const filteredSuggestions = mockData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
      setIsOpen(true);
    } else {
      setSuggestions([]);
      setIsOpen(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let validationErrors = {};

    if (!searchTerm.trim()) {
      validationErrors.search = "Please enter a search term";
    }

    if (!selectedCity) {
      validationErrors.city = "Please select a city";
    }
    let city = selectedCity.toLowerCase().replaceAll(" ","-");
    let builder = searchTerm.toLowerCase().replaceAll(" ","-");
    let location = "all";

    setErrors({});

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    else{
      window.location.href = "/search-property/"+propertyType+"/"+city+"/"+location+"/"+builder;
    }

    
    
    // Filter properties based on search query and selected city
    // const filtered = properties.filter(property => {
    //   const matchescity = property.city.toLowerCase() === selectedCity.toLowerCase();
    //   const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase());
    //   return matchescity && matchesSearch;
    // });

    // setFilteredProperties(filtered);
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
          <div className="flex flex-wrap">
            <div className="w-1/2 mb-4">
              <div onClick={() => setPropertyType("r")}
              className={propertyType == "r" ? 'font-semibold property_tab w-full text-center text-gray-200 pb-2 border-b-2 border-b-yellow-500' : 'font-semibold property_tab w-full text-center text-gray-200 pb-2 cursor-pointer'}>
                Residential
                <input type="radio" name="p_type" value={propertyType == "r" ? "r" : ""} className="hidden" id="residential" />
              </div>
            </div>
            <div className="w-1/2 mb-4">
              <div onClick={() => setPropertyType("c")}
              className={propertyType == "c" ? 'font-semibold property_tab w-full text-center text-gray-200 pb-2 border-b-2 border-b-yellow-500' : 'font-semibold property_tab w-full text-center text-gray-200 pb-2 cursor-pointer'}>
                Commercial
                <input type="radio" name="p_type" value={propertyType == "c" ? "c" : ""} className="hidden" id="commercial" />
              </div>
            </div>
          <div className="md:w-64">
              <div className="relative pr-4">
                <button
                  type="button"
                  className={`w-full px-2 py-2 text-left border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white flex items-center justify-between transition-colors`}
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
              <div className="relative md:pr-4" ref={dropdownRef}>
                <div className="relative">
                <input
                  type="text"
                  id="search"
                  className={`w-full pl-10 pr-4 py-2 border ${errors.search ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors`}
                  placeholder="Enter property name"
                  // value={searchQuery}
                  // onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search properties"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  onFocus={() => searchTerm.trim() && setIsOpen(true)}
                  aria-expanded={isOpen}
                  aria-controls="suggestion-list"
                  aria-haspopup="listbox"
                />
                </div>
                {isOpen && suggestions.length > 0 && (
          <div
            id="suggestion-list"
            role="listbox"
            className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto"
          >
            {suggestions.map((suggestion, index) => (
              <button
                key={index}
                role="option"
                aria-selected={searchTerm === suggestion}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-150 text-gray-700"
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}
        {isOpen && suggestions.length === 0 && searchTerm.trim() && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg p-4 text-center text-gray-500">
            No suggestions found
          </div>
        )}
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

      </div>
    </div>
  );
};

export default PropertySearch;
