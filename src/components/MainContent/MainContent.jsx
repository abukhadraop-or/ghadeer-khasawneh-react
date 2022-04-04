import React from "react";
import PropTypes from "prop-types";
import MoviesList from "components/MoviesList/MoviesList";
import MoviesFilter from "components/MoviesFilter/MoviesFilter";
import  StyledMainContent from "components/MainContent/main-content-styles";

/**
 * Lists main section elements.
 * * @return {JSX.element}
 */

function MainContent ({sortingHandler}) {
  return (
    <StyledMainContent>
      <MoviesFilter sortingHandler={sortingHandler} />
      <MoviesList/>
    </StyledMainContent>
  );
};

MainContent.propTypes = {

  sortingHandler: PropTypes.func.isRequired,
};

export default MainContent;




