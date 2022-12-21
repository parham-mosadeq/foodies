import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const FavouritePage = () => {
  const { id } = useParams();
  console.log(id);
  console.log(123);

  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return <div></div>;
};

export default FavouritePage;
