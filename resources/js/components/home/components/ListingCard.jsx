import React from 'react'
import { BiBed, BiBath } from "react-icons/bi";

function ListingCard({ Villa }) {
    return (
        <>
        <div className="w-full shadow-md">
            <img src={ Villa } alt="Property" width="100%" />
            <div className="p-4">
                <p className="text-orange-400 font-semibold">$34,999/month</p>
                <h4 className="font-semibold mt-4 text-lg text-gray-800">New Apartment Nice View</h4>
                <p className="text-gray-600 mt-4 text-sm">Beautiful Huge 1 Family House in the Heart of Westburry, Newly</p>

                <div className="facility py-4">
                    <div className="flex">
                        <div className="w-1/3 flex border-r-2">
                            <span>2</span><span><BiBath /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ListingCard
