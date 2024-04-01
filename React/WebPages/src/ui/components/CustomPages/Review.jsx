import { Avatar, Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import AutoAwesomeSharpIcon from '@mui/icons-material/AutoAwesomeSharp'
import avtr from '../../../../public/Avatar.png'

export default function Review() {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                my: { xs: 4, sm: 15 },
            }}
        >
            <Box
                sx={{
                    width: { xs: '100%', md: '60%' },
                    textAlign: "center" // Align text to center
                }}
            >
                <AutoAwesomeSharpIcon fontSize='large' />
                <Typography component="article" variant="h6" color="text.primary" fontWeight={700} mb={2}>
                    "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application."
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Stack mr={2}>
                        <Avatar alt="Cindy Baker" src={avtr} />
                    </Stack>
                    <Typography variant="body2" color='GrayText'>
                        <Typography variant="body2" component="span" color="black">
                            Micheal Gough
                        </Typography>{" "}
                        | CEO at Google
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}
