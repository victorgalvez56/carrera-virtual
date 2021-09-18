import React, { useState, useEffect } from 'react'
import HomeBanner from '../components/HomeBanner'
import ListTips from '../components/ListTips'
import Backbutton from '../components/elements/Backbutton'

function Tips() {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
    }, [])

    return (
        <div>
            <Backbutton />
            <HomeBanner type='slim' />
            <ListTips />

        </div>
    )
}

export default Tips;
