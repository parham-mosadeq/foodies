import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { LocalPizza } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const pages = ['Favourite', 'Random'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  //* Global Link styles
  const linkStyles = {
    textDecoration: 'none',
    color: '#a7a7a7',
  };

  return (
    <AppBar position='static'>
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <Typography
            variant='h6'
            noWrap
            component='p'
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to='/'>Foodies</Link>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
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
              {pages.map((page, idx) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign='center' component='p' variant='p'>
                    {page === pages[idx] && (
                      <>
                        <Link style={linkStyles} to={`/${page}`}>
                          {page}
                        </Link>
                      </>
                    )}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <LocalPizza sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant='h5'
            noWrap
            component='p'
            href=''
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link to='/' style={linkStyles}>
              Foodies
            </Link>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import styled from 'styled-components';

// const MainHeader = styled.header`
//   width: 50vw;
//   height: 100vh;
//   background-color: lightblue;
//   margin: 0;
//   padding: 0;
//   position: absolute;
//   right: 0;
//   top: 0;
//   transition: transform 0.3s ease-in-out, opacity 0.2s linear;
//   ${(props) =>
//     props.mobileOpen
//       ? ' transform: translateX(0) '
//       : ' transform: translateX(-1000%);'}
//   transform: translateX(-1000%);
//   nav {
//     display: flex;
//     flex-direction: column;

//     ul:first-child {
//       font-size: 20px;
//       font-weight: bold;
//       letter-spacing: 1.1px;
//       border-bottom: 1px solid silver;
//     }

//     ul {
//       padding: 0.4rem 1rem;

//       li {
//         list-style: none;
//         a {
//           text-decoration: none;
//           color: #fff;
//           width: inherit;
//           cursor: pointer;
//         }
//       }
//     }
//   }

//   @media (min-width: 700px) {
//     transform: translateX(0);

//     width: 100vw;
//     height: fit-content;
//     position: relative;
//     nav {
//       display: flex;
//       flex-direction: row;
//       justify-content: space-between;
//       align-items: center;

//       ul:first-child {
//         font-size: 20px;
//         font-weight: bold;
//         letter-spacing: 1.1px;
//         margin-right: 1.5rem;
//         border-bottom: none;
//       }
//       ul {
//         li {
//           text-transform: capitalize;
//           margin-right: 2rem;
//         }
//       }
//     }
//   }
// `;

// const MenuBtn = styled.button`
//   border: none;
//   background-color: red;
//   z-index: 10;
//   position: absolute;
//   right: 0;
//   top: 10px;
//   cursor: pointer;

//   @media (min-width: 700px) {
//     display: none;
//   }
// `;

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handelMenu = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   return (
//     <>
//       <MenuBtn onClick={handelMenu}>{mobileOpen ? 'X' : 'O'}</MenuBtn>
//       <MainHeader mobileOpen={mobileOpen}>
//         <nav>
//           <ul>
//             <li>
//               <Link to='/'>Foodies</Link>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <Link to='/random'>Random</Link>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <Link to='/categories'>categories</Link>
//             </li>
//           </ul>
//           <ul>
//             <li>
//               <Link to='/favourite'>favourite</Link>
//             </li>
//           </ul>
//         </nav>
//       </MainHeader>
//     </>
//   );
// };

// export default Header;
