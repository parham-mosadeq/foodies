const initState = {
  randomRecipe: '',
};

const randomReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        randomRecipe: action.payload,
      };

    default:
      return initState;
  }
};

export default randomReducer;
