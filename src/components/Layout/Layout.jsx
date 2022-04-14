import React, { useState, useEffect } from 'react';
import Header from 'components/Header/Header';
import getMovies from 'services/get-movies';
import MainContent from 'components/MainContent/MainContent';
import Footer from 'components/Footer/Footer';
import PhoneHeader from 'components/PhoneHeader/PhoneHeader';
import PhoneHiddenList from 'components/PhoneHiddenList/PhoneHiddenList';

/**
 * Lists page elements.
 *
 * @return {JSX.Element}
 */
function Layout() {
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = useState('popularity.desc');
  const [toggleMenu, setToggleMenu] = useState(false);

  /**
   * Handles setting the data into the corresponding movies array.
   */
  useEffect(() => {
    (async () => {
      const response = await getMovies(sort);
      const transformedMovies = response.results.map((moviesData) => ({
        average: moviesData.vote_average,
        count: moviesData.vote_count,
        date: moviesData.release_date,
        image: moviesData.poster_path,
        overview: moviesData.overview,
        title: moviesData.original_title,
      }));
      setMovies(transformedMovies);
    })();
  });

  /**
   * Sets the value of the selected option as a value for the sort state.
   *
   * @param {string} value Value of selected option.
   */
  const sortingHandler = (value) => setSort(value);

  /**
   * Handles showing and hiding the Hamburger menu.
   */
  const toggleMenuHandler = () => setToggleMenu(!toggleMenu);

  return (
    <>
      <Header />
      <PhoneHeader onToggleHandler={toggleMenuHandler} />
      <PhoneHiddenList onToggle={toggleMenu} />
      <MainContent movies={movies} onSort={sortingHandler} />
      <Footer />
    </>
  );
}

export default Layout;
