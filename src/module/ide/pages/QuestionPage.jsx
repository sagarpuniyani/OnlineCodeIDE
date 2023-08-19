import React from 'react';
import Container from '@mui/material/Container';
import { Header } from '../../../shared/components/Header';
import Grid from '@mui/material/Grid';
import Ide from '../components/Ide';

const QuestionPage = () => {
    return(<>
    <Container maxWidth="xl">
        <Header/>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                Question Problem statement
            </Grid>
            <Grid item xs={6}>
                <Ide/>
            </Grid>
        </Grid>
    </Container>
    </>
    )
};

export default QuestionPage;
