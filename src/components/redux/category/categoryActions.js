import axios from 'axios';

const fetchCategoryReq = () => {
  return {
    type: 'REQ',
  };
};

const fetchCategorySuccess = (rnd) => {
  return {
    type: 'SUCCESS',
    payload: rnd,
  };
};

const fetchCategoryFailed = (err) => {
  return {
    type: 'ERROR',
    payload: err,
  };
};

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c';

const getCategoryRecipe = (cat) => {
  return (dispatch) => {
    try {
      dispatch(fetchCategoryReq());
      axios
        .get(`${BASE_URL}=${cat}`)
        .then((resp) => {
          const cat = resp.data;
          dispatch(fetchCategorySuccess(cat));
        })
        .catch((err) => {
          dispatch(fetchCategoryFailed(err));
        });
    } catch (error) {
      console.warn(error, 'Something Went Wrong!, Please Check');
    }
  };
};

export { getCategoryRecipe };
