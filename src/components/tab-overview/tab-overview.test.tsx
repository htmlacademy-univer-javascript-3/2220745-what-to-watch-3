import { describe } from 'vitest';
import { makeFakeFilmCard } from '../../mocks/mock-data.ts';
import { render, screen } from '@testing-library/react';
import TabOverview from './tab-overview.tsx';

describe('Component: TabOverview', () => {
  it('should render correct', () => {
    const filmCard = makeFakeFilmCard();

    render(<TabOverview filmCard={filmCard} />);

    expect(screen.queryByText(`Director: ${filmCard.director}`)).toBeInTheDocument();
    expect(screen.queryByText(`${filmCard.scoresCount} ratings`)).toBeInTheDocument();
    expect(screen.queryByText(filmCard.description)).toBeInTheDocument();
  });
});
