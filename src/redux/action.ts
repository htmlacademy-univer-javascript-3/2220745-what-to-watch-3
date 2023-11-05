import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus, FilmStatus } from '../const.ts';
import {
  CommentType,
  FilmCardType,
  FilmType,
  Genre,
  PromoFilmType,
} from '../types.ts';

export const setActiveGenre = createAction<Genre>('genre/setActiveGenre');
export const setGenres = createAction<Genre[]>('genre/setGenres');
export const loadFilms = createAction<FilmType[]>('films/loadFilms');
export const loadPromoFilm = createAction<PromoFilmType>('films/loadPromoFilm');
export const loadFilm = createAction<FilmCardType | null>('films/loadFilm');
export const loadComments = createAction<CommentType[]>('films/loadComments');
export const loadMyList = createAction<FilmType[]>('films/loadMyList');
export const changeToViewStatus = createAction<{
  id: string;
  filmStatus: FilmStatus;
}>('films/changeToViewStatus');
export const addComment = createAction<CommentType>('films/sendComment');
export const loadMoreLikeThis = createAction<FilmType[]>(
  'films/loadMoreLikeThis'
);
export const requireAuthorization = createAction<AuthorizationStatus>(
  'user/requireAuthorization'
);
export const setUserImage = createAction<string>('user/image');
export const setError = createAction<string | null>('films/error');
