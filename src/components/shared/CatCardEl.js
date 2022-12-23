import {
  // Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { trimStr } from './trimStr';

const CatCardEl = (props) => {
  const { strCategory, strCategoryThumb, strCategoryDescription } = props;

  return (
    <>
      <Card
        sx={{
          boxShadow: 'rgba(0,0,0,0.4) 0 4px 12px',
          borderRadius: '6px',
          margin: '10px',
        }}
      >
        {props && (
          <CardHeader
            // avatar={
            //   <Avatar src={strMealThumb} alt={strMeal} sx={{ marginLeft: 4 }} />
            // }
            title={
              <Typography
                component='h6'
                variant='h6'
                fontWeight={500}
                color='primary'
                textAlign='center'
                letterSpacing={2}
              >
                <Link
                  style={{ textDecoration: 'none', color: '#1976d2' }}
                  to={`/category/${strCategory}`}
                >
                  {strCategory}
                </Link>
              </Typography>
            }
          />
        )}
        <Divider variant='fullWidth' mt={0} />
        <CardMedia
          component='img'
          height={194}
          image={strCategoryThumb}
          alt={strCategory}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent>
          <Typography
            component='p'
            variant='p'
            color='text.primary'
            fontWeight={300}
          >
            {trimStr(strCategoryDescription)}...
          </Typography>
        </CardContent>
        <Divider variant='middle' sx={{ margin: '10px' }} />
        <CardActions>
          <Link
            to={`/category/${strCategory}`}
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <Button
              variant='outlined'
              size='small'
              sx={{ width: '100%', borderRadius: '3px' }}
            >
              view Category
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default CatCardEl;
