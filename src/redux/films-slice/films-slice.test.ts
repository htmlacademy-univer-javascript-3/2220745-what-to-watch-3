import { describe, expect, it } from 'vitest';
import { filmsSliceProps } from '../types.ts';
import { ALL_GENRES } from '../../const.ts';
import { filmsSlice, setActiveGenre } from './films-slice.ts';
import { Genre } from '../../types.ts';

describe('FilmsSlice', () => {
  const baseState: filmsSliceProps = {
    hasError: false,
    isDataLoading: false,
    films: [],
    promoFilm: null,
    filmCard: null,
    moreLikeThis: [],
    comments: [],
    myList: [],
    genres: [],
    activeGenre: ALL_GENRES,
  };

  it('should return initial state with empty action', () => {
    const emptyAction = { type: '' };
    const result = filmsSlice.reducer(baseState, emptyAction);
    expect(result).toEqual(baseState);
  });

  it('should return default initial state with empty action and undefined state', () => {
    const emptyAction = { type: '' };
    const result = filmsSlice.reducer(undefined, emptyAction);
    expect(result).toEqual(baseState);
  });

  it('should set new active genre with "setActiveGenre" action', () => {
    const newGenre: Genre = 'new genre';
    const expectedState = { ...baseState, activeGenre: newGenre };
    const result = filmsSlice.reducer(undefined, setActiveGenre(newGenre));
    expect(result).toEqual(expectedState);
  });
});
