import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import axios from 'axios';

function BlogCatalog() {

    const [blogs, setBlogs] = useState([]);
    
        useEffect(()=>{
            axios.get('/api/get-blogs').then(res => {
                setBlogs(res.data.get_blogs);
            })
        },[]);

    return (
        <>
        <div className="blog-bg px-4">
            {blogs && blogs.map((item)=>(
                <BlogCard Title={item.title} Thumbnail={item.image} Slug={item.slug} Description={item.description} PublishDate={item.created_at} />
            ))}
        </div>
        </>
    )
}

export default BlogCatalog
