import { useAppDispatch, useAppSelector } from '../redux/hooks.ts';
import { setActiveGenre, setGenres } from '../redux/action.ts';
import GenreItem from './GenreItem.tsx';
import { useEffect } from 'react';
import { Genre } from '../types.ts';

export default function GenresList() {
  const genres = useAppSelector((state) => state.genres);
  const films = useAppSelector((state) => state.films);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const newGenres = new Set<Genre>(['All genres']);
    films.forEach((film) => newGenres.add(film.genre));
    dispatch(setGenres(Array.from(newGenres).slice(0, 9)));
  }, [films]);

  const handleGenreClick = (genre: string) => {
    dispatch(setActiveGenre(genre));
  };

  return (
    <ul className="catalog__genres-list">
      {Array.from(genres)
        .slice(0, 9)
        .map((genre) => (
          <GenreItem genre={genre} onClick={handleGenreClick} key={genre} />
        ))}
    </ul>
  );
}
