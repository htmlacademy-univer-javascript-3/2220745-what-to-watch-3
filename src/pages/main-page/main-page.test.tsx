import { describe, expect } from 'vitest';
import { withHistory, withStore } from '../../mocks/mock-components.tsx';
import MainPage from './main-page.tsx';
import { makeFakeStore } from '../../mocks/mock-data.ts';
import { render, screen } from '@testing-library/react';
import { ALL_GENRES } from '../../const.ts';

describe('Page: Main', () => {
  it('should render correct', () => {
    const withHistoryComponent = withHistory(<MainPage />);
    const { withStoreComponent } = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('Show more')).toBeInTheDocument();
    expect(screen.getByText(/What to watch Ltd./i)).toBeInTheDocument();
    expect(screen.getByText(ALL_GENRES)).toBeInTheDocument();
  });
});
