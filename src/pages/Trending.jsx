import React, { useMemo } from "react";
import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";
import { getTrends } from "../services/tmdb";

const Trending = React.memo(() => {
  const computedValue = useMemo(() => {
    console.log("big calculation");
    const data = "1234";
    return data;
  });

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrends().then((movies) => {
      setMovies(movies);
    });
  }, []);

  return (
    <>
      <p>Computed data = {computedValue}</p>
      <MoviesList movies={movies} />
    </>
  );
});

export default Trending;
