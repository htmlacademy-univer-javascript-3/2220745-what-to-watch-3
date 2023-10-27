import { createReducer } from '@reduxjs/toolkit';
import {
  addShowedFilms,
  loadFilms,
  loadPromoFilm,
  setActiveGenre,
  requireAuthorization,
  setGenres,
  setUserImage,
  setError,
} from './action.ts';
import { AuthorizationStatus, SHOW_FILMS_COUNT } from '../const.ts';
import { FilmType, Genre, PromoFilmType } from '../types.ts';

type initialStateProps = {
  films: FilmType[];
  filmsByGenre: FilmType[];
  promoFilm: PromoFilmType | null;
  genres: Genre[];
  activeGenre: Genre;
  filmsCount: number;
  authorizationStatus: AuthorizationStatus;
  userImage: string;
  error: string | null;
};

const initialState: initialStateProps = {
  films: [],
  filmsByGenre: [],
  promoFilm: null,
  genres: [],
  activeGenre: 'All genres',
  filmsCount: SHOW_FILMS_COUNT,
  authorizationStatus: AuthorizationStatus.Unknown,
  userImage: '',
  error: null,
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
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setUserImage, (state, action) => {
      state.userImage = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export { reducer };
