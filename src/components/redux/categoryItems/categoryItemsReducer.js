const initState = {
  categoryItems: [],
  isLoading: false,
  error: '',
};

const categoryItemsReducer = (state = initState, action) => {
  switch (action.type) {
    case 'REQ':
      return {
        categoryItems: [],
        isLoading: true,
        error: '',
      };

    case 'SUCCESS':
      return {
        categoryItems: action.payload,
        isLoading: false,
        error: '',
      };
    case 'ERROR':
      return {
        categoryItems: [],
        isLoading: false,
        error: action.payload,
      };

    default:
      return initState;
  }
};

export default categoryItemsReducer;
