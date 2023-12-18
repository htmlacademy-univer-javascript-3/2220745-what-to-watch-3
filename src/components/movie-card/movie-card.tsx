import { Link } from 'react-router-dom';
import PreviewPlayer from '../preview-player/preview-player.tsx';
import { FilmType } from '../../types.ts';
import { AppRoute } from '../../const.ts';

type MovieCardProps = {
  film: FilmType;
  activeFilm: string | null;
  onMouseOver: (id: string) => void;
  onMouseOut: () => void;
};

export default function MovieCard({ film, activeFilm, onMouseOver, onMouseOut }: MovieCardProps) {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => onMouseOver(film.id)}
      onMouseOut={() => onMouseOut()}
      data-testid={'movie'}
    >
      <Link className="small-film-card__link" to={AppRoute.Film(film.id)}>
        <div className="small-film-card__image">
          <PreviewPlayer film={film} activeFilm={activeFilm} />
        </div>
        <h3 className="small-film-card__title">{film.name}</h3>
      </Link>
    </article>
  );
}
