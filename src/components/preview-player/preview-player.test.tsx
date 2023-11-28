import { render, screen } from '@testing-library/react';
import PreviewPlayer from './preview-player.tsx';
import { makeFakeFilm } from '../../mocks/mock-data.ts';

describe('Component: PreviewPlayer', () => {
  it('should render correct', () => {
    const mockFilm = makeFakeFilm();
    const activeFilm = mockFilm.id;

    render(<PreviewPlayer film={mockFilm} activeFilm={activeFilm} />);

    expect(screen.getByTestId('preview-player')).toBeInTheDocument();
  });
});
