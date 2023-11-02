import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, deleteMovie } from "../redux/actions/movieActions";

const MovieEditor = () => {
  const [movieName, setMovieName] = useState("");
  const [movieId, setMovieId] = useState(null);
  const movies = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (movieName) {
      const newMovie = {
        id: Date.now(),
        name: movieName,
      };
      dispatch(addMovie(newMovie));
      setMovieName("");
    }
  };

  const handleDelete = () => {
    dispatch(deleteMovie(movieId));
  };

  const handleEdit = (movie) => {
    setMovieName(movie.name);
    setMovieId(movie.id);
  };

  const handleUpdate = () => {
    if (movieId) {
      handleDelete(movieId);
      handleAdd();
      setMovieId(null);
    }
  };

  return (
    <div>
      <h2>Movie Editor</h2>
      <input
        value={movieName}
        onChange={(e) => setMovieName(e.target.value)}
        plaeholder="Entrer le movie name"
      />

      {movieId ? (
        <button onClick={handleUpdate}>Mettre à jour le movie</button>
      ) : (
        <button onClick={handleAdd}>Ajouter un movie</button>
      )}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            {movie.name}
            <button onClick={() => handleEdit(movie)}>Editer</button>
            <button onClick={() => handleDelete(movie.id)}>
              Supprimer
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieEditor;
