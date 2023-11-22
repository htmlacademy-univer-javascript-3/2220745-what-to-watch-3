import { State } from '../types.ts';
import { CommentType, FilmCardType, FilmType, Genre, PromoFilmType } from '../../types.ts';
import { NameSpace } from '../../const.ts';

export const getFilms = (state: Pick<State, NameSpace.Films>): FilmType[] =>
  state[NameSpace.Films].films;
export const getPromoFilm = (state: Pick<State, NameSpace.Films>): PromoFilmType | null =>
  state[NameSpace.Films].promoFilm;
export const getFilmCard = (state: Pick<State, NameSpace.Films>): FilmCardType | null =>
  state[NameSpace.Films].filmCard;
export const getMoreLikeThis = (state: Pick<State, NameSpace.Films>): FilmType[] =>
  state[NameSpace.Films].moreLikeThis;
export const getComments = (state: Pick<State, NameSpace.Films>): CommentType[] =>
  state[NameSpace.Films].comments;
export const getMyList = (state: Pick<State, NameSpace.Films>): FilmType[] =>
  state[NameSpace.Films].myList;

export const getGenres = (state: Pick<State, NameSpace.Films>): Genre[] =>
  state[NameSpace.Films].genres;
export const getActiveGenre = (state: Pick<State, NameSpace.Films>): Genre =>
  state[NameSpace.Films].activeGenre;
export const getIsDataLoading = (state: Pick<State, NameSpace.Films>): boolean =>
  state[NameSpace.Films].isDataLoading;
