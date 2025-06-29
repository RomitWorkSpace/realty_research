import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";


const VideoThumbnail = ({ChannelVideo, link}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-4xl mx-auto">
      <div
        className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
        onClick={openModal}
        role="button"
        aria-label="Play YouTube video"
        tabIndex="0"
        onKeyPress={(e) => e.key === "Enter" && openModal()}
      >
        <img
          src={ChannelVideo}
          alt="Custom Video Thumbnail"
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <FaPlay className="text-white text-6xl" />
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-2 w-full max-w-4xl max-h-[90vh] overflow-auto">
            <div className="flex justify-end mb-2">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                aria-label="Close video"
              >
                <IoMdClose className="text-2xl" />
              </button>
            </div>
            <div className="relative pb-[56.25%] h-0 overflow-hidden">
              <iframe
                src={link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoThumbnail;
