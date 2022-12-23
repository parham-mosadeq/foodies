import React from 'react';
import { Circles } from 'react-loader-spinner';
const Loader = () => {
  return (
    <Circles width={100} height={100} color='blue' ariaLabel='loader...' />
  );
};

export default Loader;
