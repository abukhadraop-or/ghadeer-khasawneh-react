import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header/Header';
import MainContent from 'components/MainContent/MainContent';
import Footer from 'components/Footer/Footer';
import PhoneHeader from 'components/PhoneHeader/PhoneHeader';
import PhoneHiddenList from 'components/PhoneHiddenList/PhoneHiddenList';

/**
 * Lists page elements.
 * * @return {JSX.element}
 */

function Layout({ movies, sortingHandler }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  /**
   * Handles hamburger menu list appearance and disappearance.
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
