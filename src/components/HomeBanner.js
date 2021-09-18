import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BackdropElement from '../components/elements/BackdropElement'
import ImageListItem from '@material-ui/core/ImageListItem';

function HomeBanner({ type }) {
    // useEffect(() => {
    //     setLoading(false);
    // }, [])

    // const [loading, setLoading] = useState(true);
    // {loading &&
    //     <BackdropElement />
    // }

    if (type === 'slim') {
        return (
            <>

                <HomeBannerContainerSlim>
                    <img class="banner_background_back" src="https://www.uniradioserver.com/media/news_thumbs/202009/20200917135631_135.jpg" alt="banner" />
                    <hr class="bottom-linear" />
                </HomeBannerContainerSlim>
            </>
        )
    } else {
        return (
            <>
                <HomeBannerContainer>
                <img class="banner_background_back" src="https://www.uniradioserver.com/media/news_thumbs/202009/20200917135631_135.jpg" alt="banner" />
                    <hr class="bottom-linear" />
                </HomeBannerContainer>
            </>
        )
    }


}
export default HomeBanner;
const HomeBannerContainer = styled.div`
.banner_background_back{
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    width: 100%;
    height: 40vh;
}
`;
const HomeBannerContainerSlim = styled.div`
    .banner_background_back{
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        width: 100%;
        height: 30vh;
    }
`;