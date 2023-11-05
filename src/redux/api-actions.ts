import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types.ts';
import { AxiosError, AxiosInstance } from 'axios';
import { ApiRoute, AuthorizationStatus, FilmStatus } from '../const.ts';
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
  setError,
  setUserImage,
} from './action.ts';
import { UserFormValues } from '../pages/sign-in-page/sign-in-page.tsx';
import {
  AuthInfo,
  CommentType,
  FilmCardType,
  FilmType,
  PromoFilmType,
} from '../types.ts';
import { removeToken, saveToken } from '../services/token.ts';

export const login = createAsyncThunk<
  void,
  UserFormValues,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/login', async (form, { dispatch, extra: api }) => {
  await api
    .post<UserFormValues, { data: AuthInfo }>(ApiRoute.Login(), form)
    .then((res) => res.data)
    .then((data) => {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserImage(data.avatarUrl));
      saveToken(data.token);
    })
    .catch((err: AxiosError) => dispatch(setError(err.message)));
});

export const logout = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/logout', async (_arg, { dispatch, extra: api }) => {
  await api.delete(ApiRoute.Logout());
  removeToken();
  dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
});

export const checkAuthorization = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('user/checkAuthorization', async (_arg, { dispatch, extra: api }) => {
  await api
    .get<AuthInfo>(ApiRoute.Login())
    .then((res) => res.data)
    .then((data) => {
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(setUserImage(data.avatarUrl));
    })
    .catch(() => dispatch(requireAuthorization(AuthorizationStatus.NoAuth)));
});

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

export const fetchFilmAction = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilm', async (id, { dispatch, extra: api }) => {
  await api
    .get<FilmCardType>(ApiRoute.Film(id))
    .then((res) => dispatch(loadFilm(res.data)))
    .catch((err: AxiosError) => dispatch(setError(err.message)));
});

export const fetchMoreLikeThis = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchMoreLikeThis', async (id, { dispatch, extra: api }) => {
  await api
    .get<FilmType[]>(ApiRoute.Similar(id))
    .then((res) => dispatch(loadMoreLikeThis(res.data)))
    .catch((err: AxiosError) => dispatch(setError(err.message)));
});

export const fetchComments = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchComments', async (id, { dispatch, extra: api }) => {
  await api
    .get<CommentType[]>(ApiRoute.Comments(id))
    .then((res) => dispatch(loadComments(res.data)))
    .catch((err: AxiosError) => dispatch(setError(err.message)));
});

export const sendComment = createAsyncThunk<
  void,
  { id: string; rating: number; comment: string },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/fetchComments',
  async ({ id, rating, comment }, { dispatch, extra: api }) => {
    await api
      .post<CommentType>(ApiRoute.Comments(id), {
        rating: rating,
        comment: comment,
      })
      .then((res) => dispatch(addComment(res.data)))
      .catch((err: AxiosError) => {
        dispatch(setError(err.message));
      });
  }
);

export const fetchMyList = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchMyList', async (_arg, { dispatch, extra: api }) => {
  await api
    .get<FilmType[]>(ApiRoute.Favorite())
    .then((res) => dispatch(loadMyList(res.data)))
    .catch((err: AxiosError) => {
      dispatch(setError(err.message));
    });
});

export const setFilmStatus = createAsyncThunk<
  void,
  { id: string; filmStatus: FilmStatus },
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>(
  'data/setFilmStatus',
  async ({ id, filmStatus }, { dispatch, extra: api }) => {
    await api
      .post<PromoFilmType>(ApiRoute.SetFilmStatus(id, filmStatus))
      .then((res) =>
        dispatch(changeToViewStatus({ id: res.data.id, filmStatus }))
      )
      .catch((err: AxiosError) => {
        dispatch(setError(err.message));
      });
  }
);
