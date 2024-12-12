import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

import Blog1 from 'imgPath/blog1.jpg'

function NewsCard() {
    return (
        <>
        <div className="news-card p-4">
            <img src={ Blog1 } alt="blog" width="100%" />
            <div className="p-4 shadow-lg">
                <div className="flex gap-3 mb-4">
                    <div className="flex items-center gap-2"><FaRegUser className='secondary-color' /> <span className="text-gray-500">by: Admin</span></div>
                    <div className="flex items-center gap-2"><FaTags className='secondary-color' /> <span className="text-gray-500">Interior</span></div>
                </div>
                <h4 className="text-2xl text-gray-800 font-semibold mb-4">The most inspiring interior design of 2021</h4>
                <hr/>
                <div className="flex py-3 justify-between">
                    <div className="flex items-center gap-2"><FaRegCalendarAlt className='secondary-color' /> <span className="text-gray-500">July 26,2023</span></div>
                    <div className="secondary-color">READ MORE</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewsCard
