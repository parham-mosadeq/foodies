import {
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

const CardEl = (props) => {
  const { idMeal, strMeal, strInstructions, strMealThumb } = props;

  return (
    <>
      <Card
        sx={{
          boxShadow: 'rgba(0,0,0,0.1) 0 4px 12px',
          borderRadius: '4px',
          margin: '7px',
        }}
      >
        {props && (
          <CardHeader
            title={
              <Typography
                component='p'
                variant='p'
                fontWeight={500}
                color='text.primary'
              >
                {trimStr(strMeal)} ...
              </Typography>
            }
          />
        )}
        <CardMedia
          component='img'
          height={194}
          image={strMealThumb}
          alt={strMeal}
        />
        <CardContent>
          <Typography
            component='p'
            variant='p'
            color='text.primary'
            fontWeight={300}
          >
            {trimStr(strInstructions)}...
          </Typography>
        </CardContent>
        <Divider variant='middle' sx={{ margin: '10px' }} />
        <CardActions>
          <Link
            to={`food/${idMeal}`}
            style={{ textDecoration: 'none', width: '100%' }}
          >
            <Button
              variant='outlined'
              size='small'
              sx={{ width: '100%', borderRadius: '3px' }}
            >
              Read More
            </Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default CardEl;
