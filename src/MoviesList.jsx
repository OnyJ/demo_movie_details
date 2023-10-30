const MoviesList = ({ movies }) => {
  return (
    <>
      <h2>My list</h2>
      <ul>
        {movies.map((movie) => (
          <li>{movie}</li>
        ))}
      </ul>
    </>
  );
};

export default MoviesList;
