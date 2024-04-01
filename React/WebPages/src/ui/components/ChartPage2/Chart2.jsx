import React, { useState } from 'react';
import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Container from '@mui/material/Container';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Girl } from '@mui/icons-material';
import Data from './Data';

const list = [
    {
        id: 1,
        list1: [
            'Dynamic reports and dashboards',
            'Templates for everyone',
            'Development workflow',
            'Limitless business automation',
            'Knowledge management',
        ]
    }
]

export default function Chart2() {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <Container>
                <Grid display='flex' my={5} container spacing={10}>
                    <Grid item display={{ xs: 'none', md: 'block' }} md={6}>
                        <Grid item xs={12}>
                            <Box display="flex" alignItems="start">
                                <Data />
                            </Box>
                        </Grid>
                        {/* <Grid item xs={12} md={4}>
                            </Grid> */}
                    </Grid>
                    <Grid item md={6}>
                        <Box>
                            <Typography variant='h5' fontWeight={1000} mb={2} sx={{ color: 'text.primary', letterSpacing: '2px' }}>
                                We invest in the world’s potential
                            </Typography>
                            <Typography variant='body1' lineHeight='2' fontWeight={'light'}>
                                Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
                            </Typography>
                            {list.map((lists, index) => (
                                <Box mt={6} mb={3} key={index}>
                                    {lists.list1.map((item, subIndex) => (
                                        <Box
                                            key={subIndex}
                                            sx={{
                                                py: 1,
                                                display: 'flex',
                                                gap: 1.5,
                                                alignItems: 'center',
                                            }}
                                        >
                                            <CheckCircleRoundedIcon
                                                sx={{
                                                    width: 20,
                                                    color: 'secondary.main',
                                                }}
                                            />
                                            <Typography
                                                component="span"
                                                variant="subtitle2"
                                            >
                                                {item}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            ))}
                            <Typography variant='body1' lineHeight='2' fontWeight={'light'}>
                                Deliver great service experiences fast - without the complexity of traditional ITSM solutions.                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </>
    );
}