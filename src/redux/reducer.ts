import { films } from '../mocks/films.ts';
import { createReducer } from '@reduxjs/toolkit';
import {
  addShowedFilms,
  filmsByGenre,
  setActiveGenre,
  setGenres,
} from './action.ts';
import { Film, Genre, PromoFilm, SHOW_FILMS_COUNT } from '../const.ts';
import { promoFilm } from '../mocks/promoFilm.ts';

type initialStateProps = {
  films: Film[];
  promoFilm: PromoFilm;
  genres: Genre[];
  activeGenre: Genre;
  filmsCount: number;
};

const initialState: initialStateProps = {
  films: films,
  promoFilm: promoFilm,
  genres: [],
  activeGenre: 'All genres',
  filmsCount: SHOW_FILMS_COUNT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
      state.filmsCount = SHOW_FILMS_COUNT;
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
    })
    .addCase(addShowedFilms, (state) => {
      state.filmsCount +=
        state.films.length > state.filmsCount + SHOW_FILMS_COUNT
          ? state.filmsCount + SHOW_FILMS_COUNT
          : state.films.length;
    });
});

export { reducer };
