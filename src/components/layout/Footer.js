import React from 'react';
import { Typography } from '@mui/material';
import styled from 'styled-components';

const MainFooter = styled.footer`
  width: 100vw;
  display: grid;
  place-items: center;
  background-color: #a8a8c8;
  height: 100px;
`;

const Footer = () => {
  return (
    <MainFooter>
      <Typography
        component='p'
        variant='p'
        fontWeight={400}
        color='text.secondary'
      >
        Food recipe finder | created by{' '}
        <Typography
          component='span'
          variant='p'
          color='primary'
          fontWeight='bold'
        >
          Parham Mosadeqzadeh
        </Typography>
      </Typography>
    </MainFooter>
  );
};

export default Footer;
