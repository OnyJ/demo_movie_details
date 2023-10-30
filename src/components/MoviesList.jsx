import Screenshot from "../assets/Screenshot.png";

const MoviesList = ({ movies }) => {
  return (
    <div>
      <h2 className="special-title">My list</h2>
      <ul>
        {movies.map((movie, key) => (
          <li key={key}>
            <p>{movie}</p>
            <img
              className="movie-miniature"
              src={Screenshot}
              alt="movie illustration"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesList;
