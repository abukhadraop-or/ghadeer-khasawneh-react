import React from 'react';
import MovieCard from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import MoviesCards from 'components/MoviesList/movies-list-styles';

/**
 * Lists movies as cards.
 *
 *  @param {Object} props Props object.
 *  @param {array} props.movies Contains movies data.
 *
 *  @return {JSX.Element}
 */
function MoviesList({ movies }) {
  return (
    <MoviesCards>
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
    </MoviesCards>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
};

export default MoviesList;
