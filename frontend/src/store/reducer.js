const initalState = {
  user: null,
  isLoggedIn: false,
  loading: false
};

const reducer = (state = initalState, action) => {
  if (action.type === 'LOGIN') {
    return {
      ...state,
      user: {
        ...action.payload
      },
      isLoggedIn: true
    };
  }

  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      loading: action.payload
    };
  }

  return state;
};

export default reducer;
