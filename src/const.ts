import { Genre } from './types.ts';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = '*',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum TabType {
  Overview = 'Overview',
  Details = 'Details',
  Reviews = 'Reviews',
}

export enum Grade {
  Bad = 'Bad',
  Normal = 'Normal',
  Good = 'Good',
  VeryGood = 'Very good',
  Awesome = 'Awesome',
}

export enum FilmStatus {
  Vied = 0,
  ToView = 1,
}

export const ApiRoute = {
  Films: () => '/films',
  Film: (filmId: string) => `/films/${filmId}`,
  Similar: (filmId: string) => `/films/${filmId}/similar`,
  Promo: () => '/promo',
  Favorite: () => '/favorite',
  SetFilmStatus: (filmId: string, status: FilmStatus) => `/favorite/${filmId}/${status}`,
  Comments: (filmId: string) => `/comments/${filmId}`,
  Login: () => '/login',
  Logout: () => '/logout',
};

export enum NameSpace {
  Films = 'Films',
  User = 'User',
}

export const SHOW_FILMS_COUNT = 8;
export const MORE_LIKE_FILMS_COUNT = 4;
export const ALL_GENRES: Genre = 'All genres';
export const MAX_GENRES_COUNT = 9;
export const SHOW_INTRO_DELAY = 1000;
export const CommentLength = {
  MIN: 50,
  MAX: 400,
};
