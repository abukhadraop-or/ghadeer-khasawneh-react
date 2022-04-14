import React from 'react';
import PropTypes from 'prop-types';
import {
  PopularMovies,
  Title,
  EnabledButton,
  DisabledButton,
  FilterList,
  WhereToWatch,
  Image,
  Menu,
} from 'components/MoviesFilter/movies-filter-styles';
import {
  Sort,
  SortForm,
  SortLabel,
  SelectionList,
  SortOptions,
  SortAndArrow,
  ArrowImage,
} from 'components/MoviesFilter/sort-styles';
import Arrow from 'Assets/Arrow.svg';

/**
 * Lists filter and sort section.
 *
 *  @param {Object} props Props object.
 *  @param {function} props.onSort Sorts movies based on a certain condition.
 *  @return {JSX.Element}
 */
function MoviesFilter({ onSort }) {
  const [dropDownList, setDropDownList] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState(true);
  const [buttonIsDisabled, setButtonIsDisabled] = React.useState(true);

  /**
   * Shows selection drop down list.
   */
  const dropDownListHandler = () => setDropDownList(!dropDownList);

  /**
   * Handles onChange event.
   * Shows submit button.
   *
   * @param {React.SyntheticEvent} event Event data.
   */
  const sortSubmitHandler = (event) => {
    setSelectedValue(event.target.value);
    setButtonIsDisabled(false);
  };

  /**
   * Shows disabled button.
   */
  const callSortSubmitHandler = () => {
    onSort(selectedValue);
    setButtonIsDisabled(true);
  };

  return (
    <PopularMovies>
      <Title>Popular Movies</Title>
      <Sort listIsShown={dropDownList}>
        <SortAndArrow
          title="sortAndArrow"
          onClick={dropDownListHandler}
          aria-hidden="true"
        >
          Sort
          <ArrowImage
            src={Arrow}
            alt="Arrow Image"
            listIsShown={dropDownList}
          />
        </SortAndArrow>
        {dropDownList && (
          <SortForm title="sortForm">
            <SortLabel>Sort Results By</SortLabel>
            <SelectionList
              title="sort"
              name="sort"
              onChange={sortSubmitHandler}
            >
              <SortOptions value="popularity.desc">
                Popularity Descending
              </SortOptions>
              <SortOptions value="popularity.asc">
                Popularity Ascending
              </SortOptions>
              <SortOptions value="vote_average.desc">
                Rating Descending
              </SortOptions>
              <SortOptions value="vote_average.asc">
                Rating Ascending
              </SortOptions>
              <SortOptions value="release_date.desc">
                Release Date Descending
              </SortOptions>
              <SortOptions value="release_date.asc">
                Release Date Ascending
              </SortOptions>
              <SortOptions value="original_title.asc">Title (A-Z)</SortOptions>
              <SortOptions value="original_title.desc">Title (Z-A)</SortOptions>
            </SelectionList>
          </SortForm>
        )}
      </Sort>
      <FilterList>
        <Menu>Filter </Menu>
        <Image src={Arrow} alt="Arrow Image" />
      </FilterList>
      <WhereToWatch>
        <Menu>Where To Watch</Menu>
        <Image src={Arrow} alt="Arrow Image" />
      </WhereToWatch>
      {!buttonIsDisabled && (
        <EnabledButton
          title="enabledButton"
          type="button"
          onClick={callSortSubmitHandler}
        >
          Search
        </EnabledButton>
      )}
      {buttonIsDisabled && (
        <DisabledButton title="disabledButton" type="button">
          Search
        </DisabledButton>
      )}
    </PopularMovies>
  );
}

MoviesFilter.propTypes = {
  onSort: PropTypes.func.isRequired,
};

export default MoviesFilter;
