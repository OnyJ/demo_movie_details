import { useState } from "react";

const SearchMovie = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch();
    alert("Recherche lancée pour " + search);
  };

  const handleInputChange = (textInput) => {
    setSearch(textInput);
    console.log(textInput);
  };

  return (
    <>
      <h1>Recherche...</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Rechercher un film..."
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button type="submit">Rechercher</button>
      </form>
    </>
  );
};

export default SearchMovie;
