import { Box } from '@mui/material';
import React from 'react';
import { Circles } from 'react-loader-spinner';
const Loader = () => {
  return (
    <Box
      sx={{
        height: '1000px',
        display: 'block',
        margin: '40px auto',
      }}
    >
      <Circles width={100} height={100} color='blue' ariaLabel='loader...' />
    </Box>
  );
};

export default Loader;
