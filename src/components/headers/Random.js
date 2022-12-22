import React, { useEffect, useState } from 'react';
import { getRandomRecipe } from '../redux/random/randomActions';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  List,
  Typography,
} from '@mui/material';
import { Container } from '@mui/material';

import { Favorite } from '@mui/icons-material';
import { Icon } from '@mui/material';
import { addToFave } from '../redux/random/randomActions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Random = () => {
  // * Using reload to get new meal
  const [reload, setReload] = useState(false);
  const [isFave, setIsFave] = useState(false);

  const dispatch = useDispatch();
  // * Reading data
  const randomMeals = useSelector((state) => state.randomState.randomRecipe);
  const { meals } = randomMeals ?? '';

  useEffect(() => {
    dispatch(getRandomRecipe());
    setIsFave(false);
  }, [reload]);

  return (
    <Container maxWidth='md'>
      <Box
        component='div'
        xs={{
          maxWidth: '50vw',
          width: '100%',
          overflowX: 'hidden',
          padding: '0',
          margin: '0',
        }}
      >
        <Typography
          variant='h6'
          mt={5}
          mb={2}
          sx={{ textAlign: 'center' }}
          component='p'
          color='secondary'
        >
          Get a Random food recipe on every reload :)
        </Typography>
        <Divider variant='middle' />
        <Grid container mt={4}>
          {meals ? (
            meals.map((rm) => {
              const {
                idMeal,
                strMeal,
                strCategory,
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
                strIngredient11,
                strIngredient12,
                strIngredient13,
                strIngredient14,
                strIngredient15,
                strIngredient16,
                strIngredient17,
                strIngredient18,
                strIngredient19,
                strIngredient20,
                strSource,
                strTags,
                strMealThumb,
                strInstructions,
              } = rm;

              const ingredients = [
                strIngredient1,
                strIngredient2,
                strIngredient3,
                strIngredient4,
                strIngredient5,
                strIngredient6,
                strIngredient7,
                strIngredient8,
                strIngredient9,
                strIngredient10,
                strIngredient11,
                strIngredient12,
                strIngredient13,
                strIngredient14,
                strIngredient15,
                strIngredient16,
                strIngredient17,
                strIngredient18,
                strIngredient19,
                strIngredient20,
              ];

              return (
                <React.Fragment key={idMeal}>
                  <Grid item xs={12}>
                    <Box
                      display='flex'
                      justifyContent='space-between'
                      alignItems='center'
                    >
                      <Box component='div'>
                        <Typography
                          component='p'
                          variant='h6'
                          color='text.primary'
                        >
                          {strMeal}
                        </Typography>
                        <Typography
                          component='p'
                          variant='p'
                          color='text.secondary'
                        >
                          {strCategory}
                        </Typography>
                        <Typography
                          component='p'
                          variant='p'
                          color='text.secondary'
                          pl={1}
                        >
                          #{strTags}
                        </Typography>
                      </Box>
                      <Icon
                        color={isFave ? 'primary' : 'disabled'}
                        sx={{ cursor: 'pointer' }}
                      >
                        <Favorite
                          onClick={() => {
                            dispatch(addToFave(idMeal, isFave));
                            setIsFave(!isFave);
                          }}
                        />
                      </Icon>
                    </Box>
                    <Typography
                      component='h2'
                      mt={4}
                      variant='h2'
                      color='primary'
                    >
                      How to cook it?
                    </Typography>
                    <Box component='div'>
                      <img width={400} src={strMealThumb} alt={strMeal} />
                    </Box>
                    <Typography
                      component='p'
                      p={2}
                      variant='h5'
                      color='text.primary'
                    >
                      First get all the ingredients that are required!
                    </Typography>
                    <Divider variant='center' />
                    <Box component='div'>
                      {ingredients.map((ing, idx) => {
                        return (
                          <React.Fragment key={idx}>
                            <List component='li'>
                              {ing !== '' ? (
                                <>
                                  <Typography component='p' variant='p'>
                                    {idx + 1}.{ing}{' '}
                                  </Typography>
                                </>
                              ) : null}
                            </List>
                          </React.Fragment>
                        );
                      })}
                    </Box>

                    <Typography
                      component='p'
                      variant='p'
                      color='text.secondary'
                      m={3}
                    >
                      {strInstructions}
                    </Typography>
                    <Link
                      component='a'
                      variant='p'
                      href={strSource}
                      target='_blank'
                      sx={{
                        width: 5,
                        textDecoration: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      source to this article
                    </Link>
                  </Grid>
                </React.Fragment>
              );
            })
          ) : (
            <h1>loading...</h1>
          )}
        </Grid>
        <Box mt={5} mb={4} component='div'>
          <Button variant='outlined' onClick={() => setReload((prev) => !prev)}>
            Reload
          </Button>
        </Box>
        <ToastContainer />
      </Box>
    </Container>
  );
};

export default Random;
