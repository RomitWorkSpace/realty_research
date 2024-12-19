import React from 'react'
import BlogArticle from './BlogArticle'
import BlogFeature from '../../blog/components/BlogFeature'

function DetailWrapper() {
    return (
        <>
        <div className="container-fluid py-12">
            <div className="md:px-16">
                <div className="flex flex-wrap">
                    <div className="md:w-2/3 w-full">
                        <BlogArticle />
                    </div>
                    <div className="md:w-1/3 w-full">
                        <BlogFeature />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default DetailWrapper
