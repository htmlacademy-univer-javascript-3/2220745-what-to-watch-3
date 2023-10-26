import { createReducer } from '@reduxjs/toolkit';
import {
  addShowedFilms,
  loadFilms,
  loadPromoFilm,
  setActiveGenre,
  setGenres,
} from './action.ts';
import { Film, Genre, PromoFilm, SHOW_FILMS_COUNT } from '../const.ts';

type initialStateProps = {
  films: Film[];
  filmsByGenre: Film[];
  promoFilm: PromoFilm | null;
  genres: Genre[];
  activeGenre: Genre;
  filmsCount: number;
};

const initialState: initialStateProps = {
  films: [],
  filmsByGenre: [],
  promoFilm: null,
  genres: [],
  activeGenre: 'All genres',
  filmsCount: SHOW_FILMS_COUNT,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;

      if (state.activeGenre === 'All genres') {
        state.filmsByGenre = state.films;
      } else {
        state.filmsByGenre = state.films.filter(
          (film) => film.genre === state.activeGenre
        );
      }
      state.filmsCount =
        state.filmsByGenre.length > SHOW_FILMS_COUNT
          ? SHOW_FILMS_COUNT
          : state.filmsByGenre.length;
    })
    .addCase(setGenres, (state, action) => {
      state.genres = action.payload;
    })
    .addCase(addShowedFilms, (state) => {
      state.filmsCount =
        state.filmsByGenre.length > state.filmsCount + SHOW_FILMS_COUNT
          ? state.filmsCount + SHOW_FILMS_COUNT
          : state.filmsByGenre.length;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
      state.filmsByGenre = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    });
});

export { reducer };
