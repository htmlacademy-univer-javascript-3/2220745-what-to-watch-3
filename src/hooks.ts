import { useAppSelector } from './redux/hooks.ts';
import { ALL_GENRES } from './const.ts';

export const useFilmsByGenre = () =>
  useAppSelector((state) =>
    state.activeGenre === ALL_GENRES
      ? state.films
      : state.films.filter((film) => film.genre === state.activeGenre)
  );
