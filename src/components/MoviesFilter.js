import React from "react";
import {
  StyledPopularMovies,
  StyledMenu,
} from "../styles/PopularMovies.Styled";
import {
  NewComp,
  DropDownList,
  FilterList,
  WhereToWatch,
} from "../styles/New.Styled";

import PropTypes from "prop-types";
import { useState } from "react";

const MoviesFilter = (props) => {
  const [dropDownList, setDropDownList] = useState(true);
  const [selectedValue, setSelectedValue] = useState(true);
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

  /**
   * Handles openning and closing drop down list
   *
   */

  function dropDownListHandler() {
    setDropDownList(!dropDownList);
  }
  /**
   * Takes value of selected filteration category and set it to a certain state
   * Shows the enabled submit button
   *
   */
  function sortSubmitHandler(event) {
    setSelectedValue(event.target.value);
    setButtonIsDisabled(false);
  }
  /**
   * Passes value of selected filteration category to fetching function
   * Shows the disabled submit button
   *
   */
  function callSortSubmitHandler() {
    props.sortingHandler(selectedValue);
    setButtonIsDisabled(true);
  }

  return (
    <StyledPopularMovies>
      <h1>Popular Movies</h1>

      <DropDownList>
        <NewComp listIsShown={dropDownList}>
          <div onClick={dropDownListHandler}>Sort</div>
          {dropDownList && (
            <form>
              <label>Sort Results By</label>
              <select name="sort" onChange={sortSubmitHandler}>
                <option value="popularity.desc">Popularity Descending</option>
                <option value="popularity.asc">Popularity Ascending</option>
                <option value="vote_average.desc">Rating Descending</option>
                <option value="vote_average.asc">Rating Ascending</option>
                <option value="release_date.desc">
                  Release Date Descending
                </option>
                <option value="release_date.asc">Release Date Ascending</option>
                <option value="original_title.asc">Title (A-Z)</option>
                <option value="original_title.desc">Title (Z-A)</option>
              </select>
            </form>
          )}
        </NewComp>
      </DropDownList>

      <FilterList>
        <StyledMenu>Filter </StyledMenu>
        <img
          src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg"
          alt=""
          width={"15px"}
        />
      </FilterList>
      <WhereToWatch>
        <StyledMenu>Where To Watch</StyledMenu>
        <img
          src="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-224-chevron-right-d1f88a6c15e68190c3b47e1ee4f39fe47f4b69f4966ca7c250c2e14cfa689a04.svg"
          alt=""
          width={"15px"}
        />
      </WhereToWatch>
      {!buttonIsDisabled && (
        <button className={"enabledButton"} onClick={callSortSubmitHandler}>
          Search
        </button>
      )}
      {buttonIsDisabled && <button className={"disabledButton"}>Search</button>}
    </StyledPopularMovies>
  );
};

MoviesFilter.propTypes = {
  movies: PropTypes.array,
  sortingHandler: PropTypes.func,
};
export default MoviesFilter;
