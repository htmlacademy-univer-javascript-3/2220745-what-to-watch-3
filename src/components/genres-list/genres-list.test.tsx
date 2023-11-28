import { describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { withStore } from '../../mocks/mock-components.tsx';
import { makeFakeStore } from '../../mocks/mock-data.ts';
import GenresList from './genres-list.tsx';
import { NameSpace } from '../../const.ts';
import { filmsSliceProps } from '../../redux/types.ts';

describe('Component: GenreItem', () => {
  it('should render correct', () => {
    const { withStoreComponent, mockStore } = withStore(<GenresList />, makeFakeStore());
    const filmsSlice = mockStore.getState()[NameSpace.Films] as filmsSliceProps;

    render(withStoreComponent);

    expect(screen.getAllByRole('listitem')).toHaveLength(filmsSlice.genres.length);
  });
});
