import * as React from 'react';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListSubheader from '@mui/joy/ListSubheader';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from '@mui/material';
import Container from '@mui/material/Container';
import FitbitIcon from '@mui/icons-material/Fitbit';
import { Instagram, SportsBasketball, TenMp, Twitter } from '@mui/icons-material';

export default function Foooter() {
    const iconStyle = {
        backgroundColor: 'transparent',
        color: 'rgb(107 114 128)',
        '&:hover': {
            color: 'black',
        },
    };

    const pages = [
        {
            title: 'COMPANY',
            id: '1',
            links: [
                { title: 'About', url: '#' },
                { title: 'Careers', url: '#' },
                { title: 'Brand center', url: '#' },
                { title: 'Blog', url: '#' }
            ]
        },
        {
            title: 'HELP CENTER',
            id: '2',
            links: [
                { title: 'Discord Server', url: '#' },
                { title: 'Twitter', url: '#' },
                { title: 'Facebook', url: '#' },
                { title: 'Contact Us', url: '#' }
            ]
        },
        {
            title: 'LEGAL',
            id: '3',
            links: [
                { title: 'Privacy Policy', url: '#' },
                { title: 'Licensing', url: '#' },
                { title: 'Terms', url: '#' }
            ]
        },
        {
            title: 'COMPANY',
            id: '4',
            links: [
                { title: 'About', url: '#' },
                { title: 'Careers', url: '#' },
                { title: 'Brand center', url: '#' },
                { title: 'Blog', url: '#' }
            ]
        },
        {
            title: 'DOWNLOAD',
            id: '5',
            links: [
                { title: 'iOS', url: '#' },
                { title: 'Android', url: '#' },
                { title: 'Windows', url: '#' },
                { title: 'MacOS', url: '#' }
            ]
        }
    ];

    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { md: 'flex-start' },
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: 2,
                }}
            >
                <List
                    size="md"
                    orientation="horizontal"
                    wrap
                    sx={{ flexGrow: 1, '--ListItem-radius': '8px' }}
                >
                    {pages.map((page) => (
                        <ListItem
                            key={page.id}
                            nested
                            sx={{
                                width: { xs: "50%", sm: '33%', md: "20%" }
                            }}
                        >
                            <ListSubheader sx={{ fontWeight: 'xl', color: 'black', mb: 3 }}>{page.title}</ListSubheader>
                            <List>
                                {page.links.map((link) => (
                                    <ListItem key={link.title}>
                                        <Link
                                            href={link.url}
                                            underline='hover'
                                            color='inherit'
                                            sx={{ fontWeight: 'md', mb: 2 }}
                                        >
                                            {link.title}
                                        </Link>
                                    </ListItem>
                                ))}
                            </List>
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                py={5}
            >
                <Box display="flex" alignItems="center" mb={2}>
                    <FitbitIcon color='secondary' />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#"
                        ml={1}
                        sx={{
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'black',
                            textDecoration: 'none',
                        }}
                    >
                        LANDWIND
                    </Typography>
                </Box>
                <Box mb={2}>
                    <Typography variant="body1" color="inherit" fontSize='sm'>
                        &#169;&nbsp; 2021-2022 Landwind<sup>&#8482;</sup>. All Rights Reserved. Built with
                        <Link href="https://flexbit.com" underline="hover" color="secondary" sx={{ mx: 1 }}>
                            Flexbit
                        </Link>
                        and
                        <Link href="https://tailwindcss.com" underline="hover" color="secondary" sx={{ mx: 1 }}>
                            Tailwind CSS
                        </Link>.
                    </Typography>
                </Box>
                <Box display="flex" justifyContent="center" gap={1}>
                    <IconButton variant="plain" sx={{ ...iconStyle }}>
                        <FacebookRoundedIcon fontSize='small' />
                    </IconButton>
                    <IconButton variant="plain" sx={{ ...iconStyle }}>
                        <Instagram fontSize='small' />
                    </IconButton>
                    <IconButton variant="plain" sx={{ ...iconStyle }}>
                        <Twitter fontSize='small' />
                    </IconButton>
                    <IconButton variant="plain" sx={{ ...iconStyle }}>
                        <GitHubIcon fontSize='small' />
                    </IconButton>
                    <IconButton variant="plain" sx={{ ...iconStyle }}>
                        <SportsBasketball fontSize='small' />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    );
}