import React, { useState, useEffect } from 'react'
import HomeBanner from '../components/HomeBanner'
import Record from '../components/Record'
import Menu from '../components/Menu'
import FooterSocial from '../components/FooterSocial'

//ELEMENTS

function Home() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, [])

    return (
        <div>
            <HomeBanner />
            <Record />
            <Menu />
            <FooterSocial/>
        </div>
    )
}

export default Home;
