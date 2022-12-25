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
        ...state,
        isLoading: true,
        idRecipe: [],
        error: '',
      };

    case 'SUCCESS':
      return {
        ...state,
        idRecipe: action.payload,
        isLoading: false,
        error: '',
      };
    case 'ERROR':
      return {
        ...state,
        isLoading: false,
        idRecipe: [],
        error: action.payload,
      };

    default:
      return initState;
  }
};

export default idReducer;
