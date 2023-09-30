import { useAppDispatch, useAppSelector } from '../redux/hooks.ts';
import { filmsByGenre, setActiveGenre, setGenres } from '../redux/action.ts';
import { Genre } from '../const.ts';
import GenreItem from './GenreItem.tsx';
import { useEffect } from 'react';

export default function GenresList() {
  const { films, genres } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const newGenres = new Set<Genre>(['All genres']);
    films.forEach((film) => newGenres.add(film.genre));
    dispatch(setGenres(Array.from(newGenres).slice(0, 9)));
  }, []);

  const handleGenreClick = (genre: string) => {
    dispatch(setActiveGenre(genre));
    dispatch(filmsByGenre());
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
