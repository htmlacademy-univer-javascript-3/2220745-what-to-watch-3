import MovieCard from './movie-card.tsx';
import { useState } from 'react';
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import { FilmType } from '../../types.ts';
import { SHOW_INTRO_DELAY } from '../../const.ts';

type MoviesListProps = {
  films: FilmType[];
  filmsCount: number | undefined;
};

export default function MoviesList({ films, filmsCount }: MoviesListProps) {
  const [activeFilm, setActiveFilm] = useState<string | null>(null);
  let timer: undefined | TimeoutId = undefined;
  const handleFilmFocus = (id: string) => {
    timer = setTimeout(() => {
      setActiveFilm(id);
    }, SHOW_INTRO_DELAY);
  };

  const handleFilmOut = () => {
    clearTimeout(timer);
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsCount).map((film) => (
        <MovieCard
          film={film}
          onMouseOver={handleFilmFocus}
          onMouseOut={handleFilmOut}
          activeFilm={activeFilm}
          key={film.id}
        />
      ))}
    </div>
  );
}
