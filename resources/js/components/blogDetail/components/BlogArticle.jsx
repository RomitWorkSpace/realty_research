import React from 'react'
import { FaCalendar, FaUserAlt } from 'react-icons/fa'

import Blog from 'imgPath/blog1.jpg'

function BlogArticle() {
    return (
        <>
        <div className="px-4 py-4 blog-article border-2">
            <div className="inline-block primary-bg text-white py-2 px-4 text-sm">REAL ESTATE</div>
            <div className="title-area py-5">
                <h3 className="font-semibold text-2xl">Real estate is a property consisting of land and building on it.</h3>
                <div className="flex my-4 gap-4">
                    <div className="user-icon flex items-center gap-2"><FaUserAlt className='secondary-color' /> <span className="text-gray-600 text-sm">By : Admin</span></div>
                    <div className="calendar-icon flex items-center gap-2"><FaCalendar className='secondary-color' /> <span className="text-gray-600 text-sm">July 26, 2024</span></div>
                </div>
                <div className="content text-gray-800 text-justify">
                    <p className="pb-8">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <img src={Blog} alt="blog" width="80%" className='mx-auto' />
                    <div className="py-5">
                        <h3 className="font-semibold text-2xl">A cleaning hot shower and bath</h3>
                        <p className="text-justify">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default BlogArticle
