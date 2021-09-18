import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components'

//ELEMENTS
import InputElement from './elements/InputElement'
import ButtonElement from './elements/ButtonElement'

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
            lineHeight: 1.2,
            paddingTop: 10,

        },
        titleList: {
            fontSize: 14,
        },
        textList: {
            fontSize: 18,
            fontWeight: 'bold',
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
                                <div className={classes.textList}>REGISTRATE</div>
                                <div className={classes.titleList}>AQUÍ</div>
                            </Typography>
                            <ul class="numbered-list">
                                <form >

                                    <InputElement type="text" placeholder='NOMBRE' name='name' required={true} />
                                    <InputElement type="text" placeholder='APELLIDO' name='lastName' required={true} />
                                    <InputElement type="text" placeholder='TELÉFONO' name='lastName' required={true} />
                                    <InputElement type="text" placeholder='DIRECCIÓN' name='lastName' required={true} />
                                    <InputElement type="email" placeholder='CORREO' name='email' required={true} />
                                    <InputElement type="text" placeholder='DISTANCIA' name='lastName' required={true} />
                                    <InputElement type="text" placeholder='TALLA POLERA' name='lastName' required={true} />
                                    <ButtonElement type="submit" text='ENVIAR' disabled={false} theme='secondary' block={true} />

                                    {/* <InputElement type="password" label='passowrd' name='password' required={true} /> */}
                                </form>
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

