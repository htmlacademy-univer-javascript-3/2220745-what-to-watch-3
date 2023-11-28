import { describe } from 'vitest';
import { makeFakeStore } from '../../mocks/mock-data.ts';
import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components.tsx';
import TabReviews from './tab-reviews.tsx';
import { filmsSliceProps } from '../../redux/types.ts';
import { NameSpace } from '../../const.ts';

describe('Component: TabReviews', () => {
  it('should render correct', () => {
    const { withStoreComponent, mockStore } = withStore(<TabReviews />, makeFakeStore());
    const filmsSlice = mockStore.getState()[NameSpace.Films] as filmsSliceProps;
    render(withStoreComponent);

    expect(screen.getAllByTestId('review')).toHaveLength(filmsSlice.comments.length);
  });
});
