import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { setGenres } from '../../redux/action.ts';
import GenreItem from './genre-item.tsx';
import { useEffect } from 'react';
import { Genre } from '../../types.ts';
import { MAX_GENRES_COUNT } from '../../const.ts';

export default function GenresList() {
  const genres = useAppSelector((state) => state.genres);
  const films = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newGenres = new Set<Genre>(['All genres']);
    films.forEach((film) => newGenres.add(film.genre));
    dispatch(setGenres(Array.from(newGenres).slice(0, MAX_GENRES_COUNT)));
  }, [films]);

  return (
    <ul className="catalog__genres-list">
      {Array.from(genres).map((genre) => (
        <GenreItem genre={genre} key={genre} />
      ))}
    </ul>
  );
}
