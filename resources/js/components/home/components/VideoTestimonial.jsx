import React from 'react'
import VideoThumbnail from './VideoThumbnail'
import Video1 from 'imgPath/video1.jpg'
import Video2 from 'imgPath/video2.jpg'

function VideoTestimonial() {
    return (
        <>
        <div className="secondary-bg py-10">
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 mt-12 md:grid-cols-2 gap-8">
                    <div className="media">
                        <VideoThumbnail ChannelVideo = {Video1} link = "https://www.youtube.com/embed/DnCRmOSlsYw?si=SpQQtYVYuCyyl0Nh" />
                    </div>
                    <div className="media">
                        <VideoThumbnail ChannelVideo = {Video2} link = "https://www.youtube.com/embed/L6OsuHQyJL8?si=kk3DYRAgIaEl8_SS" />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default VideoTestimonial
