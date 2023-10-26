import {
  AuthorizationStatus,
  FilmCard,
  MORE_LIKE_FILMS_COUNT,
} from '../const.ts';
import { Link } from 'react-router-dom';
import Tabs from '../components/Tabs.tsx';
import { films } from '../mocks/films.ts';
import MoviesList from '../components/MoviesList.tsx';
import Logo from '../components/Logo.tsx';
import Footer from '../components/Footer.tsx';
import UserBlock from '../components/UserBlock.tsx';

type MoviePageProps = {
  filmCard: FilmCard;
  authorizationStatus: AuthorizationStatus;
};

export default function MoviePage({
  filmCard,
  authorizationStatus,
}: MoviePageProps) {
  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={filmCard.backgroundImage} alt={filmCard.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{filmCard.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{filmCard.genre}</span>
                <span className="film-card__year">{filmCard.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link
                  to={`/player/${filmCard.id}`}
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                {authorizationStatus === AuthorizationStatus.Auth && (
                  <Link to={'review'} className="btn film-card__button">
                    Add review
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={filmCard.posterImage}
                alt={filmCard.name}
                width="218"
                height="327"
              />
            </div>

            <Tabs filmCard={filmCard} />
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList films={films} filmsCount={MORE_LIKE_FILMS_COUNT} />
        </section>

        <Footer />
      </div>
    </>
  );
}