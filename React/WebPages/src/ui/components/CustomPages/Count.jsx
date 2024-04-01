import React from 'react';
import { Box, Container, Typography, Stack, Avatar, Grid } from '@mui/material';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import ToggleOnRoundedIcon from '@mui/icons-material/ToggleOnRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import GroupRoundedIcon from '@mui/icons-material/GroupRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';

export default function Count() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 4, sm: 8, md: 10 },
        bgcolor: 'background.paper',
      }}
    >
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6}>
          <Stack>
            <Typography variant="h6" component='abbr' fontWeight="bold" color="secondary">
              Trusted Worldwide
            </Typography>
            <Typography variant="h5" fontWeight={700} my={3} color="text.primary">
              Trusted by over 600 million users and 10,000 teams
            </Typography>
            <Typography variant="body1" mb={3} color="text.secondary">
              Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.
            </Typography>
            <Stack direction={{ xs: 'row' }} spacing={1}>
              <Typography variant="body1" color='secondary'>Explore Legality Guide</Typography>
              <ArrowForwardSharpIcon />
            </Stack>
            <Stack direction={{ xs: 'row' }} my={2} spacing={1}>
              <Typography variant="body1" color='secondary'>Visit the Trust Center</Typography>
              <ArrowForwardSharpIcon />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="start">
                <Stack direction="column" spacing={0} sx={{ padding: '0px', margin: '0px' }} color="secondary.main">
                  <ToggleOnRoundedIcon fontSize="large" sx={{ margin: '-8px 0px' }} />
                  <ToggleOnRoundedIcon fontSize="large" sx={{ margin: '-8px 0px' }} />
                </Stack>
                <Typography variant="h5" my={2} fontWeight="bold" color="text.primary">99.99% uptime</Typography>
                <Typography variant="body1" color="text.secondary">for Flowbite, with zero maintenance downtime</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="start">
                <GroupRoundedIcon fontSize='large' color='secondary' />
                <Typography variant="h5" my={2} fontWeight="bold" color="text.primary">600M+ Users</Typography>
                <Typography variant="body1" color="text.secondary">trusted by over 600 milion users around the world</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="start">
                <ShoppingCartRoundedIcon fontSize='large' color='secondary' />
                <Typography variant="h5" my={2} fontWeight="bold" color="text.primary">Millions</Typography>
                <Typography variant="body1" color="text.secondary">of transactions per day</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" flexDirection="column" alignItems="start">
                <PublicRoundedIcon fontSize='large' color='secondary' />
                <Typography variant="h5" fontWeight="bold" my={2} color="text.primary">100+ countries</Typography>
                <Typography variant="body1" color="text.secondary">have used Flowbite to create functional websites</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
