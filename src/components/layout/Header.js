import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = styled.header`
  width: 50vw;
  height: 100vh;
  background-color: lightblue;
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

    width: 100vw;
    height: fit-content;
    position: relative;
    nav {
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

const MenuBtn = styled.button`
  border: none;
  background-color: red;
  z-index: 10;
  position: absolute;
  right: 0;
  top: 10px;
  cursor: pointer;

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
      <MenuBtn onClick={handelMenu}>{mobileOpen ? 'X' : 'O'}</MenuBtn>
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
