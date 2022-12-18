import axios from 'axios';

const fetchRandomReq = () => {
  return {
    type: 'Req',
  };
};

const fetchRandomSuccess = (rnd) => {
  return {
    type: 'SUCCESS',
    payload: rnd,
  };
};

const fetchRandomFailed = (err) => {
  return {
    type: 'ERROR',
    payload: err,
  };
};

const getRandomRecipe = () => {
  return (dispatch) => {
    try {
      dispatch(fetchRandomReq());
      axios('www.themealdb.com/api/json/v1/1/random.php')
        .then((resp) => {
          const randomData = resp.data;
          dispatch(fetchRandomSuccess(randomData));
        })
        .catch((err) => {
          dispatch(fetchRandomFailed(err));
        });
    } catch (error) {
      console.warn(error, 'Something Went Wrong!, Please Check');
    }
  };
};

export { getRandomRecipe };
