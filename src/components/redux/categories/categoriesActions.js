import axios from 'axios';

const fetchCategoriesReq = () => {
  return {
    type: 'REQ',
  };
};

const fetchCategoriesSuccess = (rnd) => {
  return {
    type: 'SUCCESS',
    payload: rnd,
  };
};

const fetchCategoriesFailed = (err) => {
  return {
    type: 'ERROR',
    payload: err,
  };
};

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/categories.php';

const getCategoriesRecipe = () => {
  return (dispatch) => {
    try {
      dispatch(fetchCategoriesReq());
      axios
        .get(BASE_URL)
        .then((resp) => {
          const cat = resp.data;
          dispatch(fetchCategoriesSuccess(cat));
        })
        .catch((err) => {
          dispatch(fetchCategoriesFailed(err));
        });
    } catch (error) {
      console.warn(error, 'Something Went Wrong!, Please Check');
    }
  };
};

export { getCategoriesRecipe };
