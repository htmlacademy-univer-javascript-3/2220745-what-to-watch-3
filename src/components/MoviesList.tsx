import { Film } from '../const.ts';
import MovieCard from './MovieCard.tsx';
import { useState } from 'react';

type MoviesListPops = {
  films: Film[];
};

export default function MoviesList({ films }: MoviesListPops) {
  const [, setActiveFilm] = useState<string | null>(null);

  const handleFilmFocus = (id: string | null) => {
    console.log('Focus');
    setActiveFilm(id);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <MovieCard film={film} setFunc={handleFilmFocus} key={film.id} />
      ))}
    </div>
  );
}
