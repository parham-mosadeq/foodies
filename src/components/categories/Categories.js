import { Box, Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoryRecipe } from '../redux/category/categoryActions';
import BackBtn from '../shared/BackBtn';
import CardEl from '../shared/CardEl';
import Loader from '../shared/Loader';
const Categories = () => {
  const { cat } = useParams();

  const categoryItems = useSelector(
    (state) => state.catItemsState.category.meals
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryRecipe(cat));
  }, []);

  return (
    <Container maxWidth='lg'>
      <BackBtn />
      <Grid container sx={{ margin: '12px auto' }}>
        {categoryItems ? (
          categoryItems.map((item) => {
            console.log(item);

            return (
              <React.Fragment key={item.idMeal}>
                <Grid item xs={12} md={6} lg={4}>
                  <CardEl {...item} />
                </Grid>
              </React.Fragment>
            );
          })
        ) : (
          <Box component='div'>
            <Loader />
          </Box>
        )}
      </Grid>
    </Container>
  );
};

export default Categories;
