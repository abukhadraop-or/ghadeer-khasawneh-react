import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HiddenList, {
  Item,
  OpeningText,
  Menu,
} from 'components/PhoneHiddenList/phone-hidden-list-styles';

/**
 * Shows and hides phone's header list.
 *
 *  @param {Object} props Props object.
 *  @param {function} props.onToggle Handles opening and closing the hamburger menu.
 *
 *  @return {JSX.Element}
 */
function PhoneHiddenList({ onToggle }) {
  const [toggleItem, setToggleItem] = useState(false);
  const [toggleShows, setToggleShows] = useState(false);
  const [togglePeopleMenu, setTogglePeopleMenu] = useState(false);

  /**
   * Handles showing items menu.
   */
  const toggleMoviesMenuHandler = () => setToggleItem(!toggleItem);

  /**
   * Handles showing shows menu.
   */
  const toggleShowsHandler = () => setToggleShows(!toggleShows);

  /**
   * Handles showing people's menu.
   */
  const togglePeopleMenuHandler = () => setTogglePeopleMenu(!togglePeopleMenu);

  return (
    <HiddenList isShown={onToggle}>
      <OpeningText onClick={toggleMoviesMenuHandler}>Movies</OpeningText>
      {toggleItem && (
        <Menu>
          <div>Popular</div>
          <div>Top Rated</div>
          <div>Upcoming</div>
          <div>Now Playing</div>
        </Menu>
      )}
      <OpeningText onClick={toggleShowsHandler}>TV Shows</OpeningText>
      {toggleShows && (
        <Menu>
          <div>Popular</div>
          <div>Top Rated</div>
          <div>On TV</div>
          <div>Airing Today</div>
        </Menu>
      )}
      <OpeningText onClick={togglePeopleMenuHandler}>People</OpeningText>
      {togglePeopleMenu && (
        <Menu>
          <div>Popular People</div>
        </Menu>
      )}
      <Item>Contribution Bible</Item>
      <Item>Apps</Item>
      <Item>Discussions</Item>
      <Item>Contribute</Item>
      <Item>API</Item>
      <Item>Support</Item>
      <Item>About</Item>
      <Item>Login</Item>
    </HiddenList>
  );
}

PhoneHiddenList.propTypes = {
  onToggle: PropTypes.bool.isRequired,
};

export default PhoneHiddenList;
