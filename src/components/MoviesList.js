import React from "react";
import MovieCard from "./MovieCard";

import { StyledMoviesCards } from "../styles/MoviesCards.Styled";
import PropTypes from "prop-types";

const MoviesList = (props) => {
  return (
    <StyledMoviesCards>
      {props.movies.map((movie) => (
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
};
MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
