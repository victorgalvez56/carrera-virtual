import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    fab: {
        backgroundColor: 'white',
        position: 'absolute',
        top: theme.spacing(2),
        left: theme.spacing(2),
        width: 25,
        height: 25,
        minHeight: 13,
        color: 'var(--main-primary)'
    },
    icon: {
        width: 30,
        height: 30,
    }
}));

export default function FloatingActionButtonZoom() {
    const history = useHistory();

    const classes = useStyles();
    return (
        <Fab aria-label="Add" className={classes.fab} onClick={() => history.goBack()} >
            <ChevronLeftIcon className={classes.icon} />
        </Fab>
    );
}