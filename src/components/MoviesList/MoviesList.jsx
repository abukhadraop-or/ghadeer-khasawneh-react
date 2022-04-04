import React from 'react';
import MovieCard from 'components/Movie/MovieCard';
import PropTypes from 'prop-types';

import StyledMoviesCards from 'components/MoviesList/movies-list-styles';

/**
 * Lists movies as cards
 * * @return {JSX.element}
 */

function MoviesList({movies}) {
  return (
    <StyledMoviesCards>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          date={movie.date}
          image={movie.image}
          overview={movie.overview}
        />
      ))}
    </StyledMoviesCards>

  );
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
export default MoviesList;
