import * as React from 'react';
import Header from '../components/Header/Header';
import Foooter from '../components/Footer/Foooter';
import Page1 from '../components/CustomPages/Page1';
import Chart1 from '../components/Charts/Chart1';
import Container from '@mui/material/Container';
import Pricing from '../components/CustomPages/Pricing';
import FAQ from '../components/CustomPages/FAQ';


export default function Homeoage() {
    return (
        <>
            <Container maxWidth='lg' sx={{ m: 'auto' }}>
                <Header />
                <Page1 />
                {/* <Chart1 /> */}
                <Pricing />
                <FAQ />
                <Foooter />
            </Container>
        </>
    )
}