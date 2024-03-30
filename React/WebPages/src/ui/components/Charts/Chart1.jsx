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
                <Grid display='flex' container spacing={10}>
                    <Grid item md={6}>
                        <Box>
                            <Typography variant='h5' fontWeight={1000} mb={2} sx={{ color: 'text.primary', letterSpacing: '2px' }}>
                                Work with tools you already use
                            </Typography>
                            <Typography variant='body1' lineHeight='2' fontWeight={'light'}>
                                Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.
                            </Typography>
                            {list.map((lists, index) => (
                                <Box mt={6} mb={3}>
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
                    <Grid item md={6}>
                        <Grid display='flex'>
                            <Grid item md={8}>
                                <Box mx="auto" p={2} display='flex' borderRadius={8} bgcolor="background.paper">
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
                            <Grid item md={4}>
                                <Card>
                                    <Data />
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        </>
    );
}
