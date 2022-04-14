import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import MoviesFilter from 'components/MoviesFilter/MoviesFilter';

describe('MoviesFilter', () => {
  test('selects options correctly', () => {
    render(<MoviesFilter onSort={() => {}} />);
    const options = screen.getAllByRole('option');

    fireEvent.change(screen.getByTitle('sort'), {
      target: { value: 'popularity.asc' },
    });

    expect(options[1].value).toBe('popularity.asc');
  });

  test('shows the clickable button', async () => {
    render(<MoviesFilter onSort={() => {}} />);

    const sortAndArrow = screen.getByTitle('sortAndArrow');
    fireEvent.click(sortAndArrow);

    await waitFor(
      () => expect(screen.queryByTitle('enabledButton')).toBeInTheDocument
    );
  });

  test('hides the non-clickable button', async () => {
    render(<MoviesFilter onSort={() => {}} />);

    const sortAndArrow = screen.getByTitle('sortAndArrow');
    fireEvent.click(sortAndArrow);

    await waitFor(
      () => expect(screen.queryByTitle('disabledButton')).not.toBeInTheDocument
    );
  });

  test('selection list is shown', async () => {
    render(<MoviesFilter onSort={() => {}} />);

    await waitFor(() => expect(screen.queryByTitle('sortForm').length).toBe(1));
  });

  test('selection list is not shown', async () => {
    render(<MoviesFilter onSort={() => {}} />);

    const sortAndArrow = screen.getByTitle('sortAndArrow');
    fireEvent.click(sortAndArrow);

    await waitFor(() => expect(screen.queryByTitle('sortForm')).toBeNull);
  });

  test('calls the sorting function', () => {
    const setStateMock = jest.fn();
    const useStateMock = (useState) => [useState, setStateMock];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);
    render(<MoviesFilter onSort={() => {}} />);

    const selectionList = screen.getByTitle('sort');
    fireEvent.change(selectionList);

    expect(setStateMock).toBeCalled();
    setStateMock.mockClear();
  });
});
