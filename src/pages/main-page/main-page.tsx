import MoviesList from '../../components/movies-list/movies-list.tsx';
import GenresList from '../../components/genres-list/genres-list.tsx';
import { useAppSelector } from '../../redux/hooks.ts';
import ShowMoreButton from '../../components/show-more-button/show-more-button.tsx';
import { PromoFilm } from '../../components/promo-film/promo-film.tsx';
import Footer from '../../components/footer/footer.tsx';
import Spinner from '../../components/spinner/spinner.tsx';
import { useState } from 'react';
import { SHOW_FILMS_COUNT } from '../../const.ts';
import { useFilmsByGenre } from '../../hooks/use-films-by-genre.ts';
import { getPromoFilm } from '../../redux/films-slice/selectors.ts';
import { Helmet } from 'react-helmet-async';

export default function MainPage() {
  const [filmsCount, setFilmsCount] = useState(SHOW_FILMS_COUNT);
  const films = useFilmsByGenre();
  const promoFilm = useAppSelector(getPromoFilm);

  const handleFilmsCountReset = () => {
    setFilmsCount(SHOW_FILMS_COUNT);
  };

  const handleShowMoreButtonClick = () =>
    setFilmsCount((prevState) => prevState + SHOW_FILMS_COUNT);

  return (
    <>
      <Helmet>
        <title>Главная</title>
      </Helmet>
      {promoFilm && <PromoFilm promoFilm={promoFilm} />}
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {films.length !== 0 ? (
            <>
              <GenresList onChange={handleFilmsCountReset} />
              <MoviesList films={films} filmsCount={filmsCount} />
            </>
          ) : (
            <Spinner />
          )}

          {filmsCount < films.length && <ShowMoreButton onClick={handleShowMoreButtonClick} />}
        </section>
        <Footer />
      </div>
    </>
  );
}
