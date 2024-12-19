import { useState, useEffect } from "react";
import { BiLoaderAlt } from "react-icons/bi";

const ProjectFilter = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    sizes: [],
    colors: [],
    brands: [],
    priceRanges: []
  });

  const filterOptions = {
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Red", "Blue", "Green", "Black", "White"],
    brands: ["Nike", "Adidas", "Puma", "Reebok", "Under Armour"],
    priceRanges: ["0-50", "51-100", "101-200", "201-500", "500+"]
  };

  const dummyProducts = [
    {
      id: 1,
      name: "Sport Shoes",
      brand: "Nike",
      color: "Black",
      size: "L",
      price: 150,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      id: 2,
      name: "Running Jacket",
      brand: "Adidas",
      color: "Blue",
      size: "M",
      price: 80,
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b"
    },
    {
      id: 3,
      name: "Training Shorts",
      brand: "Puma",
      color: "Red",
      size: "S",
      price: 45,
      image: "https://images.unsplash.com/photo-1562157873-818bc0726f68"
    }
  ];

  useEffect(() => {
    fetchProducts();
  }, [filters]);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      // Simulating API call with setTimeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      // Filter products based on selected filters
      const filteredProducts = dummyProducts.filter(product => {
        if (filters.sizes.length && !filters.sizes.includes(product.size)) return false;
        if (filters.colors.length && !filters.colors.includes(product.color)) return false;
        if (filters.brands.length && !filters.brands.includes(product.brand)) return false;
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

  const FilterSection = ({ title, category, options }) => (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3">{title}</h3>
      <div className="space-y-2">
        {options.map((option) => (
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
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-6">Filters</h2>
            <FilterSection title="Size" category="sizes" options={filterOptions.sizes} />
            <FilterSection title="Color" category="colors" options={filterOptions.colors} />
            <FilterSection title="Brand" category="brands" options={filterOptions.brands} />
            <FilterSection
              title="Price Range"
              category="priceRanges"
              options={filterOptions.priceRanges}
            />
          </div>

          <div className="md:col-span-3">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <BiLoaderAlt className="w-10 h-10 text-blue-600 animate-spin" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                      <div className="space-y-1">
                        <p className="text-gray-600">Brand: {product.brand}</p>
                        <p className="text-gray-600">Color: {product.color}</p>
                        <p className="text-gray-600">Size: {product.size}</p>
                        <p className="text-blue-600 font-semibold">${product.price}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {products.length === 0 && (
                  <div className="col-span-full text-center py-10">
                    <p className="text-gray-500 text-lg">No products found matching your criteria</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectFilter;