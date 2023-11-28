import { describe, expect } from 'vitest';
import { music } from 'faker';
import { render, screen } from '@testing-library/react';
import GenreItem from './genre-item.tsx';
import { withStore } from '../../mocks/mock-components.tsx';
import { makeFakeStore } from '../../mocks/mock-data.ts';
import userEvent from '@testing-library/user-event';

describe('Component: GenreItem', () => {
  it('should render correct', () => {
    const mockGenre = music.genre();
    const mockOnClick = vi.fn();
    const { withStoreComponent } = withStore(
      <GenreItem genre={mockGenre} isActiveGenre={false} onClick={mockOnClick} />,
      makeFakeStore()
    );
    render(withStoreComponent);

    expect(screen.getByText(mockGenre)).toBeInTheDocument();
  });

  it('should set active genre on click', async () => {
    const mockGenre = music.genre();
    const mockOnClick = vi.fn();
    const { withStoreComponent } = withStore(
      <GenreItem genre={mockGenre} onClick={mockOnClick} isActiveGenre />,
      makeFakeStore()
    );

    render(withStoreComponent);
    await userEvent.click(screen.getByRole('listitem'));

    expect(mockOnClick).toHaveBeenCalledWith(mockGenre);
    expect(mockOnClick).toBeCalledTimes(1);
    expect(screen.getByText(mockGenre)).toBeInTheDocument();
    expect(screen.getByRole('listitem')).toHaveClass('catalog__genres-item--active');
  });
});
