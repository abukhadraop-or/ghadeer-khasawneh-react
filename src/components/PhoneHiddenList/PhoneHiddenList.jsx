import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HiddenList, {
  StyledItem,
  StyledOpenningText,
  StyledMenu,
} from 'components/PhoneHiddenList/phone-hidden-list-styles';

/**
 * Shows and hides drop down list..
 *
 *  @param {Opject} props Props.
 *  @param {function} props.sorts the data
 * * @return {JSX.element}
 */

function PhoneHiddenList({ onToggle }) {
  const [toggleItem, settoggleItem] = useState(false);
  const [toggleShows, settoggleShows] = useState(false);
  const [togglePeopleMenu, settogglePeopleMenu] = useState(false);

  /**
   * Handles showing items menu
   *
   * @param {React.SyntheticEvent} event Event data.
   */

  const toggleMoviesMenuHandler = () => {
    settoggleItem(!toggleItem);
  };

  /**
   * Handles showing shows menu
   *
   * @param {React.SyntheticEvent} event Event data.
   */

  const toggleShowsHandler = () => {
    settoggleShows(!toggleShows);
  };

  /**
   * Handles showing people's menu
   *
   * @param {React.SyntheticEvent} event Event data.
   */

  const togglePeopleMenuHandler = () => {
    settogglePeopleMenu(!togglePeopleMenu);
  };
  return (
    <HiddenList isShown={onToggle}>
      <StyledOpenningText onClick={toggleMoviesMenuHandler}>
        Movies
      </StyledOpenningText>
      {toggleItem && (
        <StyledMenu>
          <div>Popular</div>
          <div>Top Rated</div>
          <div>Upcoming</div>
          <div>Now Playing</div>
        </StyledMenu>
      )}
      <StyledOpenningText onClick={toggleShowsHandler}>
        TV Shows
      </StyledOpenningText>
      {toggleShows && (
        <StyledMenu>
          <div>Popular</div>
          <div>Top Rated</div>
          <div>On TV</div>
          <div>Airing Today</div>
        </StyledMenu>
      )}
      <StyledOpenningText onClick={togglePeopleMenuHandler}>
        People
      </StyledOpenningText>
      {togglePeopleMenu && (
        <StyledMenu>
          <div>Popular People</div>
        </StyledMenu>
      )}
      <StyledItem>Contribution Bible</StyledItem>
      <StyledItem>Apps</StyledItem>
      <StyledItem>Discusions</StyledItem>
      <StyledItem>Contribute</StyledItem>
      <StyledItem>API</StyledItem>
      <StyledItem>Support</StyledItem>
      <StyledItem>About</StyledItem>
      <StyledItem>Login</StyledItem>
    </HiddenList>
  );
}
PhoneHiddenList.propTypes = {
  onToggle: PropTypes.bool.isRequired,
};

export default PhoneHiddenList;
