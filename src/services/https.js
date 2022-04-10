const Key = `a6ce94f05ccb22f0236d41a4d037e960`;

/**
 * Make get request.
 *
 * @param {String} url            Request URl.
 *
 * @return {Promise<Object>}      Promise fulfilled with response data.
 */
export const fetchMovies = (url) => {
  const response = fetch(url);
  return response;
};

/**
 * Make get request.
 *
 * @param {String} sort The value that will be used for sorting.
 *
 * @return {Promise<Object>}      Promise fulfilled with response data.
 */
function ShowMovies(sort) {
  const response = fetchMovies(
    `https://api.themoviedb.org/3/discover/movie?api_key=${Key}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1`
  );

  return response;
}

export default ShowMovies;
