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
        error: '',
      };
    case 'ERROR':
      return {
        isLoading: false,
        error: action.payload,
      };

    case 'RANDOM_FAVE':
      const newArr = state.randomRecipe.meals.filter(
        (item) => item.idMeal === action.payload
      );
      localStorage.setItem('faves', JSON.stringify(state.faveItems));
      return {
        ...state,
        faveItems: [...newArr],
      };

    default:
      return initState;
  }
};

export default randomReducer;
