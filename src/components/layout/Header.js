import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CloseSharp, MenuOpen } from '@mui/icons-material';
import { Box, Container, Typography } from '@mui/material';

const MainHeader = styled.header`
  width: 50vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: #4d89ff;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: transform 0.3s ease-in-out, opacity 0.2s linear;
  ${(props) =>
    props.mobileOpen
      ? ' transform: translateX(0) '
      : ' transform: translateX(-1000%);'}
  transform: translateX(-1000%);
  nav {
    display: flex;
    flex-direction: column;

    ul:first-child {
      font-size: 20px;
      font-weight: bold;
      letter-spacing: 1.1px;
      border-bottom: 1px solid silver;
    }

    ul {
      padding: 0.4rem 1rem;
      text-transform: capitalize;
      li {
        list-style: none;
        a {
          text-decoration: none;
          color: #fff;
          width: inherit;
          cursor: pointer;
        }
      }
    }
  }

  @media (min-width: 700px) {
    transform: translateX(0);
    width: 100%;
    height: fit-content;
    position: relative;
    nav {
      width: 60vw;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      ul:first-child {
        font-size: 20px;
        font-weight: bold;
        letter-spacing: 1.1px;
        margin-right: 1.5rem;
        border-bottom: none;
        display: block;
        flex-grow: 1;
      }
      ul {
        li {
          text-transform: capitalize;
          margin-right: 2rem;
        }
      }
    }
  }
`;

const MobileMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: max-content;
  margin: 0 auto;
  padding: 25px;
  border: none;
  background-color: blue;
  color: #fff;
  font-size: 20px;
  position: relative;

  button {
    display: block;
    margin: 0;
    margin-right: 2rem;
    padding: 0;
    border: none;
    z-index: 1000;
    background-color: transparent;
    position: absolute;
    right: 0;
    top: 50%;
    color: #fff;
    transform: translate(50%, -50%);
  }

  @media (min-width: 700px) {
    display: none;
  }
`;

const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handelMenu = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <MobileMenu onClick={handelMenu}>
        <Box component='div'>
          <Typography>
            <Link style={{ textDecoration: 'none', color: '#fff' }}>
              Foodies
            </Link>
          </Typography>
        </Box>
        <button>{mobileOpen ? <CloseSharp /> : <MenuOpen />}</button>
      </MobileMenu>
      <MainHeader mobileOpen={mobileOpen}>
        <nav>
          <ul>
            <li>
              <Link to='/'>Foodies</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/random'>Random</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/categories'>categories</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to='/favourite'>favourite</Link>
            </li>
          </ul>
        </nav>
      </MainHeader>
    </>
  );
};

export default Header;
