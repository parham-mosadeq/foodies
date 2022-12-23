import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIdRecipe } from '../redux/favorite/favoriteActions';

const FavoritePage = () => {
  // * Getting id from url
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    // * Calling getRecipe and passing id as param
    dispatch(getIdRecipe(id));
  }, []);

  const meal = useSelector((state) => state.idState.idRecipe);
  const { meals } = meal ?? '';

  return (
    <Container maxWidth='lg'>
      {meals ? (
        meal.meals.map((item) => {
          return <div key={item.idMeal}>hi</div>;
        })
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default FavoritePage;
