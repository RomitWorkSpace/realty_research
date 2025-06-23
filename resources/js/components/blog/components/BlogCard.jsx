import React from 'react'
import Blog from 'imgPath/blog1.jpg'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function BlogCard({Title, Thumbnail, Slug, Description, PublishDate}) {
    return (
        <>
        <div className="blog-card shadow-lg mb-6">
            <img src={`/images/blogs/${Thumbnail}`} alt="blog" width="100%" />
            <div className="p-6">
                <div className="inline-block primary-bg text-white px-5 py-2">Real Estate</div>
                <h2 className="text-gray-800 font-semibold text-xl md:text-3xl mt-5">{Title}</h2>

                <div className="py-5 text-gray-600 text-justify">
                <div
                    dangerouslySetInnerHTML={{__html: Description.substr(0, 250)+"..."}}
                />
                </div>
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

export default BlogCard
