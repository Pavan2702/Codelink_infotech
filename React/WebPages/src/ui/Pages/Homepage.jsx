import * as React from 'react';
import Header from '../components/Header/Header';
import Foooter from '../components/Footer/Foooter';
import Page1 from '../components/CustomPages/Page1';
import Chart1 from '../components/ChartsPage1/Chart1';
import Container from '@mui/material/Container';
import Pricing from '../components/CustomPages/Pricing';
import FAQ from '../components/CustomPages/FAQ';
import Review from '../components/CustomPages/Review';
import Count from '../components/CustomPages/Count';
import Chart2 from '../components/ChartPage2/Chart2';


export default function Homeoage() {
    return (
        <>
            <Container maxWidth='lg' sx={{ m: 'auto' }}>
                <Header />
                <Page1 />
                <Chart1 />
                <Chart2/>
                <Count/>
                <Review/>
                <Pricing />
                <FAQ />
                <Foooter />
            </Container>
        </>
    )
}