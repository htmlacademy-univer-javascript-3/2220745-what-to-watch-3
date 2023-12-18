import { Genre } from '../../types.ts';
import cn from 'classnames';

type GenreItemProps = {
  genre: Genre;
  isActiveGenre: boolean;
  onClick: (genre: Genre) => void;
};

export default function GenreItem({ genre, isActiveGenre, onClick }: GenreItemProps) {
  return (
    <li
      className={cn('catalog__genres-item', isActiveGenre && 'catalog__genres-item--active')}
      onClick={() => onClick(genre)}
    >
      <a className="catalog__genres-link" id={genre}>
        {genre}
      </a>
    </li>
  );
}
