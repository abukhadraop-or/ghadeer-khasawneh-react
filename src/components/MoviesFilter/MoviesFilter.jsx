import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyledPopularMovies,
  StyledMenu,
  StyledTitle,
  StyledEnabledButton,
  StyledDisabledButton,
} from 'components/MoviesFilter/movies-filter-styles';
import {
  StyledSort,
  FilterList,
  WhereToWatch,
  StyledForm,
  StyledLabel,
  StyledSelectionList,
  StyledImage,
  StyledOptions,
} from 'components/MoviesFilter/sort-styles';
import Arrow from 'Assets/Arrow.svg';

/**
 * Lists filter and sort sections.
 *
 *  @param {Opject} props
 *  @param {function} props.sorts sorts the data.
 * * @return {JSX.element}
 */

function MoviesFilter({ sortingHandler }) {
  const [dropDownList, setDropDownList] = useState(true);
  const [selectedValue, setSelectedValue] = useState(true);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  /**
   * Handle onClick event.
   * Shows selection drop down list.
   *
   * @param {React.SyntheticEvent} event Event data.
   */

  const dropDownListHandler = () => {
    setDropDownList(!dropDownList);
  };
  /**
   * Handle onChange event.
   * Shows submit button.
   *
   * @param {React.SyntheticEvent} event Event data.
   */
  const sortSubmitHandler = (event) => {
    setSelectedValue(event.target.value);
    setButtonIsDisabled(false);
  };
  /**
   * Handle onChange event.
   * Shows disabled button.
   *
   * @param {React.SyntheticEvent} event Event data.
   */

  const callSortSubmitHandler = () => {
    sortingHandler(selectedValue);
    setButtonIsDisabled(true);
  };

  return (
    <StyledPopularMovies>
      <StyledTitle>Popular Movies</StyledTitle>
      <StyledSort listIsShown={dropDownList}>
        <div onClick={dropDownListHandler} aria-hidden="true">
          Sort
        </div>
        {dropDownList && (
          <StyledForm>
            <StyledLabel>Sort Results By</StyledLabel>
            <StyledSelectionList name="sort" onChange={sortSubmitHandler}>
              <StyledOptions value="popularity.desc">
                Popularity Descending
              </StyledOptions>
              <StyledOptions value="popularity.asc">
                Popularity Ascending
              </StyledOptions>
              <StyledOptions value="vote_average.desc">
                Rating Descending
              </StyledOptions>
              <StyledOptions value="vote_average.asc">
                Rating Ascending
              </StyledOptions>
              <StyledOptions value="release_date.desc">
                Release Date Descending
              </StyledOptions>
              <StyledOptions value="release_date.asc">
                Release Date Ascending
              </StyledOptions>
              <StyledOptions value="original_title.asc">
                Title (A-Z)
              </StyledOptions>
              <StyledOptions value="original_title.desc">
                Title (Z-A)
              </StyledOptions>
            </StyledSelectionList>
          </StyledForm>
        )}
      </StyledSort>

      <FilterList>
        <StyledMenu>Filter </StyledMenu>
        <StyledImage src={Arrow} alt="Arrow Image" />
      </FilterList>
      <WhereToWatch>
        <StyledMenu>Where To Watch</StyledMenu>
        <StyledImage src={Arrow} alt="Arrow Image" />
      </WhereToWatch>
      {!buttonIsDisabled && (
        <StyledEnabledButton type="button" onClick={callSortSubmitHandler}>
          Search
        </StyledEnabledButton>
      )}
      {buttonIsDisabled && (
        <StyledDisabledButton type="button">Search</StyledDisabledButton>
      )}
    </StyledPopularMovies>
  );
}

MoviesFilter.propTypes = {
  sortingHandler: PropTypes.func.isRequired,
};
export default MoviesFilter;
