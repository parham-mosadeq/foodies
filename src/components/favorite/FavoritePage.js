import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const FavoritePage = () => {
  const { id } = useParams();
  console.log(id);
  console.log(123);

  useEffect(() => {}, []);

  return <div></div>;
};

export default FavoritePage;
