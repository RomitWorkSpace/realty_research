import React from 'react'

import Divyansh from 'imgPath/divyansh.png'
import Ska from 'imgPath/ska.png'
import Vilaasa from 'imgPath/vilaasa.png'
import Residency from 'imgPath/residency.png'
import Banner from 'imgPath/Banner.png'


function UpcommingProject() {
    return (
        <>
        <div className="container-fluid pt-10 pb-10 mb-10 secondary-bg">
            <div className="max-w-3xl px-5 mx-auto">
                <h2 className="section-heading primary-color text-center text-3xl font-semibold">New Projects</h2>
                <div className="flex flex-wrap mt-8">
                    <div className="md:w-1/2 w-full mb-5">
                        <div className="flex">
                            <div className="w-1/2">
                                <img src={ Divyansh } alt="divyansh" width="80%" className='mx-auto' />
                            </div>
                            <div className="w-1/2">
                                <img src={ Ska } alt="Ska" width="80%" className='mx-auto' />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 w-full">
                        <div className="flex">
                            <div className="w-1/2">
                                <img src={ Vilaasa } alt="Vilaasa" width="80%" className='mx-auto' />
                            </div>
                            <div className="w-1/2">
                                <img src={ Residency } alt="Residency" width="80%" className='mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container-fluid">
            <img src={ Banner } alt="Banner" width="100%" />
        </div>
        </>
    )
}

export default UpcommingProject
