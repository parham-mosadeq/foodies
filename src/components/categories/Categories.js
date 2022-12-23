import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCategoryRecipe } from '../redux/category/categoryActions';
import CardEl from '../shared/CardEl';
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
      <Grid container sx={{ margin: '12px auto' }}>
        {categoryItems ? (
          categoryItems.map((item) => {
            // console.log(item);

            return (
              <React.Fragment key={item.idMeal}>
                <Grid item xs={12} md={6} lg={4}>
                  <CardEl {...item} />
                </Grid>
              </React.Fragment>
            );
          })
        ) : (
          <h4>loader...</h4>
        )}
      </Grid>
    </Container>
  );
};

export default Categories;
