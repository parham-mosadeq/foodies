const initState = {
  category: [],
  isLoading: false,
  error: '',
};

const categoryReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQ':
      return {
        isLoading: true,
        category: [],
        error: '',
      };

    case 'SUCCESS':
      return {
        category: action.payload,
        isLoading: false,
        error: '',
      };
    case 'ERROR':
      return {
        category: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return initState;
  }
};

export default categoryReducer;
