import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'

function TeamCard({Photo, ProfileName, Designation, Content}) {
    return (
        <>
        <div className="team-card p-1 shadow-lg primary-bg rounded-lg">
            <div className="">
                <img src={Photo} alt={ProfileName} width="100%" className='rounded-lg' />
                <div className="p-4 text-center relative">
                    <h2 className="secondary-color text-xl font-semibold">{ProfileName}</h2>
                    <p className="text-sm secondary-color">{Designation}</p>
                    

                    <div className="text-white pt-3">
                        <p className="text-justify">
                            {Content}
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default TeamCard
