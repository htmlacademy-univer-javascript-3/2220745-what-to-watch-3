import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import { makeFakeFilmCard } from '../../mocks/mock-data.ts';
import TabDetails from './tab-details.tsx';

describe('Component: TabDetails', () => {
  it('should render correct', () => {
    const filmCard = makeFakeFilmCard();
    render(<TabDetails filmCard={filmCard} />);

    expect(screen.getByText(filmCard.director)).toBeInTheDocument();
    expect(screen.getByText('Run Time')).toBeInTheDocument();
    expect(screen.getByText(filmCard.genre)).toBeInTheDocument();
    expect(screen.getByText(filmCard.released)).toBeInTheDocument();
  });
});
