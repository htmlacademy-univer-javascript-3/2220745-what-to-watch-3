import { createReducer } from '@reduxjs/toolkit';
import {
  addComment,
  changeToViewStatus,
  loadComments,
  loadFilm,
  loadFilms,
  loadMoreLikeThis,
  loadMyList,
  loadPromoFilm,
  requireAuthorization,
  setActiveGenre,
  setError,
  setGenres,
  setUserImage,
} from './action.ts';
import { ALL_GENRES, AuthorizationStatus, FilmStatus } from '../const.ts';
import {
  CommentType,
  FilmCardType,
  FilmType,
  Genre,
  PromoFilmType,
} from '../types.ts';

type initialStateProps = {
  films: FilmType[];
  filmCard: FilmCardType | null;
  moreLikeThis: FilmType[];
  comments: CommentType[];
  myList: FilmType[];
  promoFilm: PromoFilmType | null;
  genres: Genre[];
  activeGenre: Genre;
  authorizationStatus: AuthorizationStatus;
  userImage: string;
  error: string | null;
};

const initialState: initialStateProps = {
  films: [],
  filmCard: null,
  moreLikeThis: [],
  comments: [],
  myList: [],
  promoFilm: null,
  genres: [],
  activeGenre: ALL_GENRES,
  authorizationStatus: AuthorizationStatus.Unknown,
  userImage: '',
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(setGenres, (state, action) => {
      state.genres = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.filmCard = action.payload;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload;
    })
    .addCase(loadMoreLikeThis, (state, action) => {
      state.moreLikeThis = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(addComment, (state, action) => {
      state.comments = [...state.comments, action.payload];
    })
    .addCase(loadMyList, (state, action) => {
      state.myList = action.payload;
    })
    .addCase(changeToViewStatus, (state, action) => {
      if (action.payload.filmStatus === FilmStatus.ToView) {
        const addedFilm = state.films.find(
          (film) => film.id === action.payload.id
        );
        if (addedFilm) {
          state.myList = [...state.myList, addedFilm];
        }
      } else {
        const index = state.myList.findIndex(
          (film) => film.id === action.payload.id
        );
        if (index) {
          state.myList = [
            ...state.myList.slice(0, index),
            ...state.myList.slice(index + 1, state.myList.length),
          ];
        }
      }
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
