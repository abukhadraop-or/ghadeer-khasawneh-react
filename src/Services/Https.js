import { useState, useEffect, useCallback } from 'react';
/**
 * Make get request.
 *
 * @param {string} url            Request URl.
 * @return {Promise<Array>}  Array fulfilled with response data.
 */
function useFetch() {
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState('popularity.desc');

  const fetchMoviesHandler = useCallback(
    async () => {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=a6ce94f05ccb22f0236d41a4d037e960&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1`;
      const response = await fetch(url);
      const data = await response.json();

      const transformedMovies = data.results.map((moviesData) => ({
        average: moviesData.vote_average,
         count: moviesData.vote_count,
        date: moviesData.release_date,

        image: moviesData.poster_path,
        overview: moviesData.overview,
        title: moviesData.original_title,
        }));
      setMovies(transformedMovies);
    },
    [sort]
  );

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const sortingHandler = (value) =>  {
    setSort(value);
  }

  return { movies, sort, sortingHandler };
}
export default useFetch;
