import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MovieCard from 'components/MovieCard/MovieCard';

describe('MovieCard', () => {
  test('component should be rendered', () => {
    const { component } = render(
      <MovieCard
        title="Musician"
        date="monday"
        image="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg"
        overview="text"
        average="5"
      />
    );
    expect(component).not.toBeNull();
  });

  test('elements should exist in the page', () => {
    render(
      <MovieCard
        title="Musician"
        date="monday"
        image="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg"
        overview="text"
        average="5"
      />
    );

    const movieTitle = screen.getByText(/Musician/i);
    const movieDate = screen.getByText(/monday/i);
    const movieImage = screen.getByRole('img');
    const movieOverview = screen.getByText(/text/i);
    const movieAverage = screen.getByText(/5/i);

    expect(movieTitle).toBeInTheDocument;
    expect(movieDate).toBeInTheDocument;
    expect(movieImage).toBeInTheDocument;
    expect(movieOverview).toBeInTheDocument;
    expect(movieAverage).toBeInTheDocument;
  });

  test('drop down menu section is not shown', () => {
    render(
      <MovieCard
        title="Musician"
        date="monday"
        image="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg"
        overview="text"
        average="5"
      />
    );

    expect(screen.queryByTitle('dropDownList')).not.toBeInTheDocument;
  });

  test('drop down menu section is shown', async () => {
    render(
      <MovieCard
        title="Musician"
        date="monday"
        image="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg"
        overview="text"
        average="5"
      />
    );

   await waitFor(() => expect(screen.queryByTitle('dropDownList')).toBeNull);
  });

  test('shows the drop down menu', () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    render(
      <MovieCard
        title="Musician"
        date="monday"
        image="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg"
        overview="text"
        average="5"
      />
    );

    const ellipseImage = screen.getByTitle('ellipse');
    fireEvent.click(ellipseImage);

    expect(setStateMock).toBeCalled();
    setStateMock.mockClear();
  });

  test('hides the drop down menu', () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    render(
      <MovieCard
        title="Musician"
        date="monday"
        image="https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg"
        overview="text"
        average="5"
      />
    );

    const overlaySection = screen.getByTitle('ellipse');
    fireEvent.click(overlaySection);

    expect(setStateMock).toBeCalled();
    setStateMock.mockClear();
  });
});
