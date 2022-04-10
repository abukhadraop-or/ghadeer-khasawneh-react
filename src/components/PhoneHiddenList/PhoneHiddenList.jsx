import React, { useState } from 'react';
import PropTypes from 'prop-types';
import HiddenList, {
  Item,
  OpenningText,
  Menu,
} from 'components/PhoneHiddenList/phone-hidden-list-styles';

/**
 * Shows and hides phone's header list.
 *
 *  @param {Object} props Props object.
 *  @param {function} props.onToggle Handles openning and closing the hamburger menu.
 *
 *  @return {JSX.Element}
 */
function PhoneHiddenList({ onToggle }) {
  const [toggleItem, settoggleItem] = useState(false);
  const [toggleShows, settoggleShows] = useState(false);
  const [togglePeopleMenu, settogglePeopleMenu] = useState(false);

  /**
   * Handles showing items menu.
   */
  const toggleMoviesMenuHandler = () => settoggleItem(!toggleItem);

  /**
   * Handles showing shows menu.
   */
  const toggleShowsHandler = () => settoggleShows(!toggleShows);

  /**
   * Handles showing people's menu.
   */
  const togglePeopleMenuHandler = () => settogglePeopleMenu(!togglePeopleMenu);

  return (
    <HiddenList isShown={onToggle}>
      <OpenningText onClick={toggleMoviesMenuHandler}>Movies</OpenningText>
      {toggleItem && (
        <Menu>
          <div>Popular</div>
          <div>Top Rated</div>
          <div>Upcoming</div>
          <div>Now Playing</div>
        </Menu>
      )}
      <OpenningText onClick={toggleShowsHandler}>TV Shows</OpenningText>
      {toggleShows && (
        <Menu>
          <div>Popular</div>
          <div>Top Rated</div>
          <div>On TV</div>
          <div>Airing Today</div>
        </Menu>
      )}
      <OpenningText onClick={togglePeopleMenuHandler}>People</OpenningText>
      {togglePeopleMenu && (
        <Menu>
          <div>Popular People</div>
        </Menu>
      )}
      <Item>Contribution Bible</Item>
      <Item>Apps</Item>
      <Item>Discusions</Item>
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
