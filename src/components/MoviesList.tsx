import MovieCard from './MovieCard.tsx';
import { useState } from 'react';
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';
import { Film } from '../const.ts';

type MoviesListProps = {
  films: Film[];
  filmsCount: number;
};

export default function MoviesList({ films, filmsCount }: MoviesListProps) {
  const [activeFilm, setActiveFilm] = useState<string | null>(null);
  let timer: undefined | TimeoutId = undefined;
  const handleFilmFocus = (id: string) => {
    timer = setTimeout(() => {
      setActiveFilm(id);
    }, 1000);
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
