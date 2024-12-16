import React from 'react'
import BlogCatalog from './BlogCatalog'
import BlogFeature from './BlogFeature'

function BlogWrapper() {
    return (
        <>
        <div className="container-fluid py-12">
            <div className="md:px-16">
                <div className="flex flex-wrap">
                    <div className="md:w-2/3 w-full">
                        <BlogCatalog />
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

export default BlogWrapper
