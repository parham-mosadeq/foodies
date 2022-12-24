import { Box, Container } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoryItemsRecipe } from '../redux/categoryItems/categoryItemsActions';
import Loader from '../shared/Loader';
import { Divider, Grid, Link, List, Typography } from '@mui/material';
import BackBtn from '../shared/BackBtn';
import ScrollToTop from '../shared/ScrollToTop';
const CategoryItem = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  const catsItem = useSelector(
    (state) => state.catItemNameState.categoryItems.meals
  );
  useEffect(() => {
    dispatch(getCategoryItemsRecipe(name));
  }, []);
  return (
    <Container maxWidth='lg'>
      {/* <Button
        variant='contained'
        onClick={() => nav(-1)}
        sx={{ color: '#fff', marginTop: '50px' }}
      >
        <ArrowBack />
      </Button> */}
      <BackBtn />
      {catsItem ? (
        catsItem.map((rm) => {
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
          } = rm;

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
            <React.Fragment key={idMeal}>
              <Grid item xs={12} mt={12}>
                <Box
                  component='div'
                  sx={{
                    width: '100%',
                    height: '100vh',
                    margin: '24px auto',
                  }}
                >
                  <img
                    style={{
                      width: '100%',
                      height: '65%',
                      display: 'block',
                      objectFit: 'cover',
                      borderRadius: '9px',
                    }}
                    src={strMealThumb}
                    alt={strMeal}
                  />
                </Box>

                <Box
                  display='flex'
                  justifyContent='space-between'
                  alignItems='center'
                >
                  <Box component='div'>
                    <Typography component='p' variant='h6' color='text.primary'>
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
                  component='h3'
                  mt={4}
                  variant='h3'
                  fontWeight={700}
                  color='primary'
                >
                  Recipe ;)
                </Typography>

                <Typography
                  component='p'
                  p={2}
                  variant='h5'
                  fontWeight={500}
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

                <Divider variant='middle' />

                <Typography
                  component='p'
                  variant='p'
                  color='text.secondary'
                  m={3}
                >
                  {strInstructions}
                </Typography>

                <Box m={3} mb={10} mt={9}>
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
                </Box>
              </Grid>
            </React.Fragment>
          );
        })
      ) : (
        <Loader />
      )}
      <ScrollToTop />
    </Container>
  );
};

export default CategoryItem;
