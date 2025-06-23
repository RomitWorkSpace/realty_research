import React from 'react'
import { Helmet } from 'react-helmet'

function OnPage({MetaTitle, Keywords, MetaDesc}) {
    return (
        <>
        <Helmet>
            <title>{ MetaTitle }</title>
            <meta name="keywords" content={ Keywords } />
            <meta name="description" content={ MetaDesc } />
        </Helmet>
        </>
    )
}

export default OnPage
