export const addMovie = (movie) => ({
  type: "ADD_MOVIE",
  payload: movie,
});

export const deleteMovie = (id) => ({
  type: "DELETE_MOVIE",
  payload: id,
});
