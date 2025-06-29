import React, { useEffect, useState } from 'react'
import NewsCard from './NewsCard'
import axios from 'axios';

function NewsSection() {

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        axios.get('/api/homeblogs').then(res => {
            setBlogs(res.data.homeblogs);
        })
    },[]);

    return (
        <>
        <div className="container-fluid pt-12 pb-16">
            <div className="md:px-16 text-center">
                <div className="inline-block secondary-bg rounded-lg font-semibold px-4">News & Blogs</div>
                <h2 className="font-semibold primary-color text-3xl">Latest News Feeds</h2>
            </div>
            <div className="md:px-16 mt-7">
                    <div className="flex flex-wrap">
                        {blogs && blogs.map((blog)=>(
                            <div className="md:w-1/3">
                                <NewsCard Title={blog.title} Thumbnail={blog.image} Slug={blog.slug} PublishDate={blog.created_at} />
                            </div>
                        ))}
                    </div>
                </div>
        </div>
        </>
    )
}

export default NewsSection
