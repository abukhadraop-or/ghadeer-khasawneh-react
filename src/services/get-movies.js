import get from 'utils/https';

const Key = `a6ce94f05ccb22f0236d41a4d037e960`;

/**
 * Get sorted and unsorted movies.
 *
 * @param {string} sort The value that will be used for sorting.
 *
 * @return {Promise<Object>} Promise fulfilled with response data.
 */
function getMovies(sort) {
  const response = get(
    `https://api.themoviedb.org/3/discover/movie?api_key=${Key}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=1`
  );

  return response;
}

export default getMovies;
