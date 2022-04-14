import React from 'react';
import PropTypes from 'prop-types';
import MoviesList from 'components/MoviesList/MoviesList';
import MoviesFilter from 'components/MoviesFilter/MoviesFilter';
import PageMainContent from 'components/MainContent/main-content-styles';

/**
 * Lists main section elements.
 *
 *  @param {Object} props Props object.
 *  @param {array} props.movies Contains movies data.
 *  @param {function} props.onSort Sorts the data.
 *
 *  @return {JSX.Element}
 */
function MainContent({ movies, onSort }) {
  return (
    <PageMainContent>
      <MoviesFilter onSort={onSort} />
      <MoviesList movies={movies} />
    </PageMainContent>
  );
}

MainContent.propTypes = {
  movies: PropTypes.arrayOf.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default MainContent;
