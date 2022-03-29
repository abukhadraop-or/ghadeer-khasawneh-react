import React from "react";
import Layout from "./components/Layout";
import { useState, useEffect, useCallback } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState("popularity.desc");

  /**
   * Make get request.
   *
   * @param {string} url            Request URl.
   
   *
   * @return {<Array>}  Array fulfilled with response data.
   */

  const fetchMoviesHandler = useCallback(
    async (url) => {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=a6ce94f05ccb22f0236d41a4d037e960&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1`;
      const response = await fetch(url);
      const data = await response.json();

      const transformedMovies = data.results.map((moviesData) => {
        return {
          title: moviesData.original_title,
          date: moviesData.release_date,
          average: moviesData.vote_average,
          count: moviesData.vote_count,
          image: moviesData.poster_path,
          overview: moviesData.overview,
        };
      });
      setMovies(transformedMovies);
    },
    [sort]
  );

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function sortingHandler(value) {
    setSort(value);
  }
  return <Layout movies={movies} sortingHandler={sortingHandler} />;
}

export default App;
