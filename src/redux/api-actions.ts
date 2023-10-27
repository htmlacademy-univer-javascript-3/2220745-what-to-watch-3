import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types.ts';
import { AxiosError, AxiosInstance } from 'axios';
import { ApiRoute, AuthorizationStatus } from '../const.ts';
import {
  loadFilms,
  loadPromoFilm,
  requireAuthorization,
  setError,
  setUserImage,
} from './action.ts';
import { UserFormValues } from '../pages/SignIn.tsx';
import { AuthInfo, FilmType, PromoFilmType } from '../types.ts';

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  await api
    .get<FilmType[]>(ApiRoute.Films())
    .then((res) => dispatch(loadFilms(res.data)))
    .catch((err: AxiosError) => dispatch(setError(err.message)));
});

export const fetchPromoFilmAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromoFilm', async (_arg, { dispatch, extra: api }) => {
  await api
    .get<PromoFilmType>(ApiRoute.Promo())
    .then((res) => dispatch(loadPromoFilm(res.data)))
    .catch((err: AxiosError) => dispatch(setError(err.message)));
});

export const login = createAsyncThunk<
  void,
  UserFormValues,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchPromoFilm', async (form, { dispatch, extra: api }) => {
  await api
    .post<UserFormValues, { data: AuthInfo }>(ApiRoute.Login(), form)
    .then((res) => res.data)
    .then((data) => {
      dispatch(
        requireAuthorization(
          data ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth
        )
      );
      dispatch(setUserImage(data.avatarUrl));
    })
    .catch((err: AxiosError) => dispatch(setError(err.message)));
});
