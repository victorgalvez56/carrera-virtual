import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        color: '#fff',
        position: 'fixed'
    },
}));

function BackdropElement(){
    const classes = useStyles();
    return(
        <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}

export default BackdropElement;
