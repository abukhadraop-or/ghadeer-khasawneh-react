import React from "react";
import Header from "./Header";
import MainContent from "./MainContent";
import PropTypes from "prop-types";
import Footer from "./Footer";
import { LayoutStyle } from "../styles/Layout.Styled";
import PhoneHeader from "./PhoneHeader";
import { useState } from "react";
import PhoneHiddenList from "./PhoneHiddenList";

const Layout = (props) => {
  const [toggleMenu, setToggleMenu] = useState(false);

  /**
   * Handles hamburger menu list appearence and disappearance
   *
   *
   *
   */

  function toggleMenuHandler() {
    setToggleMenu((toggleMenu) => !toggleMenu);
  }

  return (
    <LayoutStyle>
      <Header />
      <PhoneHeader onToggleHandler={toggleMenuHandler} />
      <PhoneHiddenList onToggle={toggleMenu} />
      <MainContent
        movies={props.movies}
        sortingHandler={props.sortingHandler}
      />

      <Footer />
    </LayoutStyle>
  );
};

Layout.propTypes = {
  movies: PropTypes.array,
  sortingHandler: PropTypes.func,
};

export default Layout;
