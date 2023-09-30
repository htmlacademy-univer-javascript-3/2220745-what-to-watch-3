import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../const.ts';

export const setActiveGenre = createAction<Genre>('setActiveGenre');
export const setGenres = createAction<Genre[]>('setGenres');
export const filmsByGenre = createAction('filmsByGenre');
