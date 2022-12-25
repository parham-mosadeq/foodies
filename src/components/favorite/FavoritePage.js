import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getIdRecipe } from '../redux/favorite/favoriteActions';
import { Box, Divider, Link, List } from '@mui/material';

import ScrollToTop from '../shared/ScrollToTop';
import Loader from '../shared/Loader';

const FavoritePage = () => {
  // * Getting id from url
  const { id } = useParams();
  const dispatch = useDispatch();

  const meal = useSelector((state) => state.idState.idRecipe);
  const { meals } = meal ?? '';

  useEffect(() => {
    document.title = `Foodies | Favorites`;
    // * Calling getRecipe and passing id as param
    dispatch(getIdRecipe(id));

    return () => [];
  }, []);

  return (
    <Container maxWidth='lg'>
      <Grid container mt={6} mb={7}>
        <Grid item>
          {meals ? (
            meals.map((item) => {
              const {
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
                strMeasure1,
                strMeasure2,
                strMeasure3,
                strMeasure4,
                strMeasure5,
                strMeasure6,
                strMeasure7,
                strMeasure8,
                strMeasure9,
                strMeasure10,
                strMeasure11,
                strMeasure12,
                strMeasure13,
                strMeasure14,
                strMeasure15,
                strMeasure16,
                strMeasure17,
                strMeasure18,
                strMeasure19,
                strMeasure20,
              } = item;
              const measures = [
                strMeasure1,
                strMeasure2,
                strMeasure3,
                strMeasure4,
                strMeasure5,
                strMeasure6,
                strMeasure7,
                strMeasure8,
                strMeasure9,
                strMeasure10,
                strMeasure11,
                strMeasure12,
                strMeasure13,
                strMeasure14,
                strMeasure15,
                strMeasure16,
                strMeasure17,
                strMeasure18,
                strMeasure19,
                strMeasure20,
              ];
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
                <React.Fragment key={new Date().getTime().toString()}>
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
                    <Box
                      component='div'
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      <Box component='span' mb={1}>
                        {ingredients.map((ing, idx) => {
                          return (
                            <React.Fragment key={idx}>
                              <List component='li'>
                                {ing !== '' ? (
                                  <>
                                    <Typography component='p' variant='p'>
                                      {idx + 1} .{ing}
                                    </Typography>
                                  </>
                                ) : null}
                              </List>
                            </React.Fragment>
                          );
                        })}
                      </Box>

                      <Divider variant='middle' />

                      <Box component='span' mt={2}>
                        {measures.map((mea, idx) => {
                          return (
                            <React.Fragment key={idx}>
                              <List component='li'>
                                {mea !== '' ? (
                                  <>
                                    <Typography component='p' variant='p'>
                                      {idx + 1} .{mea}
                                    </Typography>
                                  </>
                                ) : null}
                              </List>
                            </React.Fragment>
                          );
                        })}
                      </Box>
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
            <Loader />
          )}
        </Grid>
      </Grid>
      <ScrollToTop />
    </Container>
  );
};

export default FavoritePage;
