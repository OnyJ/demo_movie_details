import axios from "axios";

export const getTrends = async () => {
  const BASE_URL = "https://api.themoviedb.org/3/discover/movie";
  const FINAL_URL = `${BASE_URL}?api_key=${process.env.REACT_APP_TMDB_TOKEN}`;
  const result = await axios(FINAL_URL);
  console.log(result.data.results);
  return result.data.results;
};

export const searchMovie = async (movieName) => {
  const url =
    `https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&language=en-US&page=1`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTgyNGZhMThjZTcyMmZiZDg3YmQ5YTY5YzIxMDZjNCIsInN1YiI6IjY1M2YxN2MwYzhhNWFjMDBlM2ExZDRiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._0xwWIg7RdKvn9CzjvhW3eFAwWhqD-DDEAtSgqyabmc",
    },
  };
  axios
    .get(url, options)
    .then((response) => {
      console.log(response.data.results)
      return response.data.results
    })
    .catch((err) => console.error("error:", err));
};
