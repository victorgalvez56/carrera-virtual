import React, { useEffect } from 'react'
import styled from 'styled-components'
import ButtonElement from './elements/ButtonElement'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
const images = [
    {
        url: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
        title: 'TIPS PARA LA CARRERA',
        width: '33.33%',
        redirect: '/tips'
    },
    {
        url: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
        title: 'RECORRIDO',
        width: '33.33%',
    },
    {
        url: 'https://www.w3schools.com/howto/img_nature_wide.jpg',
        title: 'TÓMATE UNA SELFIE',
        width: '33.33%',
    },
];

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    image: {
        backgroundColor: "var(--main-primary)",
        borderBottom: "0.5vh solid var(--main-primary)",
        position: 'relative',
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: "10vh",
        },
        '&:hover, &$focusVisible': {
            zIndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {

            },
        },
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
}));


function Menu() {
    useEffect(() => {
    }, [])

    const classes = useStyles();

    return (
        <>
            <hr class="linear" />
            <div className={classes.root}>
                {images.map((image) => (
                    <ButtonBase
                        href={image.redirect}
                        focusRipple
                        key={image.title}
                        className={classes.image}
                        focusVisibleClassName={classes.focusVisible}
                        style={{
                            width: image.width,
                        }}
                    >
                        <span
                            className={classes.imageSrc}
                            style={{
                                backgroundImage: `url(${image.url})`,
                            }}
                        />
                        <span className={classes.imageBackdrop} />
                        <span className={classes.imageButton}>
                            <Typography
                                component="span"
                                variant="subtitle1"
                                color="inherit"
                                class="bold"
                                className={classes.imageTitle}
                            >
                                {image.title}
                            </Typography>
                        </span>
                    </ButtonBase>
                ))}
            </div>
            {/* <ul class="menu bold">
                <div class="container">
                    <p class="margin-x">TIPS PARA LA CARRERA</p>
                </div>
                <div class="container">
                    <p class="margin-x">RECORRIDO</p>
                </div>
                <div class="container">
                    <p class="margin-x">TÓMATE UNA SELFIE</p>
                </div>
            </ul> */}
        </>
    )
}
export default Menu;
