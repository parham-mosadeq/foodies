import axios from 'axios';

const fetchCategoryItemsReq = () => {
  return {
    type: 'REQ',
  };
};

const fetchCategoryItemsSuccess = (rnd) => {
  return {
    type: 'SUCCESS',
    payload: rnd,
  };
};

const fetchCategoryItemsFailed = (err) => {
  return {
    type: 'ERROR',
    payload: err,
  };
};

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1/search.php?s';

const getCategoryItemsRecipe = (name) => {
  return (dispatch) => {
    try {
      dispatch(fetchCategoryItemsReq());
      axios
        .get(`${BASE_URL}=${name}`)
        .then((resp) => {
          const cat = resp.data;
          dispatch(fetchCategoryItemsSuccess(cat));
        })
        .catch((err) => {
          dispatch(fetchCategoryItemsFailed(err));
        });
    } catch (error) {
      console.warn(error, 'Something Went Wrong!, Please Check');
    }
  };
};

export { getCategoryItemsRecipe };
