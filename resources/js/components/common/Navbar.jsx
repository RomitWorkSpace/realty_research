import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";

import Logo from 'imgPath/RR-logo.png'
import { Link } from "react-router-dom";
import axios from "axios";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [subDropdown, setSubDropdown] = useState(null);
  const [gynoservices, setGynoServices] = useState(null);
  const [neuroservices, setNeuroServices] = useState(null);
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {

    axios.get(`/api/allservice/gynecology`).then(res => {
        setGynoServices(res.data.allservices);
    })

    axios.get(`/api/allservice/neuroscience`).then(res => {
      setNeuroServices(res.data.allservices);
  })

},[]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
    setSubDropdown(null);
  };

  // const dropdownHover = (index) => {
  //   setActiveDropdown(activeDropdown === index ? null : index);
  //   setSubDropdown(null);
  // };

  const serviceDropdown = (index) => {
    setSubDropdown(subDropdown === index ? null : index);
  };

  const navItems = [
    {
      title: "Department",
      link: "#",
      dropdownItems: [
        {
        name: "Gynecology",
        link: "/department/gynecology",
        serviceItems: [
          {
            name: "gyno1",
            link: "/service/gyno"
          },
          {
            name: "gyno2",
            link: "/service/gyno2"
          }
        ]
      },
      {
        name: "Neuroscience",
        link: "/department/neuroscience",
        serviceItems: [
          {
            name: "neuro1",
            link: "/service/gyno"
          },
          {
            name: "neuro2",
            link: "/service/gyno2"
          }
        ]
      }
    ],
    },
    {
      title: "Consultant",
      link: "#",
      dropdownItems: [
        {
          name: "Dr. Aradhana Singh",
          link: "/consultant/aradhana-singh"
        },
        {
          name: "Dr. Yashpal Singh",
          link: "/consultant/yashpal-singh-bundela"
        }
      ],
    },
  ];


  return (
    <nav className="bg-gradient-to-b from-[#cad1e7] to-[#f5f5f5] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <img
                className="h-20 w-auto"
                src={ Logo }
                alt="Aarunya Logo"
              />
            </a>
          </div>
          {isMobile ? (
            <div className="flex items-center">
              <button
                onClick={toggleSidebar}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Open menu"
              >
                <FaBars className="h-6 w-6" />
              </button>
            </div>
          ) : (
            <div className="hidden md:flex md:items-center">
              <ul className="flex space-x-2" ref={dropdownRef}>
                <li className="relative group">
                  <button
                  className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
                  aria-haspopup="false"
                  aria-expanded="false"
                  >
                  <Link to="/">
                    <b>Home</b>
                  </Link>
                  </button>
                </li>

                <li className="relative group">
                  <button
                  className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
                  aria-haspopup="false"
                  aria-expanded="false"
                  >
                  <Link to="/about">
                    <b>About</b>
                  </Link>
                  </button>
                </li>

                <li className="relative group"
                onMouseEnter={() => toggleDropdown(3)}
                onMouseLeave={() => toggleDropdown(0)}
                >
      <button
        className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
        
        aria-haspopup={activeDropdown === 3 ? "true" : "false"}
        aria-expanded={activeDropdown === 3 ? "true" : "false"}
      >
          <b>Department</b>

          <FaChevronDown className="ml-1 text-xs transition-transform duration-200 ease-in-out transform group-hover:rotate-180" />

      </button>

        <ul
          className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-300 ${
            activeDropdown === 3
              ? "visible z-10 translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
          
        >
          
            <li className="relative group">
              <Link to="/department/gynecology" onClick={() => setActiveDropdown(null)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100"
              >
                Gynaecology
              </Link>
              
            </li>

            <li className="relative group">
              <Link to="/department/neuroscience" onClick={() => setActiveDropdown(null)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100"
              >
                Neuroscience
              </Link>
            </li>
        </ul>
    </li>


                <li className="relative group"
                onMouseEnter={() => toggleDropdown(1)}
                onMouseLeave={() => toggleDropdown(0)}
                >
      <button
        className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
        onClick={() => toggleDropdown(1)}
        aria-haspopup={activeDropdown === 1 ? "true" : "false"}
        aria-expanded={activeDropdown === 1 ? "true" : "false"}
      >
          <b>Services</b>

          <FaChevronDown className="ml-1 text-xs transition-transform duration-200 ease-in-out transform group-hover:rotate-180" />

      </button>

        <ul
          className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-300 ${
            activeDropdown === 1
              ? "visible z-10 translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          
            <li className="relative group">
              <span
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 cursor-pointer" onClick={() => serviceDropdown(1)}
              >
                Gynecology
              </span>
              <button
                className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none absolute top-0 right-0"
                onClick={() => serviceDropdown(1)}
                aria-haspopup={subDropdown === 1 ? "true" : "false"}
                aria-expanded={subDropdown === 1 ? "true" : "false"}
              >
                  <FaChevronDown className="ml-1 text-xs transition-transform duration-200 ease-in-out transform group-hover:rotate-180" />
              </button>
              <ul
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-300${
                subDropdown === 1
                ? "visible z-10 translate-x-20"
                : "opacity-0 invisible -translate-x-2"
                }`}
              >
                {gynoservices && gynoservices.map((item) => (
                <li className="relative group">
                    <Link to={`/services/${item.slug}`} onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100"
                    >
                    {item.title}
                    </Link>
                </li>
                ))}
              </ul>
            </li>

            <li className="relative group">
              <span
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100 cursor-pointer" onClick={() => serviceDropdown(2)}
              >
                NeuroScience
              </span>
              <button
                className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none absolute top-0 right-0"
                onClick={() => serviceDropdown(2)}
                aria-haspopup={subDropdown === 2 ? "true" : "false"}
                aria-expanded={subDropdown === 2 ? "true" : "false"}
              >
                  <FaChevronDown className="ml-1 text-xs transition-transform duration-200 ease-in-out transform group-hover:rotate-180" />
              </button>
              <ul
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-300${
                subDropdown === 2
                ? "visible z-10 translate-x-20"
                : "opacity-0 invisible -translate-x-2"
                }`}
              >
                {neuroservices && neuroservices.map((item) => (
                <li className="relative group">
                    <Link to={`/services/${item.slug}`} onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100"
                    >
                    {item.title}
                    </Link>
                </li>
                ))}
              </ul>
            </li>

        </ul>
 
    </li>


    <li className="relative group"
    onMouseEnter={() => toggleDropdown(2)}
    onMouseLeave={() => toggleDropdown(0)}
    >
      <button
        className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
        onClick={() => toggleDropdown(2)}
        aria-haspopup={activeDropdown === 2 ? "true" : "false"}
        aria-expanded={activeDropdown === 2 ? "true" : "false"}
      >
          <b>Consultant</b>

          <FaChevronDown className="ml-1 text-xs transition-transform duration-200 ease-in-out transform group-hover:rotate-180" />

      </button>

        <ul
          className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-300${
            activeDropdown === 2
              ? "visible z-10 translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          
            <li className="relative group">
              <Link to="/consultant/aradhana-singh" onClick={() => setActiveDropdown(null)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100"
              >
                Dr. Aradhana Singh
              </Link>
              
            </li>

            <li className="relative group">
              <Link to="/consultant/yashpal-singh-bundela" onClick={() => setActiveDropdown(null)}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100"
              >
                Dr. Yashpal Singh
              </Link>
            </li>
        </ul>
    </li>


    {/* <li className="relative group">
      <button
        className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
        onClick={() => item.dropdownItems && toggleDropdown(index)}
        aria-haspopup={item.dropdownItems ? "true" : "false"}
        aria-expanded={activeDropdown === index ? "true" : "false"}
      >
        <Link to={item.link}>
          <b>{item.title}</b>
        </Link>
        {item.dropdownItems && (
          <FaChevronDown className="ml-1 text-xs transition-transform duration-200 ease-in-out transform group-hover:rotate-180" />
        )}
      </button>
      {item.dropdownItems && (
        <ul
          className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-300 dropdown-onhover ease-in-out ${
            activeDropdown === index
              ? "opacity-100 visible z-10 translate-y-0"
              : "opacity-0 invisible -translate-y-2"
          }`}
        >
          
          {item.dropdownItems.map((subItem, subIndex) => (
            <li key={subIndex} relative group>
              <Link to={subItem.link}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100"
              >
                {subItem.name}
              </Link>
              <button
                className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
                onClick={() => subItem.serviceItems && serviceDropdown(index)}
                aria-haspopup={subItem.serviceItems ? "true" : "false"}
                aria-expanded={subDropdown === index ? "true" : "false"}
              >
                <Link to={subItem.link}>
                  <b>{subItem.title}</b>
                </Link>
                {subItem.serviceItems && (
                  <FaChevronDown className="ml-1 text-xs transition-transform duration-200 ease-in-out transform group-hover:rotate-180" />
                )}
              </button>
              {subItem.serviceItems && (
              <ul
                className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 transition-all duration-300 dropdown-onhover ease-in-out ${
                subDropdown === index
                ? "opacity-100 visible z-10 translate-x-10"
                : "opacity-0 invisible -translate-x-2"
                }`}
              >
                {subItem.serviceItems.map((items, subInd) => (
                <li key={subInd} relative group>
                    <Link to={items.link}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100"
                    >
                    {items.name}
                    </Link>
                </li>
                ))}
              </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </li> */}


                <li className="relative group">
                  <button
                  className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
                  aria-haspopup="false"
                  aria-expanded="false"
                  >
                  <Link to="/events">
                    <b>Events</b>
                  </Link>
                  </button>
                </li>

                <li className="relative group">
                  <button
                  className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
                  aria-haspopup="false"
                  aria-expanded="false"
                  >
                  <Link to="/research">
                    <b>Research</b>
                  </Link>
                  </button>
                </li>

                <li className="relative group">
                  <button
                  className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
                  aria-haspopup="false"
                  aria-expanded="false"
                  >
                  <Link to="/blog">
                    <b>Blog</b>
                  </Link>
                  </button>
                </li>

                <li className="relative group">
                  <button
                  className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
                  aria-haspopup="false"
                  aria-expanded="false"
                  >
                  <Link to="/gallery">
                    <b>Gallery</b>
                  </Link>
                  </button>
                </li>

                <li className="relative group">
                  <button
                  className="flex items-center px-4 py-2 clr-blue hover:text-pink-600 focus:outline-none"
                  aria-haspopup="false"
                  aria-expanded="false"
                  >
                  <Link to="/contact">
                    <b>Contact</b>
                  </Link>
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      {isMobile && (
        <div 
          className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
            sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
          <div style={{overflowY:'scroll'}}
            className={`fixed inset-y-0 left-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
              <span className="text-xl font-bold text-gray-800">Menu</span>
              <button
                onClick={toggleSidebar}
                className="text-gray-700 hover:text-blue-600 focus:outline-none"
                aria-label="Close menu"
              >
                <FaTimes className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li onClick={toggleSidebar}>
                  <Link to="/">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      Home
                    </button>
                  </Link>
                </li>
                <li onClick={toggleSidebar}>
                  <Link to="/about">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      About
                    </button>
                  </Link>
                </li>


                <li>
                    <Link to="">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      onClick={() =>
                        toggleDropdown(3)
                      }
                      aria-haspopup="true"
                      aria-expanded={
                        activeDropdown === 3 ? "true" : "false"
                      }
                    >
                      Department
                        <FaChevronDown className="float-right mt-1" />
                    </button>
                    </Link>
                      <ul
                        className={`pl-8 mt-2 space-y-2 transition-all duration-300 ease-in-out ${
                          activeDropdown === 3
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        } overflow-hidden`}
                      >
                          <li onClick={toggleSidebar}>
                            <a
                              href="/department/gynecology"
                              className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                              Gynecology
                            </a>
                          </li>
                          <li onClick={toggleSidebar}>
                            <a
                              href="/department/neuroscience"
                              className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                              Neuroscience
                            </a>
                          </li>
                      </ul>
                  </li>
 

                  <li>
                    <Link to="">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      onClick={() =>
                        toggleDropdown(1)
                      }
                      aria-haspopup="true"
                      aria-expanded={
                        activeDropdown === 1 ? "true" : "false"
                      }
                    >
                      Services
                        <FaChevronDown className="float-right mt-1" />
                    </button>
                    </Link>
                      <ul
                        className={`pl-8 mt-2 space-y-2 transition-all duration-300 ease-in-out ${
                          activeDropdown === 1
                            ? "opacity-100"
                            : "max-h-0 opacity-0"
                        } overflow-hidden`}
                      >
                        <li>
                          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                          onClick={() =>
                            serviceDropdown(1)
                          }
                          aria-haspopup="true"
                          aria-expanded={
                            activeDropdown === 1 ? "true" : "false"
                          }
                          >
                            Gynecology
                            <FaChevronDown className="float-right mt-1" />
                          </button>
                          <ul
                            className={`pl-8 mt-2 space-y-2 transition-all duration-300 ease-in-out ${
                            subDropdown === 1
                            ? "opacity-100"
                            : "max-h-0 opacity-0"
                            } overflow-hidden`}
                          >
                            {gynoservices && gynoservices.map((item) => (
                            <li onClick={toggleSidebar}>
                            <a
                              href={`/services/${item.slug}`}
                              className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                              {item.title}
                            </a>
                          </li>
                            ))}
                          </ul>
                        </li>

                        <li>
                          <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                          onClick={() =>
                            serviceDropdown(2)
                          }
                          aria-haspopup="true"
                          aria-expanded={
                            activeDropdown === 2 ? "true" : "false"
                          }
                          >
                            NeuroScience
                            <FaChevronDown className="float-right mt-1" />
                          </button>
                          <ul
                            className={`pl-8 mt-2 space-y-2 transition-all duration-300 ease-in-out ${
                            subDropdown === 2
                            ? "opacity-100"
                            : "max-h-0 opacity-0"
                            } overflow-hidden`}
                          >
                            {neuroservices && neuroservices.map((item) => (
                            <li onClick={toggleSidebar}>
                            <a
                              href={`/services/${item.slug}`}
                              className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                              {item.title}
                            </a>
                          </li>
                            ))}
                          </ul>
                        </li>
                      </ul>
                  </li>


                  <li>
                    <Link to="">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      onClick={() =>
                        toggleDropdown(2)
                      }
                      aria-haspopup="true"
                      aria-expanded={
                        activeDropdown === 2 ? "true" : "false"
                      }
                    >
                      Consultant
                        <FaChevronDown className="float-right mt-1" />
                    </button>
                    </Link>
                      <ul
                        className={`pl-8 mt-2 space-y-2 transition-all duration-300 ease-in-out ${
                          activeDropdown === 2
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                        } overflow-hidden`}
                      >
                          <li onClick={toggleSidebar}>
                            <a
                              href="/consultant/aradhana-singh"
                              className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                              Dr. Aradhana Singh
                            </a>
                          </li>
                          <li onClick={toggleSidebar}>
                            <a
                              href="/consultant/yashpal-singh-bundela"
                              className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                            >
                              Dr. Yashpal Singh
                            </a>
                          </li>
                      </ul>
                  </li>


                <li onClick={toggleSidebar}>
                  <Link to="/events">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      Events
                    </button>
                  </Link>
                </li>

                <li onClick={toggleSidebar}>
                  <Link to="/research">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      Research
                    </button>
                  </Link>
                </li>

                <li onClick={toggleSidebar}>
                  <Link to="/blog">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      Blog
                    </button>
                  </Link>
                </li>
                <li onClick={toggleSidebar}>
                  <Link to="/gallery">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      Gallery
                    </button>
                  </Link>
                </li>
                <li onClick={toggleSidebar}>
                  <Link to="/contact">
                    <button
                      className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
                      aria-haspopup="false"
                      aria-expanded="false"
                    >
                      Contact
                    </button>
                  </Link>
                </li>
                <li className="pl-4">
                  <button className="clr-pink py-3 px-8 text-center border border-pink-500 rounded-full" >Book Appointment</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
