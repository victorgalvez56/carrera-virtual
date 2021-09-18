import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components'


function ListTips() {
    useEffect(() => {
    }, [])
    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            maxWidth: 752,
        },
        demo: {
            backgroundColor: theme.palette.background.paper,
            height: "69vh"
        },
        title: {
            textAlign: "center",
            color: 'var(--font-record)',
            fontWeight: 'bold',
            lineHeight: 1.2,
            paddingTop: 10,

        },
        titleList: {
            fontSize: 18
        },
        textList: {
            fontSize: 26,
        },
    }));
    const classes = useStyles();


    return (
        <>
            <ListTipsContainer>
                <Grid container class="no-padding-grid" spacing={2}>
                    <Grid item xs={12} md={6}>
                        <div className={classes.demo}>
                            <Typography variant="h6" className={classes.title}>
                                <div className={classes.titleList}>TIPS PARA</div>
                                <div className={classes.textList}>LA CARRERA</div>
                            </Typography>
                            <ul class="numbered-list">
                                <li> <span class="text-primary-list bold">LOREN IPSUM DOLOR SIT AMET</span> <br />
                                    <span class="text-secondary-list">LOREN IPSUM DOLOR SIT AMET</span>
                                </li>
                                <li> <span class="text-primary-list bold">LOREN IPSUM DOLOR SIT AMET</span> <br />
                                    <span class="text-secondary-list">LOREN IPSUM DOLOR SIT AMET</span>
                                </li>
                                <li> <span class="text-primary-list bold">LOREN IPSUM DOLOR SIT AMET</span> <br />
                                    <span class="text-secondary-list">LOREN IPSUM DOLOR SIT AMET</span>
                                </li>
                                <li> <span class="text-primary-list bold">LOREN IPSUM DOLOR SIT AMET</span> <br />
                                    <span class="text-secondary-list">LOREN IPSUM DOLOR SIT AMET</span>
                                </li>
                                <li> <span class="text-primary-list bold">LOREN IPSUM DOLOR SIT AMET</span> <br />
                                    <span class="text-secondary-list">LOREN IPSUM DOLOR SIT AMET</span>
                                </li>
                                <li> <span class="text-primary-list bold">LOREN IPSUM DOLOR SIT AMET</span> <br />
                                    <span class="text-secondary-list">LOREN IPSUM DOLOR SIT AMET</span>
                                </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </ListTipsContainer>
        </>
    )
}
export default ListTips;
const ListTipsContainer = styled.div`
.no-padding-grid{
    padding: 0px;

}
.grid{
    height:60vh
}
ul.numbered-list {
    counter-reset: li;
    list-style-type: none;
    font-size: 14px;
    line-height: 18px;
    padding-left: 50px;
    padding-right: 50px;

    li {
      position: relative;   
      padding: 10px 0 10px 40px;
      
      &:before {
        content: counter(li);
        counter-increment: li;
        height: 30px;
        width: 30px;
        border: 2px var(--font-record) solid;
        border-radius: 50%;
        color: var(--font-record);
        font-weight: 900;
        text-align: center;
        position: absolute;   
        font-size: 16px;   
        left: 0;
      }
    }
  }
  
`;

