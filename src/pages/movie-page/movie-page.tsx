import {
  AppRoute,
  AuthorizationStatus,
  MORE_LIKE_FILMS_COUNT,
} from '../../const.ts';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Tabs from '../../components/tabs/tabs.tsx';
import MoviesList from '../../components/movies-list/movies-list.tsx';
import Logo from '../../components/logo/logo.tsx';
import Footer from '../../components/footer/footer.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import Spinner from '../../components/spinner/spinner.tsx';
import { useEffect } from 'react';
import {
  fetchComments,
  fetchFilmAction,
  fetchMoreLikeThis,
} from '../../redux/api-actions.ts';
import AddToMyListButton from '../../components/add-to-my-list-button/add-to-my-list-button.tsx';
import RemoveToMyListButton from '../../components/remove-from-my-list-button/remove-from-my-list-button.tsx';

export default function MoviePage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const error = useAppSelector((state) => state.error);
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const filmCard = useAppSelector((state) => state.filmCard);
  const moreLikeThis = useAppSelector((state) => state.moreLikeThis);
  const myList = useAppSelector((state) => state.myList);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction(id));
      dispatch(fetchMoreLikeThis(id));
      dispatch(fetchComments(id));
    }
  }, [id]);

  if (error || !id) {
    navigate(AppRoute.NotFound);
  }

  if (!filmCard || filmCard.id !== id) {
    return <Spinner />;
  }

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
                {myList.findIndex((film) => film.id === filmCard.id) === -1 ? (
                  <AddToMyListButton filmId={filmCard.id} />
                ) : (
                  <RemoveToMyListButton filmId={filmCard.id} />
                )}
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
        {moreLikeThis.length !== 0 && (
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MoviesList
              films={moreLikeThis}
              filmsCount={MORE_LIKE_FILMS_COUNT}
            />
          </section>
        )}

        <Footer />
      </div>
    </>
  );
}
