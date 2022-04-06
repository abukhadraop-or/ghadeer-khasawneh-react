import React from 'react';
import MovieCard from 'components/Movie/MovieCard';
import PropTypes from 'prop-types';

import StyledMoviesCards from 'components/MoviesList/movies-list-styles';

/**
 * Lists movies as cards.
 *
 *  @param {Opject} props
 *  @param {Array} props.movies contains movies data.
 * * @return {JSX.element}
 */

function MoviesList({ movies }) {
  return (
    <StyledMoviesCards>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          date={movie.date}
          image={movie.image}
          overview={movie.overview}
          average={movie.average}
        />
      ))}
    </StyledMoviesCards>
  );
}
MoviesList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};
export default MoviesList;
