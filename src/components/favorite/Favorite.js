import { Container, Grid } from '@mui/material';
import React from 'react';
import CardEl from '../shared/CardEl';

const Favorite = () => {
  const data = localStorage.getItem('fave');
  const fave = JSON.parse(data);

  return (
    <Container maxWidth='lg'>
      <h1>favourite</h1>

      <Grid container mb={5}>
        {fave ? (
          fave.map((item) => {
            const { idMeal } = item;
            return (
              <Grid mt={2} mb={2} key={idMeal} item xs={12} md={6} lg={4}>
                <CardEl {...item} />
              </Grid>
            );
          })
        ) : (
          <h1>hi</h1>
        )}
      </Grid>
    </Container>
  );
};

export default Favorite;
