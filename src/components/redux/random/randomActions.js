import axios from 'axios';
import { toast } from 'react-toastify';

const fetchRandomReq = () => {
  return {
    type: 'REQ',
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

const addToFave = (id, isFave) => {
  const toastConfig = {
    position: 'top-right',
    autoClose: 600,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  };

  if (!isFave) {
    toast('added', toastConfig);
  } else {
    toast.warn('removed', toastConfig);
  }
  return {
    type: 'RANDOM_FAVE',
    payload: { id, isFave },
  };
};

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const getRandomRecipe = () => {
  return (dispatch) => {
    try {
      dispatch(fetchRandomReq());
      axios
        .get(`${BASE_URL}/random.php`)
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

export { getRandomRecipe, addToFave };
