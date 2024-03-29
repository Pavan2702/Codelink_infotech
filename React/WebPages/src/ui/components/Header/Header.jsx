import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FitbitIcon from '@mui/icons-material/Fitbit';
import { Link } from '@mui/material';

const pages = [
  { title: 'Company', url: '#' },
  { title: 'Marketplace', url: 'Marketplace' },
  { title: 'Features', url: 'Features' },
  { title: 'Team', url: 'Team' },
  { title: 'Contact', url: 'Contact' }
];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" color='default'>
      <Container>
        <Toolbar>
          <FitbitIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'purple' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              flexGrow: 0.5,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LANDWIND
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page, index) => (
              <Link
                color="inherit"
                noWrap
                key={page.title}
                variant="body2"
                href={page.url}
                sx={{
                  p: 1,
                  flexShrink: 0,
                  textDecoration: 'none',
                  '&:hover': { color: 'purple' },
                  cursor: 'pointer',
                  fontWeight: 500,
                  marginRight: index < pages.length - 1 ? 2 : 0
                }}
              >
                {page.title}
              </Link>
            ))}
          </Box>

          {/* Responsive */}

          <FitbitIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'purple' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LANDWIND
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button variant='text' sx={{ display: { xs: 'none', md: 'block' }, color: 'black', mr: 1 }}>Log in</Button>
            <Button variant="contained" color='secondary' sx={{ borderRadius: 2, marginLeft: 'auto' }}>Get Started</Button>
          </Box>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                PaperProps={{
                  style: {
                    width: '100%',
                  },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="black">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
