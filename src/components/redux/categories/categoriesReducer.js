const initState = {
  categories: [],
  isLoading: false,
  error: '',
};

const categoriesReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQ':
      return {
        isLoading: true,
        categories: [],
        error: '',
      };

    case 'SUCCESS':
      return {
        categories: action.payload,
        isLoading: false,
        error: '',
      };
    case 'ERROR':
      return {
        categories: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return initState;
  }
};

export default categoriesReducer;
