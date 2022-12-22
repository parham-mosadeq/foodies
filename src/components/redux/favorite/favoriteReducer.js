const initState = {
  idRecipe: [],
  isLoading: false,
  error: '',
  faveItems: [],
};

const idReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQ':
      return {
        isLoading: true,
      };

    case 'SUCCESS':
      return {
        idRecipe: action.payload,
        isLoading: false,
        error: '',
      };
    case 'ERROR':
      return {
        isLoading: false,
        error: action.payload,
      };

    default:
      return initState;
  }
};

export default idReducer;
