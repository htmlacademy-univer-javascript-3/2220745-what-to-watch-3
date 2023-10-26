import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types.ts';
import { AxiosInstance } from 'axios';
import { ApiRoute, Film, PromoFilm } from '../const.ts';
import { loadFilms, loadPromoFilm } from './action.ts';

export const fetchFilmsAction = createAsyncThunk<
  void,
  undefined,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('data/fetchFilms', async (_arg, { dispatch, extra: api }) => {
  const films = await api.get<Film[]>(ApiRoute.Films()).then((res) => res.data);
  dispatch(loadFilms(films));
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
  const film = await api
    .get<PromoFilm>(ApiRoute.Promo())
    .then((res) => res.data);
  dispatch(loadPromoFilm(film));
});
