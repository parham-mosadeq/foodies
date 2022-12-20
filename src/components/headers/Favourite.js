import { Container, Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const Favourite = () => {
  const faves = useSelector((state) =>
    console.log(state.randomState.faveItems)
  );

  const data = localStorage.getItem('faves');
  const fave = JSON.parse(data);

  console.log(fave);

  return (
    <Container maxWidth='lg'>
      <h1>favourite</h1>
      <Grid container>
        {fave.length > 0 ? (
          fave.map((item) => {
            console.log(item);

            const { idMeal, strMeal, strCategory, strTags, strMealThumb } =
              item;
            return (
              <div>
                <h3>hello</h3>
              </div>
            );
          })
        ) : (
          <h1>hi</h1>
        )}
      </Grid>
    </Container>
  );
};

export default Favourite;
