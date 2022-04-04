import React from 'react';
import useFetch from 'Services/Https';
import Layout from './components/Layout/Layout';

/**
 * * @return {JSX.element}
 */

function App() {
  const { movies, sortingHandler } = useFetch();

  return <Layout movies={movies} sortingHandler={sortingHandler} />;
}

export default App;
