import { Film } from '../const.ts';
import MovieCard from './MovieCard.tsx';
import { useState } from 'react';
import { TimeoutId } from '@reduxjs/toolkit/dist/query/core/buildMiddleware/types';

type MoviesListPops = {
  films: Film[];
};

export default function MoviesList({ films }: MoviesListPops) {
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
      {films.map((film) => (
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
