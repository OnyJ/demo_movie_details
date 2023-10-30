import { useEffect, useState } from "react";
import { searchMovie } from "../services/tmdb";
import MoviesList from "../components/MoviesList";

const SearchMovie = () => {
  const [title, setTitle] = useState(<h1>Recherche...</h1>);
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([""]);
  const [display, setDisplay]  = useState();

  useEffect(() => {
    searchMovie(search).then((movies) => {
      setMovies(movies);
    });
    setDisplay(<MoviesList movies={movies} />)
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch();
    setTitle(<h1>Recherche pour "{search}"</h1>);
  };

  const handleInputChange = (textInput) => {
    setSearch(textInput);
  };

  return (
    <>
      {title}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Rechercher un film..."
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
      {display && display}
    </>
  );
};

export default SearchMovie;
