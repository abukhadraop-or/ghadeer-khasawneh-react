import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import MainContent from 'components/MainContent/MainContent';
import Footer from 'components/Footer/Footer';
import PhoneHeader from 'components/PhoneHeader/PhoneHeader';
import PhoneHiddenList from 'components/PhoneHiddenList/PhoneHiddenList';

/**
 * Lists page elements.
 *
 *  @param {Opject} props
 *  @param {Array} props.movies contains movies data.
 *  @param {function} props.sorts sorts the data.
 * * @return {JSX.element}
 */

function Layout({ movies, sortingHandler }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  /**
   * Handles onClick event.
   * Handles showing and hiding the Hamburger menu 
   *
   * @param {React.SyntheticEvent} event Event data.
   */

  const toggleMenuHandler = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <Header />
      <PhoneHeader onToggleHandler={toggleMenuHandler} />
      <PhoneHiddenList onToggle={toggleMenu} />
      <MainContent movies={movies} sortingHandler={sortingHandler} />

      <Footer />
    </>
  );
}

Layout.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.objectOf).isRequired,
  sortingHandler: PropTypes.func.isRequired,
};

export default Layout;
