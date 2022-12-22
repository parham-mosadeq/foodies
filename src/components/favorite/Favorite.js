import { Container, Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import CardEl from '../shared/CardlEl';

const Favorite = () => {
  const faves = useSelector((state) =>
    console.log(state.randomState.faveItems)
  );

  const data = localStorage.getItem('faves');
  const fave = JSON.parse(data) ?? faves;

  return (
    <Container maxWidth='lg'>
      <h1>favourite</h1>
      <Grid container>
        {fave.length > 0 ? (
          fave.map((item) => {
            const { idMeal } = item;
            return (
              <Grid key={idMeal} item xs={12} md={6} lg={4}>
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
