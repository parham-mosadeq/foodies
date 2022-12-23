const initState = {
  inputData: '',
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case 'READ':
      return {
        inputData: action.payload,
      };
    default:
      return initState;
  }
};

export default searchReducer;
