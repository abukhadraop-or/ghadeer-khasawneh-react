import React from 'react';
import MovieCard from 'components/Movie/MovieCard';
import useFetch from 'Services/Https';

import { StyledMoviesCards } from 'components/MoviesList/movies-list-styles';

/**
 * Lists movies as cards
 * * @return {JSX.element}
 */

function MoviesList() {
  const { movies } = useFetch();
  return (
    // <Bla>
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
    // <button className="loadButton">HIIIIIIIIII</button>
    /* </Bla> */
  );
}
export default MoviesList;
