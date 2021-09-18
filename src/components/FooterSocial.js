import React, { useEffect } from 'react'
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
function FooterSocial() {
    useEffect(() => {
    }, [])


    return (
        <>
            <div class="contenedor-footer">
                <div class="item-first">
                    <IconButton class="content-social" color="inherit" aria-label="facebook">
                        <FacebookIcon />
                    </IconButton>
                </div>
                <div class="item-second">
                    <IconButton size='medium' class="content-social" color="inherit" aria-label="facebook">
                        <InstagramIcon />
                    </IconButton>
                </div>
                <div class="item-last">
                    <IconButton class="content-social" color="inherit" aria-label="facebook">
                        <TwitterIcon />
                    </IconButton>
                </div>
                {/* <Grid container class="container-height">
                        <Grid item xs={4}>
                            <div class="time bold">10</div><div class="date bold">DÍAS</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div class="time bold">05</div><div class="date bold">HORAS</div>
                        </Grid>
                        <Grid item xs={4}>
                            <div class="time bold">20</div><div class="date bold">MINUTOS</div>
                        </Grid>
                    </Grid> */}
            </div>
        </>
    )
}
export default FooterSocial;

