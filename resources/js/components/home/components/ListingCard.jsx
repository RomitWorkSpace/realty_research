import React from 'react'
import { BiBed, BiBath } from "react-icons/bi";
import { MdOutlineBedroomParent, MdOutlineViewArray } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ListingCard({ PropertyImage, Price, Title, Description, Slug, PLocation, Pid, Bathroom, Area, Room }) {
    return (
        <>
        <Link to={`/residential/${PLocation}/${Slug}/${Pid}`}>
        <div className="w-full shadow-md">
            <img src={`/images/property/${PropertyImage}`} alt="Property" width="100%" />
            <div className="p-4">
                <p className="text-orange-400 font-semibold">₹ {Price > 99 ? Price/100 + ' Cr' : Price + ' Lacs'}</p>
                <h4 className="font-semibold mt-4 text-lg text-gray-800">{Title}</h4>
                <div className='text-gray-600 mt-4 text-sm text-justify'
                    dangerouslySetInnerHTML={{__html: Description.substr(0, 80)+"..."}}
                />

                <div className="facility py-4">
                    <div className="flex">
                        <div className="w-1/4 flex border-r-2 items-center">
                            <span className=''><BiBath /></span><span className='text-sm'>{Bathroom}</span>
                        </div>
                        <div className="w-2/4 flex border-r-2 items-center">
                            <span className=''><MdOutlineViewArray /></span><span className='text-sm'>{Area} sqft</span>
                        </div>
                        <div className="w-1/4 flex items-center">
                            <span className=''><MdOutlineBedroomParent /></span><span className='text-sm'>{Room}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
        </>
    )
}

export default ListingCard
