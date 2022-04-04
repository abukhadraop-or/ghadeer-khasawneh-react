import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  StyledPopularMovies,
  StyledMenu,
  StyledTitle,
  StyledEnabledButton,
  StyledDisabledButton,
} from "components/MoviesFilter/movies-filter-styles";
import {
  StyledSort,
  FilterList,
  WhereToWatch,
  StyledForm,
  StyledLabel,
  StyledSelectionList,
  StyledImage,
  StyledOptions,
} from "components/MoviesFilter/sort-styles";
import Arrow from 'Assets/Arrow.svg';

 /**
 * Lists filter and sort sections.
 * * @return {JSX.element}
 */

function MoviesFilter ({sortingHandler}) {
  const [dropDownList, setDropDownList] = useState(true);
  const [selectedValue, setSelectedValue] = useState(true);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  /**
   * Handles openning and closing drop down list.
   */

  const dropDownListHandler = () => {
    setDropDownList(!dropDownList);
  }
  /**
   * Handles onChange event.
   * Shows the enabled submit button.
   */
  const sortSubmitHandler = (event) => {
    setSelectedValue(event.target.value);
    setButtonIsDisabled(false);
  }
  /**
   * Handles onClick event.
   * Shows the disabled submit button.
   */
  const callSortSubmitHandler = () => {
    sortingHandler(selectedValue);
    setButtonIsDisabled(true);
  }

  return (
    <StyledPopularMovies>
      <StyledTitle>Popular Movies</StyledTitle>
        <StyledSort listIsShown={dropDownList}>
          <div onClick={dropDownListHandler} aria-hidden="true">Sort</div>
          {dropDownList && (
            <StyledForm>
              <StyledLabel>Sort Results By</StyledLabel>
              <StyledSelectionList name="sort" onChange={sortSubmitHandler}>
                <StyledOptions value="popularity.desc">Popularity Descending</StyledOptions>
                <StyledOptions value="popularity.asc">Popularity Ascending</StyledOptions>
                <StyledOptions value="vote_average.desc">Rating Descending</StyledOptions>
                <StyledOptions value="vote_average.asc">Rating Ascending</StyledOptions>
                <StyledOptions value="release_date.desc">
                  Release Date Descending
                </StyledOptions>
                <StyledOptions value="release_date.asc">Release Date Ascending</StyledOptions>
                <StyledOptions value="original_title.asc">Title (A-Z)</StyledOptions>
                <StyledOptions value="original_title.desc">Title (Z-A)</StyledOptions>
              </StyledSelectionList>
            </StyledForm>
          )}
        </StyledSort>

      <FilterList>
        <StyledMenu>Filter </StyledMenu>
        <StyledImage
          src={Arrow}
          alt="Arrow Image"
        />
      </FilterList>
      <WhereToWatch>
        <StyledMenu>Where To Watch</StyledMenu>
        <StyledImage
          src={Arrow}
          alt="Arrow Image"
        />
      </WhereToWatch>
      {!buttonIsDisabled && (
        <StyledEnabledButton type="button" onClick={callSortSubmitHandler}>
          Search
        </StyledEnabledButton>
      )}
      {buttonIsDisabled && <StyledDisabledButton type="button">Search</StyledDisabledButton>}
    </StyledPopularMovies>
  );
};

MoviesFilter.propTypes = {
  sortingHandler: PropTypes.func.isRequired,
};
export default MoviesFilter;
