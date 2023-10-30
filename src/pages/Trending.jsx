import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList";

const Trending = () => {
  const [click, setClick] = useState(0);
  const moviesArray = ["Fast and furious", "Barbie", "Nemo"];

  useEffect(() => {
    console.log("Trending");
  }, [click])
  
  const handleClick = () => {
    console.log("Clicked");
    setClick(click + 1);
  };

  return (
    <>
      <p>Likes : {click}</p>
      <button onClick={handleClick}>Like</button>
      <MoviesList movies={moviesArray} />
    </>
  );
};

export default Trending;
