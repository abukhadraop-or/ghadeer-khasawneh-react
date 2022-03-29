import React from "react";
import MoviesList from "./MoviesList";
import MoviesFilter from "./MoviesFilter";
import { StyledMainContent } from "../styles/MainContent.Styled";
import PropTypes from "prop-types";

const MainContent = (props) => {
  return (
    <StyledMainContent>
      <MoviesFilter sortingHandler={props.sortingHandler} />
      <MoviesList movies={props.movies} />
    </StyledMainContent>
  );
};

MainContent.propTypes = {
  movies: PropTypes.array,
  sortingHandler: PropTypes.func,
};

export default MainContent;
