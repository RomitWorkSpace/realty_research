import React from 'react'

function TopCategory() {
    return (
        <>
        <div className="top-rated-product p-5 pt-8 shadow-lg">
                <h3 className="text-gray-800 font-semibold text-xl border-l-4 pl-3">Top Categories</h3>
                <div className="pt-3">
                    <div className="flex text-gray-800 my-3">
                        <div className="w-4/5">Apartments</div>
                        <div className="w-1/5 text-center">(26)</div>
                    </div>
                    <div className="flex text-gray-800 my-3">
                        <div className="w-4/5">Picture Studio</div>
                        <div className="w-1/5 text-center">(16)</div>
                    </div>
                    <div className="flex text-gray-800 my-3">
                        <div className="w-4/5">Office</div>
                        <div className="w-1/5 text-center">(56)</div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default TopCategory
