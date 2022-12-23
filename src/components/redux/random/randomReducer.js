const initState = {
  randomRecipe: [],
  isLoading: false,
  error: '',
  faveItems: [],
};

const randomReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQ':
      return {
        isLoading: true,
      };

    case 'SUCCESS':
      return {
        randomRecipe: action.payload,
        isLoading: false,
        faveItems: [],
        error: '',
      };
    case 'ERROR':
      return {
        isLoading: false,
        error: action.payload,
      };

    case 'RANDOM_FAVE':
      const checkFave = () => {
        if (action.payload.isFave) {
          const newArr = state.randomRecipe.meals.filter(
            (item) => item.idMeal !== action.payload.id
          );

          return newArr;
        } else {
          const newArr = state.randomRecipe.meals.filter(
            (item) => item.idMeal === action.payload.id
          );
          return newArr;
        }
      };

      return {
        ...state,
        faveItems: checkFave(),
        saveToLocalStorage: localStorage.setItem(
          'fave',
          JSON.stringify(checkFave())
        ),
      };

    default:
      return initState;
  }
};

export default randomReducer;
