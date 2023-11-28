import { datatype, date, image, internet, lorem, music, name } from 'faker';
import { CommentType, FilmCardType, FilmType, PromoFilmType } from '../types.ts';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { filmsSliceProps, State, userSliceProps } from '../redux/types.ts';
import { createAPI } from '../services/api.ts';
import { Action } from 'redux';
import { ALL_GENRES, AuthorizationStatus, NameSpace } from '../const.ts';

const getRandomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>;

export const makeFakeFilm = () =>
  ({
    id: datatype.uuid(),
    name: name.firstName(),
    previewImage: image.imageUrl(),
    previewVideoLink: image.imageUrl(),
    genre: music.genre(),
  } as FilmType);

export const makeFakeFilmsList = () =>
  new Array(getRandomNumber(9, 12)).fill(null).map(() => makeFakeFilm());

export const makeFakePromoFilm = () =>
  ({
    id: datatype.uuid(),
    name: name.firstName(),
    posterImage: image.imageUrl(),
    backgroundImage: image.imageUrl(),
    videoLink: image.imageUrl(),
    genre: music.genre(),
    released: date.recent().getFullYear(),
    isFavorite: datatype.boolean(),
  } as PromoFilmType);

export const makeFakeFilmCard = () =>
  ({
    id: datatype.uuid(),
    name: name.firstName(),
    posterImage: image.imageUrl(),
    backgroundImage: image.imageUrl(),
    backgroundColor: internet.color(),
    videoLink: image.imageUrl(),
    description: lorem.sentence(30),
    rating: getRandomNumber(0, 10),
    scoresCount: getRandomNumber(0, 10000),
    director: name.lastName(),
    starring: new Array(getRandomNumber(2, 5)).fill(null).map(() => name.lastName()),
    runTime: getRandomNumber(70, 180),
    genre: music.genre(),
    released: date.recent().getFullYear(),
    isFavorite: datatype.boolean(),
  } as FilmCardType);

export const makeFakeComment = () =>
  ({
    id: datatype.uuid(),
    date: date.recent().toDateString(),
    user: name.firstName(),
    comment: lorem.text(),
    rating: getRandomNumber(0, 10),
  } as CommentType);

export const makeFakeComments = () =>
  new Array(getRandomNumber(1, 6)).fill(null).map(() => makeFakeComment());

export const makeFakeUser = () => ({
  name: name.firstName(),
  avatarUrl: image.imageUrl(),
  email: internet.email(),
  token: datatype.string(20),
});

export const makeFakeGenres = () =>
  [ALL_GENRES].concat(
    Array.from(new Set(new Array(getRandomNumber(1, 10)).fill(null).map(() => music.genre())))
  );

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  [NameSpace.User]: {
    authorizationStatus: AuthorizationStatus.NoAuth,
    userImage: internet.url(),
  } as userSliceProps,
  [NameSpace.Films]: {
    films: makeFakeFilmsList(),
    promoFilm: makeFakePromoFilm(),
    filmCard: makeFakeFilmCard(),
    moreLikeThis: makeFakeFilmsList(),
    comments: makeFakeComments(),
    myList: makeFakeFilmsList(),
    genres: makeFakeGenres(),
    activeGenre: ALL_GENRES,
    hasError: false,
    isDataLoading: false,
  } as filmsSliceProps,
  ...(initialState ?? {}),
});

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);
