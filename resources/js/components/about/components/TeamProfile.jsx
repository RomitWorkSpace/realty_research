import React from 'react'
import TeamCard from './TeamCard'

import RishuKumar from 'imgPath/rishu-kumar.jpeg'
import Pooja from 'imgPath/pooja.jpeg'
import OwnerImg from 'imgPath/manish-director.jpeg'

function TeamProfile() {
    return (
        <>
        <div className="text-center mb-4">
            <h3 className="text-3xl font-semibold primary-color mb-3">Team Members</h3>
            <div className="h-1 secondary-bg mx-auto w-[100px]"></div>
        </div>
        <div className="max-w-6xl mx-auto pb-24">
            <div className="flex flex-wrap justify-between">
                <div className="w-full md:w-[32%] p-4">
                    <TeamCard Photo = {RishuKumar} 
                    ProfileName = "Rishu Kumar" 
                    Designation="Director" 
                    Content = "Rishu Kumar having 13 years of experience in real estate industry since 2012. He worked in Delhi-NCR region. Having abundance of experience in providing solution to the buyers and investors in Residential, Commercial, Institutional and Industrial."
                    />
                </div>
                <div className="w-full md:w-[32%] p-4">
                    <TeamCard Photo = {Pooja} 
                    ProfileName = "Pooja Chourasia" 
                    Designation="Director" 
                    Content = "Pooja Chourasia is a director of the company having expertise in different fields. She has 7 years of working experience in Human Resource Development & Backend Solution for the different organisation."
                    />
                </div>
                <div className="w-full md:w-[32%] p-4">
                    <TeamCard Photo = {OwnerImg} 
                    ProfileName = "Manish Choudhary" 
                    Designation="Sales Head Department" 
                    Content = "Manish Choudhary having 8 years experience in the field of automobile and real estate industry. He has done lots of clients solution for automobile and real estate industry. He is taking care of team of around 10 people for Noida and Ghaziabad location."
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default TeamProfile
