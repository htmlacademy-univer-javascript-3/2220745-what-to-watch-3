import { films } from '../mocks/films.ts';
import { createReducer } from '@reduxjs/toolkit';
import { filmsByGenre, setActiveGenre, setGenres } from './action.ts';
import { Film, Genre } from '../const.ts';

type initialStateProps = {
  films: Film[];
  genres: Genre[];
  activeGenre: Genre;
};

const initialState: initialStateProps = {
  films: films,
  genres: [],
  activeGenre: 'All genres',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(filmsByGenre, (state) => {
      if (state.activeGenre === 'All genres') {
        state.films = films;
      } else {
        state.films = films.filter((film) => film.genre === state.activeGenre);
      }
    })
    .addCase(setGenres, (state, action) => {
      state.genres = action.payload;
    });
});

export { reducer };
