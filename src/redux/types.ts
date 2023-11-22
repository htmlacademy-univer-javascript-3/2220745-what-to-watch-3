import { store } from './store.ts';
import { AuthorizationStatus } from '../const.ts';
import { CommentType, FilmCardType, FilmType, Genre, ImageUrl, PromoFilmType } from '../types.ts';

export type userSliceProps = {
  authorizationStatus: AuthorizationStatus;
  userImage: ImageUrl;
};

export type filmsSliceProps = {
  films: FilmType[];
  promoFilm: PromoFilmType | null;
  filmCard: FilmCardType | null;
  moreLikeThis: FilmType[];
  comments: CommentType[];
  myList: FilmType[];
  genres: Genre[];
  activeGenre: Genre;
  hasError: boolean;
  isDataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
