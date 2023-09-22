import { Film } from '../const.ts';
import { Link } from 'react-router-dom';

type MovieCardProps = {
  film: Film;
  setFunc: (id: string | null) => void;
};

export default function MovieCard({ film, setFunc }: MovieCardProps) {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseOver={() => setFunc(film.id)}
      onMouseOut={() => setFunc(null)}
    >
      <div className="small-film-card__image">
        <img src={film.previewImage} alt={film.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`films/${film.id}`}>
          {film.name}
        </Link>
      </h3>
    </article>
  );
}
