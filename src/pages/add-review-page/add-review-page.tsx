import { Link, useParams } from 'react-router-dom';
import ReviewForm from '../../components/review-form/review-form.tsx';
import Logo from '../../components/logo/logo.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { fetchFilmDataAction } from '../../redux/api-actions.ts';
import { useEffect } from 'react';
import { getFilmCard } from '../../redux/films-slice/selectors.ts';

export default function AddReviewPage() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const filmCard = useAppSelector(getFilmCard);

  useEffect(() => {
    if (id && id !== filmCard?.id) {
      dispatch(fetchFilmDataAction(id));
    }
  }, [id]);

  if (!filmCard) {
    return null;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={filmCard.backgroundImage} alt={filmCard.name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/film/${filmCard.id}`} className="breadcrumbs__link">
                  {filmCard.name}
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
            src={filmCard.posterImage}
            alt={filmCard.name}
            width="218"
            height="327"
          />
        </div>
      </div>
      <ReviewForm id={filmCard.id} />
    </section>
  );
}
