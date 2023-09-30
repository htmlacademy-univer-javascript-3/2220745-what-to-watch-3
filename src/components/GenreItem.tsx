import { useAppSelector } from '../redux/hooks.ts';

type GenreItemProps = {
  genre: string;
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
