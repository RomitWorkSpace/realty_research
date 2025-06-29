import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { FaTags } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";

import Blog1 from 'imgPath/blog1.jpg'
import { Link } from 'react-router-dom';

function NewsCard({Title, Thumbnail, Slug, PublishDate}) {
    return (
        <>
        <div className="news-card p-4">
            <img src={`/images/blogs/${Thumbnail}`} alt="blog" width="100%" />
            <div className="p-4 shadow-lg">
                <div className="flex gap-3 mb-4">
                    <div className="flex items-center gap-2"><FaRegUser className='secondary-color' /> <span className="text-gray-500">by: Admin</span></div>
                    <div className="flex items-center gap-2"><FaTags className='secondary-color' /> <span className="text-gray-500">Residential</span></div>
                </div>
                <h4 className="text-2xl text-gray-800 font-semibold mb-4">{Title}</h4>
                <hr/>
                <div className="flex py-3 justify-between">
                    <div className="flex items-center gap-2"><FaRegCalendarAlt className='secondary-color' /> <span className="text-gray-500">{PublishDate}</span></div>
                    <Link to={`/blog/${Slug}`}>
                        <div className="secondary-color">READ MORE</div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}

export default NewsCard
