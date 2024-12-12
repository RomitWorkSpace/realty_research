import React from 'react'
import NewsCard from './NewsCard'

function NewsSection() {
    return (
        <>
        <div className="container-fluid pt-12 pb-16">
            <div className="md:px-16 text-center">
                <div className="inline-block secondary-bg rounded-lg font-semibold px-4">News & Blogs</div>
                <h2 className="font-semibold primary-color text-3xl">Latest News Feeds</h2>
            </div>
            <div className="md:px-16 mt-7">
                    <div className="flex flex-wrap">
                        <div className="md:w-1/3">
                            <NewsCard />
                        </div>
                        <div className="md:w-1/3">
                            <NewsCard />
                        </div>
                        <div className="md:w-1/3">
                            <NewsCard />
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default NewsSection
