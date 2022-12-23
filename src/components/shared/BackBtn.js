import React from 'react';
import { ArrowBack } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const BackBtn = () => {
  const nav = useNavigate();

  return (
    <div>
      <Button
        variant='contained'
        onClick={() => nav(-1)}
        sx={{ color: '#fff', marginTop: '50px' }}
      >
        <ArrowBack />
      </Button>
    </div>
  );
};

export default BackBtn;
