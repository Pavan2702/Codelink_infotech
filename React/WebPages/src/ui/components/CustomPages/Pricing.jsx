import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Chip from '@mui/material/Chip';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';

const fixedDesc = ['Individual configuration', 'No setup, or hidden fees'];

const tiers = [
    {
        title: 'Starter',
        para: 'Best option for personal use & for your next project.',
        price: '29',
        description: [
            { size: 'Team size', dev: '1 Developer' },
            { size: 'Premium support', dev: '6 months' },
            { size: 'Free updates', dev: '6 months' },
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'contained',
    },
    {
        title: 'Company',
        para: 'Relevant for multiple users, extended & premium support.',
        subheader: 'Recommended',
        price: '99',
        description: [
            { size: 'Team size', dev: '10 Developer' },
            { size: 'Premium support', dev: '24 months' },
            { size: 'Free updates', dev: '24 months' },
        ],
        buttonText: 'Start now',
        buttonVariant: 'contained',
    },
    {
        title: 'Enterprise',
        para: 'Best for large scale uses and extended redistribution rights.',
        price: '499',
        description: [
            { size: 'Team size', dev: '100+ Developer' },
            { size: 'Premium support', dev: '36 months' },
            { size: 'Free updates', dev: '36 months' },
        ],
        buttonText: 'Contact us',
        buttonVariant: 'contained',
    },
];

export default function Pricing() {
    return (
        <Container
            id="pricing"
            sx={{
                pt: { xs: 4, sm: 12 },
                pb: { xs: 8, sm: 0 },
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: { xs: 3, sm: 6 },
            }}
        >
            <Box
                sx={{
                    width: { sm: '100%', md: '60%' },
                    textAlign: { sm: 'center', md: 'center' }, // Align text to center
                }}
            >
                <Typography component="h2" variant="h4" color="text.primary" fontWeight='bold' mb={2}>
                    Designed for business teams like yours
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'center' }}>
                    Here at Landwind we focus on markets where technology, innovation, and capital can<br />
                    unlock long-term value and drive economic growth.
                </Typography>
            </Box>
            <Grid container spacing={3} alignItems="center" justifyContent="center">
                {tiers.map((tier) => (
                    <Grid
                        item
                        key={tier.title}
                        xs={12}
                        sm={tier.title === 'Enterprise' ? 12 : 6}
                        md={4}
                    >
                        <Card
                            sx={{
                                p: 2,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: 4,
                            }}
                        >
                            <CardContent>
                                <Typography component="h3" variant="h5" sx={{ textAlign: 'center', mb: 2 }}>
                                    {tier.title}
                                </Typography>
                                <Typography variant="body2" sx={{ textAlign: 'center', mb: 2 }}>
                                    {tier.para}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'baseline',
                                        textAlign: 'center',
                                    }}
                                >
                                    <Typography component="h3" variant="h3" mr={1} sx={{ mb: 2 }}>
                                        ${tier.price}
                                    </Typography>
                                    <Typography component="h3" variant="h6" sx={{ mb: 2 }}>
                                        &nbsp;/month
                                    </Typography>
                                </Box>
                                <Divider my={2} />
                                {
                                    fixedDesc.map((line, index) => (
                                        <Box
                                            key={index}
                                            sx={{
                                                py: 1,
                                                display: 'flex',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <CheckCircleRoundedIcon
                                                sx={{
                                                    width: 20,
                                                    mr: 1,
                                                    color: 'secondary.main',
                                                }}
                                            />
                                            <Typography
                                                variant="subtitle2"
                                                color="text.secondary"
                                            >
                                                {line}
                                            </Typography>
                                        </Box>
                                    ))
                                }
                                {tier.description.map((line, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            py: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <CheckCircleRoundedIcon
                                            sx={{
                                                width: 20,
                                                mr: 1,
                                                color: 'secondary.main',
                                            }}
                                        />
                                  <Typography
    variant="subtitle2"
    color={line.dev ? "text.secondary" : "text.primary"}
>
    {line.dev} : <Typography variant="subtitle2" color="text.primary">{line.size}</Typography>
</Typography>

                                    </Box>
                                ))}
                            </CardContent>
                            <CardActions>
                                <Button
                                    fullWidth
                                    variant={tier.buttonVariant}
                                    component="a"
                                    sx={{ bgcolor: 'secondary.main', color: 'secondary.contrastText' }}
                                >
                                    {tier.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
