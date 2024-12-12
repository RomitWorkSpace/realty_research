import React from 'react'

function PageBanner({Banner, MobileBanner, PageName}) {
    const isMobileSlider = window.matchMedia('(max-width: 768px)').matches;
    if (isMobileSlider){
        return ( 
            <>
            <div className="relative">
                <img src={ MobileBanner } alt="banner" width="100%" />
                <div className="text-center text-white">
                    <h2 className="text-white bold tracking-in-expand-fwd text-3xl">{ PageName }</h2>
                </div>
            </div>
            </>
        );
    }else {
        return ( 
            <>
            <div className="relative">
                <img src={ Banner } alt="banner" width="100%" />
                <div className="text-center text-white">
                    <h2 className="text-white bold tracking-in-expand-fwd">{ PageName }</h2>
                </div>
            </div>
            </>
        );
    }
}

export default PageBanner
