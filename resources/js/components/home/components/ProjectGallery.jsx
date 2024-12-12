import React from 'react'
import PropertyFilterTabs from './PropertyFilterTabs'

function ProjectGallery() {
    return (
        <>
        <div className="container-fluid py-12">
            <div className="text-center mb-5">
                <div className="inline-block secondary-bg rounded-lg font-semibold px-4">Our Project</div>
                <h2 className="font-semibold primary-color text-3xl">Project Gallery</h2>
            </div>
            <PropertyFilterTabs />
        </div>
        </>
    )
}

export default ProjectGallery
