import { Container, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoriesRecipe } from '../redux/categories/categoriesActions';
import CatCardEl from '../shared/CatCardEl';

const Home = () => {
  const cats = useSelector((state) => state.catState.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoriesRecipe());
  }, []);

  return (
    <Container maxWidth='lg'>
      <Grid container mt={7} mb={7}>
        {cats.categories ? (
          cats.categories.map((item) => {

            return (
              <React.Fragment key={item.idCategory}>
                <Grid item xs={12} md={6} lg={4}>
                  <CatCardEl {...item} />
                </Grid>
              </React.Fragment>
            );
          })
        ) : (
          <h3>loader...</h3>
        )}
        <Grid item></Grid>
      </Grid>
    </Container>
  );
};

export default Home;
