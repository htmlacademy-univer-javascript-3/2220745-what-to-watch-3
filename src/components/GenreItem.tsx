import { useAppSelector } from '../redux/hooks.ts';
import { Genre } from '../types.ts';

type GenreItemProps = {
  genre: Genre;
  onClick: (genre: string) => void;
};

export default function GenreItem({ genre, onClick }: GenreItemProps) {
  const activeGenre = useAppSelector((state) => state.activeGenre);
  return (
    <li
      className={`catalog__genres-item ${
        genre === activeGenre ? 'catalog__genres-item--active' : ''
      }`}
      onClick={() => onClick(genre)}
    >
      <a className="catalog__genres-link" id={genre}>
        {genre}
      </a>
    </li>
  );
}
