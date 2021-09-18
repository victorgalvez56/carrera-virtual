import React, { useEffect } from 'react'
import styled from 'styled-components'
import ButtonElement from './elements/ButtonElement'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

function Record() {
    useEffect(() => {
    }, [])


    return (
        <>
            <RecordsContainer className="recordsContainer">
                <Link href="/signup">
                    <ButtonElement  style={{ width: 200, height: 40, top: -38, position: "relative" }} type="button" text="REGISTRATE" theme='primary' block={false} />
                </Link>
                <Container maxWidth="md">
                    <Grid container style={{ top: -25, position: "relative" }} spacing={3}>
                        <Grid item xs={3}>
                            <div class="time bold">10</div><div class="date bold">DÍAS</div>
                        </Grid>
                        <Grid item xs={3}>
                            <div class="time bold">05</div><div class="date bold">HORAS</div>
                        </Grid>
                        <Grid item xs={3}>
                            <div class="time bold">20</div><div class="date bold">MINUTOS</div>
                        </Grid>
                        <Grid item xs={3}>
                            <div class="time bold">07</div><div class="date bold">SEGUNDOS</div>
                        </Grid>
                    </Grid>
                </Container>
            </RecordsContainer>
        </>
    )
}
export default Record;
const RecordsContainer = styled.div`
text-align:center;
background-color: var(--main-white);
height:15vh;

    .time{
    font-size: 25px;
    color: var(--font-record);
    }
    .date{
        font-size: 12px;
        color: var(--main-primary);
        }
`;
