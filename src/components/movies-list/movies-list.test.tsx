import { makeFakeFilmsList } from '../../mocks/mock-data.ts';
import { withHistory } from '../../mocks/mock-components.tsx';
import MoviesList from './movies-list.tsx';
import { render, screen } from '@testing-library/react';

describe('Component: MoviesList', () => {
  it('should render correct', () => {
    const mockFilms = makeFakeFilmsList();
    const filmsCount = 5;
    const componentWithHistory = withHistory(
      <MoviesList films={mockFilms} filmsCount={filmsCount} />
    );

    render(componentWithHistory);

    expect(screen.getByText(mockFilms[0].name)).toBeInTheDocument();
    expect(screen.getAllByTestId('movie')).toHaveLength(5);
  });
});
