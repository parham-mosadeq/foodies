import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  // * initializing state to get windows width
  const [width, setWidth] = useState(window.innerWidth);
  // * Inputs data
  // * set width on every call
  const checkSize = () => {
    setWidth(window.innerWidth);
  };
  // * using useEffect to call checkSize function
  useEffect(() => {
    // * making calls to checkSize function
    window.addEventListener('resize', checkSize);
  }, []);

  const menus = ['Random', 'Favorite'];

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  // ! Mobile menubar

  if (width < 900) {
    return (
      <>
        <Box
          sx={{
            width: '100%',
            overflowX: 'hidden',
          }}
        >
          <AppBar position='static'>
            <Toolbar>
              <IconButton
                size='large'
                aria-label='account of current user'
                aria-controls='menu-appbar'
                aria-haspopup='true'
                onClick={handleOpenNavMenu}
                color='inherit'
                sx={{
                  marginRight: 2,
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box component='div'>
                <Menu
                  id='menu-appbar'
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
                  sx={{
                    display: { xs: 'block', md: 'none' },
                  }}
                >
                  <Typography
                    variant='h6'
                    component='div'
                    sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                  >
                    Foodies
                  </Typography>
                  {menus.map((item) => {
                    return (
                      <MenuItem key={item} onClick={handleCloseNavMenu}>
                        <Typography textAlign='center'>
                          <Link
                            style={{
                              textDecoration: 'none',
                              marginLeft: '10px',
                              color: 'blue',
                            }}
                            to={`/${item.toLowerCase()}`}
                          >
                            {item}
                          </Link>
                        </Typography>
                      </MenuItem>
                    );
                  })}
                </Menu>

                <Box component='div'>
                  <Typography
                    component='h2'
                    variant='h5'
                    fontWeight={600}
                    textAlign='center'
                  >
                    Foodies
                  </Typography>
                </Box>
              </Box>
            </Toolbar>
          </AppBar>
        </Box>
      </>
    );
  }

  // ! Desktop menubar

  if (width > 601) {
    return (
      <Box
        component='div'
        sx={{
          width: '100vw',
          overflowX: 'hidden',
        }}
      >
        <AppBar position='static'>
          <Toolbar>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='open drawer'
              sx={{ mr: 2 }}
            >
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                <Link
                  style={{
                    textDecoration: 'none',
                    marginLeft: '10px',
                    color: '#fff',
                  }}
                  to='/'
                >
                  Foodies
                </Link>
              </Typography>
            </IconButton>

            <Box flexGrow={1}>
              <Typography variant='p' component='p'>
                {menus.map((item) => {
                  return (
                    <React.Fragment key={item}>
                      <Link
                        to={`/${item.toLowerCase()}`}
                        style={{
                          textDecoration: 'none',
                          marginLeft: '10px',
                          color: '#fff',
                        }}
                      >
                        {item}
                      </Link>
                    </React.Fragment>
                  );
                })}
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
};

export default Header;
