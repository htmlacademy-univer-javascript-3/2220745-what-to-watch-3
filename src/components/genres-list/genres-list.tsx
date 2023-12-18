import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import GenreItem from './genre-item.tsx';
import { getActiveGenre, getGenres } from '../../redux/films-slice/selectors.ts';
import { setActiveGenre } from '../../redux/films-slice/films-slice.ts';
import { Genre } from '../../types.ts';

type GenresListProps = {
  onChange: () => void;
};

export default function GenresList({ onChange }: GenresListProps) {
  const genres = useAppSelector(getGenres);
  const activeGenre = useAppSelector(getActiveGenre);
  const dispatch = useAppDispatch();

  const handleGenreClick = (genre: Genre) => {
    dispatch(setActiveGenre(genre));
    onChange();
  };

  return (
    <ul className="catalog__genres-list">
      {Array.from(genres).map((genre) => (
        <GenreItem
          genre={genre}
          isActiveGenre={genre === activeGenre}
          onClick={handleGenreClick}
          key={genre}
        />
      ))}
    </ul>
  );
}
