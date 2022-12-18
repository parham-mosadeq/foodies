import React, { useEffect, useState } from 'react';
import { getRandomRecipe } from '../redux/random/randomActions';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { Container } from '@mui/system';
const Random = () => {
  const [reload, setReload] = useState(false);
  const dispatch = useDispatch();
  const randomMeals = useSelector(
    (state) => state.randomState.randomRecipe.meals
  );

  console.log(randomMeals);

  useEffect(() => {
    dispatch(getRandomRecipe());
  }, [reload]);

  return (
    <Container maxWidth='md'>
      <Typography variant='h2' component='p' color='secondary'>
        Get a Random food recipe on every reload
      </Typography>
      <Button variant='outlined' onClick={() => setReload((prev) => !prev)}>
        Reload
      </Button>
    </Container>
  );
};

export default Random;
