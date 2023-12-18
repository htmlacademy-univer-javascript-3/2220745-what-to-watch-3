import { Link } from 'react-router-dom';
import Logo from '../logo/logo.tsx';
import UserBlock from '../user-block/user-block.tsx';
import { PromoFilmType } from '../../types.ts';
import MyListButton from '../my-list-button/my-list-button.tsx';
import React from 'react';
import { useAppSelector } from '../../redux/hooks.ts';
import { getAuthorized } from '../../redux/user-slice/selectors.ts';
import { AppRoute } from '../../const.ts';

type PromoFilmProps = {
  promoFilm: PromoFilmType;
};

function PromoFilmComponent({ promoFilm }: PromoFilmProps) {
  const authorized = useAppSelector(getAuthorized);
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm.backgroundImage} alt={promoFilm.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header film-card__head">
        <Logo />
        <UserBlock />
      </header>

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm.genre}</span>
              <span className="film-card__year">{promoFilm.released}</span>
            </p>

            <div className="film-card__buttons">
              <Link
                to={AppRoute.Player(promoFilm.id)}
                className="btn btn--play film-card__button"
                type="button"
              >
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              {authorized && <MyListButton filmCard={promoFilm} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const PromoFilm = React.memo(PromoFilmComponent);
