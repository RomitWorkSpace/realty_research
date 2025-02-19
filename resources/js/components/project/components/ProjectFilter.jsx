import { useState, useRef, useEffect } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { BsFilterLeft } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { FaCamera, FaLocationDot } from "react-icons/fa6";


const ProjectFilter = () => {
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [propertyList, setPropertyList] = useState([]);

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedLocationID, setSelectedLocationID] = useState(0);
  const [selectedProperty, setSelectedProperty] = useState("");
  const [isStateOpen, setIsStateOpen] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [isPropertyOpen, setIsPropertyOpen] = useState(false);

  const [cityName, setCityName] = useState("");
  const [cities, setCities] = useState([]);
  const [locations, setLocationList] = useState([]);
  const dropdownRef = useRef(null);

  const {cityname, queryLocation, builder} = useParams();

  var property_city = cityname;
  var property_location = queryLocation.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  if(property_location == "All")
  {
    property_location = "Select Location";
  }

  const propertyTypes = ["Apartment", "House", "Condo", "Villa", "Townhouse"];

  const [filters, setFilters] = useState({
    rooms: [],
    bathrooms: [],
    status:[],
    priceRanges: []
  });

  const filterOptions = {
    rooms: ["1 BHK", "2 BHK", "3 BHK", "4 BHK", "5 BHK"],
    bathrooms: ["1", "2", "3", "4", "5"],
    status: ["Coming Soon", "Launch", "Ready to Move", "Under Construction"],
    priceRanges: ["0-50", "51-100", "101-200", "201-500", "500+"]
  };

  useEffect(() => {
    // Fetch your dropdown data from the database
    // Replace the following with your actual API call or data retrieval logic
    const fetchData = async () => {
      try {

        axios.get(`/api/property_list/${cityname}/${queryLocation}`).then(res => {
          setPropertyList(res.data.property_list);
      })
      } catch (error) {
        console.error('Error fetching property list data:', error);
      }
      
    };
    setSelectedCity(cityname);
    fetchData();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    setLoading(true);
    setIsSidebarOpen(false);
    try {
      // Simulating API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Filter products based on selected filters
      const filteredProducts = propertyList.filter(product => {
        if (filters.rooms.length && !filters.rooms.includes(product.room)) return false;
        if (filters.bathrooms.length && !filters.bathrooms.includes(product.bathroom)) return false;
        if (filters.status.length && !filters.status.includes(product.property_status)) return false;
        if (filters.priceRanges.length) {
          const matchesPrice = filters.priceRanges.some(range => {
            const [min, max] = range.split("-").map(Number);
            return max ? (product.price >= min && product.price <= max) : product.price >= min;
          });
          if (!matchesPrice) return false;
        }
        return true;
      });
      setProducts(filteredProducts);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setLoading(false);
  };

  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const updatedFilters = { ...prev };
      if (updatedFilters[category].includes(value)) {
        updatedFilters[category] = updatedFilters[category].filter(item => item !== value);
      } else {
        updatedFilters[category] = [...updatedFilters[category], value];
      }
      return updatedFilters;
    });
  };

  // Filter dropdown control

  useEffect(() => {
    // Fetch your dropdown data from the database
    // Replace the following with your actual API call or data retrieval logic
    const fetchData = async () => {
      try {
        const response = await fetch('/api/cities');
        const data = await response.json();
        setCities(data.city_list);
      } catch (error) {
        console.error('Error fetching city data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Fetch your dropdown data from the database
    // Replace the following with your actual API call or data retrieval logic
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/search_city/${cityname}`);
        const data = await response.json();
        setLocationList(data.location_list);
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchData();
  }, [cityname]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsStateOpen(false);
        setIsLocationOpen(false);
        setIsPropertyOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);

  }, []);

  useEffect(() => {
    let queryCity = cityname.replaceAll("-"," ");
    
    let cityTitlecase = queryCity.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    setCityName(cityTitlecase);
    let index = cities.indexOf(cityTitlecase);
    if (index > -1) { // only splice array when item is found
        cities.splice(index, 1); // 2nd parameter means remove one item only
      }

  }, [selectedCity]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setSelectedLocation("");
    setIsStateOpen(false);
    let queryCity = city.toLowerCase().replaceAll(" ","-");
    window.location.href = "/property/"+queryCity+"/all/"+builder;
  };

  const handleLocationSelect = (selectedCity, location, location_slug) => {

    let queryCity = selectedCity.toLowerCase().replaceAll(" ","-");
    setSelectedLocation(location);
    setIsLocationOpen(false);
    window.location.href = "/property/"+queryCity+"/"+location_slug+"/"+builder;
  };

  const handlePropertySelect = (property) => {
    setSelectedProperty(property);
    setIsPropertyOpen(false);
  };

  function upperCase(data){
    var s =  data.toUpperCase();
    return s;
  }

  const FilterSection = ({ title, flex, category, options }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className={flex ? 'flex flex-wrap' : ''}>
        {options.map((option) => (
          <div className={flex ? 'w-1/2' : ''}>
            <label
            key={option}
            className="flex items-center space-x-2 cursor-pointer group"
          >
            <input
              type="checkbox"
              checked={filters[category].includes(option)}
              onChange={() => handleFilterChange(category, option)}
              className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 transition-all"
              aria-label={`Filter by ${option}`}
            />
            <span className="text-gray-700 group-hover:text-blue-600 transition-colors">
              {option}
            </span>
          </label>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="md:hidden sticky top-0 z-50 bg-white py-2">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="md:hidden flex items-center gap-2 mb-4 secondary-bg px-4 py-2 rounded-lg"
          >
            <BsFilterLeft className="text-xl" /> Filters
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
        <div className={`
          fixed md:relative top-0 left-0 h-full md:h-auto w-80 md:w-64
          bg-white md:bg-transparent z-50 transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          p-6 md:pt-0 shadow-lg md:shadow-none overflow-y-auto
        `}>
          <div className="md:sticky md:top-4">
          <div className="flex justify-between items-center md:hidden mb-6">
              <h2 className="text-xl font-semibold">Filters</h2>
              <button onClick={() => setIsSidebarOpen(false)}>
                <IoClose className="text-2xl" />
              </button>
            </div>
          <div className="">
            <h2 className="text-xl font-semibold mb-4">Filters</h2>


            {/* Filter dropdown */}
            <div className="" ref={dropdownRef}>
      <div className="">
        {/* State Dropdown */}
        <div className="relative mb-4">
          <button
            onClick={() => setIsStateOpen(!isStateOpen)}
            className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 flex justify-between items-center"
          >
            {property_city.toUpperCase() || selectedCity}
            <FaChevronDown className={`transform transition-transform duration-200 ${isStateOpen ? "rotate-180" : ""}`} />
          </button>
          <div
            className={`absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-200 ${
              isStateOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {cities.map((item) => (
              <button
                key={item.city}
                onClick={() => handleCitySelect(item.city)}
                className={`w-full px-4 py-2 text-sm text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-150 ${cityName == item.city ? 'bg-gray-200': ''}`}
              >
                {upperCase(item.city)}
              </button>
            ))}
          </div>
        </div>

        {/* Location Dropdown */}
        <div className="relative mb-4">
          <button
            onClick={() => cityName && setIsLocationOpen(!isLocationOpen)}
            className={`w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 flex justify-between items-center ${
              !cityName ? "cursor-not-allowed bg-gray-50" : ""
            }`}
            disabled={!cityName}
          >
            {property_location || selectedLocation || "Select Location"}
            <FaChevronDown className={`transform transition-transform duration-200 ${isLocationOpen ? "rotate-180" : ""}`} />
          </button>
          <div
            className={`absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-200 ${
              isLocationOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {locations &&
              locations.map((location) => (
                <button
                  key={location.location_name}
                  onClick={() => handleLocationSelect(selectedCity, location.location_name, location.slug)}
                  className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-150"
                >
                  {location.location_name}
                </button>
              ))}
          </div>
        </div>

        {/* Property Type Dropdown */}
        <div className="relative mb-4">
          <button
            onClick={() => setIsPropertyOpen(!isPropertyOpen)}
            className="w-full px-4 py-3 text-left bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 flex justify-between items-center"
          >
            {selectedProperty || "Select Property Type"}
            <FaChevronDown className={`transform transition-transform duration-200 ${isPropertyOpen ? "rotate-180" : ""}`} />
          </button>
          <div
            className={`absolute z-20 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg transition-all duration-200 ${
              isPropertyOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {propertyTypes.map((property) => (
              <button
                key={property}
                onClick={() => handlePropertySelect(property)}
                className="w-full px-4 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors duration-150"
              >
                {property}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>

            <FilterSection title="Rooms" flex="yes" category="rooms" options={filterOptions.rooms} />
            <FilterSection title="Bathrooms" flex="yes" category="bathrooms" options={filterOptions.bathrooms} />
            <FilterSection title="Property Status" flex="" category="status" options={filterOptions.status} />
            <FilterSection
              title="Price Range"
              flex=""
              category="priceRanges"
              options={filterOptions.priceRanges}
            />
          </div>
          </div>
          </div>

          <div className="flex-1">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <BiLoaderAlt className="w-10 h-10 text-blue-600 animate-spin" />
              </div>
            ) : (
              <>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${products.length != 0 ? "hidden" : ""}`}>
                {propertyList && propertyList.map((product) => (
                  <Link to={`/real-estate/${product.p_location}/${product.slug}/${product.p_id}`}>
                    <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                  >
                    <div className="relative">
                    <img
                      src={`/images/property/${JSON.parse(product.images)[0]}`}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-3" style={{backgroundColor:'#262525a6'}}>
                    <div className="flex items-center justify-between text-gray-100 text-sm font-semibold">
                        <div className="flex items-center"><FaLocationDot /> {product.location}</div>
                        <div className="flex items-center text-gray-300"><FaCamera /> 3</div>
                      </div>
                    </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.property_name}</h3>
                      <div className="space-y-1">
                        <p className="secondary-color text-lg font-semibold">₹ {product.price > 99 ? product.price/100 + ' Cr' : product.price + ' Lacs'}</p>
                        <p className="text-gray-600">Status: {product.property_status}</p>
                        <p className="text-gray-600">Bathroom: {product.bathroom}</p>
                        <p className="text-gray-600">Room: {product.room}</p>
                        
                      </div>
                    </div>
                  </div>
                  </Link>
                ))}
                
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-6`}>
                {products && products.map((product) => (
                  <Link to={`/real-estate/${product.p_location}/${product.slug}/${product.p_id}`}>
                    <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                  >
                     <div className="relative">
                    <img
                      src={`/images/property/${JSON.parse(product.images)[0]}`}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 px-6 py-3" style={{backgroundColor:'#262525a6'}}>
                      <div className="flex items-center justify-between text-gray-100 text-sm font-semibold">
                          <div className="flex items-center"><FaLocationDot /> {product.location}</div>
                          <div className="flex items-center text-gray-300"><FaCamera /> 3</div>
                      </div>
                    </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.property_name}</h3>
                      <div className="space-y-1">
                        <p className="secondary-color text-lg font-semibold">₹ {product.price > 99 ? product.price/100 + ' Cr' : product.price + ' Lacs'}</p>
                        <p className="text-gray-600">Status: {product.property_status}</p>
                        <p className="text-gray-600">Bathroom: {product.bathroom}</p>
                        <p className="text-gray-600">Room: {product.room}</p>
                        
                      </div>
                    </div>
                  </div>
                  </Link>
                ))}
                {products.length === 0 && (
                  <div className="col-span-full text-center py-10">
                    <p className="text-gray-500 text-lg">No more project matching your criteria</p>
                  </div>
                )}
              </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;