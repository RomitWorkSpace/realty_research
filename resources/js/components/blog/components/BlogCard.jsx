import React from 'react'
import Blog from 'imgPath/blog1.jpg'
import { FaRegCalendarAlt } from 'react-icons/fa'

function BlogCard() {
    return (
        <>
        <div className="blog-card shadow-lg mb-6">
            <img src={Blog} alt="blog" width="100%" />
            <div className="p-6">
                <div className="inline-block primary-bg text-white px-5 py-2">Business</div>
                <h2 className="text-gray-800 font-semibold text-xl md:text-3xl mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry</h2>

                <div className="py-5">
                    <p className="text-gray-600 text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="flex py-3 justify-between">
                    <div className="flex items-center gap-2"><FaRegCalendarAlt className='secondary-color' /> <span className="text-gray-500">July 26,2023</span></div>
                    <div className="secondary-color">READ MORE</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogCard
