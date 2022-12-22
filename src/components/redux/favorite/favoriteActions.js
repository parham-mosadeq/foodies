import axios from 'axios';

const fetchIdReq = () => {
  return {
    type: 'REQ',
  };
};

const fetchIdSuccess = (rnd) => {
  return {
    type: 'SUCCESS',
    payload: rnd,
  };
};

const fetchIdFailed = (err) => {
  return {
    type: 'ERROR',
    payload: err,
  };
};

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i';

const getIdRecipe = (id) => {
  return (dispatch) => {
    try {
      dispatch(fetchIdReq());
      axios
        .get(`${BASE_URL}=${id}`)
        .then((resp) => {
          const IdData = resp.data;
          dispatch(fetchIdSuccess(IdData));
        })
        .catch((err) => {
          dispatch(fetchIdFailed(err));
        });
    } catch (error) {
      console.warn(error, 'Something Went Wrong!, Please Check');
    }
  };
};

export { getIdRecipe };
