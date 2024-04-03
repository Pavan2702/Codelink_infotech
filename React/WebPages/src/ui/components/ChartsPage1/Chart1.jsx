import React, { useState } from 'react';
import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Container from '@mui/material/Container';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Girl } from '@mui/icons-material';
import Data from './Data';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import ToggleOnRoundedIcon from '@mui/icons-material/ToggleOnRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';

const list = [
    {
        id: 1,
        list1: [
            'Continuous integration and deployment',
            'Development workflow',
            'Knowledge management',
        ]
    }
]

export default function Chart1() {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <Container>
                <Grid display='flex' my={5} container spacing={10}>
                    <Grid item md={6}>
                        <Box>
                            <Typography variant='h5' fontWeight={1000} mb={2} sx={{ color: 'text.primary', letterSpacing: '2px' }}>
                                Work with tools you already use
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
                                Deliver great service experiences fast - without the complexity of traditional ITSM solutions.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item display={{ xs: 'none', md: 'block' }} md={6}>
                        <Grid item xs={12}>
                            <Box display="flex" gap={3} alignItems="start">
                                <Card>
                                    <Calendar
                                        onChange={setDate}
                                        value={date}
                                        selectRange={false}
                                        activeStartDate={new Date()}
                                    />
                                </Card>
                                <Card>
                                    <Calendar
                                        onChange={setDate}
                                        value={date}
                                        selectRange={false}
                                        activeStartDate={new Date()}
                                    />
                                </Card>
                            </Box>
                        </Grid>
                        {/* <Grid item xs={12} md={4}>
                                <Box container display="flex" alignItems="start">
                                    <Data />
                                </Box>
                            </Grid> */}
                    </Grid>
                </Grid>
            </Container >
        </>
    );
}