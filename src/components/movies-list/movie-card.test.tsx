import { render, screen } from '@testing-library/react';
import MovieCard from './movie-card.tsx';
import { makeFakeFilm } from '../../mocks/mock-data.ts';
import { withHistory } from '../../mocks/mock-components.tsx';

describe('Component: MovieCard', () => {
  it('should render correct', () => {
    const mockFilm = makeFakeFilm();
    const activeFilm = 'unknown';
    const onMouseOver = vi.fn();
    const onMouseOut = vi.fn();
    const componentWithHistory = withHistory(
      <MovieCard
        film={mockFilm}
        activeFilm={activeFilm}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      />
    );

    render(componentWithHistory);

    expect(screen.getByText(mockFilm.name)).toBeInTheDocument();
    expect(screen.getByTestId('preview-player')).toBeInTheDocument();
  });
});
