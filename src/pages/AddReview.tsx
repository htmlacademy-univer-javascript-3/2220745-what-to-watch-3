import { Link } from 'react-router-dom';
import ReviewForm from '../components/ReviewForm.tsx';
import Logo from '../components/Logo.tsx';
import UserBlock from '../components/UserBlock.tsx';
import { FilmCardType } from '../types.ts';

type AddReviewProps = {
  film: FilmCardType;
};

export default function AddReview({ film }: AddReviewProps) {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/film/${film.id}`} className="breadcrumbs__link">
                  {film.name}
                </Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img
            src={film.posterImage}
            alt={film.name}
            width="218"
            height="327"
          />
        </div>
      </div>
      <ReviewForm />
    </section>
  );
}
