import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { Genre } from '../../types.ts';
import { setActiveGenre } from '../../redux/action.ts';

type GenreItemProps = {
  genre: Genre;
};

export default function GenreItem({ genre }: GenreItemProps) {
  const activeGenre = useAppSelector((state) => state.activeGenre);
  const dispatch = useAppDispatch();

  const handleGenreClick = () => {
    dispatch(setActiveGenre(genre));
  };

  return (
    <li
      className={`catalog__genres-item ${
        genre === activeGenre ? 'catalog__genres-item--active' : ''
      }`}
      onClick={handleGenreClick}
    >
      <a className="catalog__genres-link" id={genre}>
        {genre}
      </a>
    </li>
  );
}
