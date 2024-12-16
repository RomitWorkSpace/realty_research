import React from 'react'

import TopRatedProducts from './TopRatedProducts'
import TopCategory from './TopCategory'
import PopularBlog from './PopularBlog'

function BlogFeature() {
    return (
        <>
        <div className="blog-feature px-4">
            <TopRatedProducts />
            <TopCategory />
            <PopularBlog />
        </div>
        </>
    )
}

export default BlogFeature
