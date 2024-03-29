import { Box, Grid, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Container from '@mui/material/Container';
import React from 'react';

export default function Chart1() {
    return (
        <>
            <Container>
                <Grid display=
                'flex' container spacing={2}> {/* Added container and spacing props */}
                    <Grid item md={4}> {/* Added item prop */}
                        <Box>
                            <Typography variant='h5' fontWeight={1000} mb={3} sx={{ color: 'text.primary', letterSpacing: '2px' }}>
                                Work with tools you already use
                            </Typography>
                            <Stack spacing={1}> {/* Added spacing prop */}
                                <Typography component="div" variant="body2"> {/* Changed component prop to div */}
                                    <CheckCircleIcon sx={{ width: 20 }} />
                                    suysg7
                                </Typography>
                            </Stack>
                        </Box>
                    </Grid>
                    <Grid item md={8}> {/* Added item prop */}
                        <Box>
                            <Typography>
                                Sudih
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </>
    );
}
