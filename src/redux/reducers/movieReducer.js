const initialState = [];

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return [...state, action.payload];
    case "DELETE_MOVIE":
      return state.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};

export default movieReducer;
