import MoviesList from '../components/MoviesList.tsx';
import GenresList from '../components/GenresList.tsx';
import { useAppSelector } from '../redux/hooks.ts';
import ShowMoreButton from '../components/ShowMoreButton.tsx';
import PromoFilm from '../components/PromoFilm.tsx';
import Footer from '../components/Footer.tsx';
import Spinner from '../components/Spinner/Spinner.tsx';

export default function MainPage() {
  const filmsCount = useAppSelector((state) => state.filmsCount);
  const films = useAppSelector((state) => state.filmsByGenre);
  const promoFilm = useAppSelector((state) => state.promoFilm);
  return (
    <>
      {promoFilm && <PromoFilm promoFilm={promoFilm} />}
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          {films.length !== 0 ? (
            <>
              <GenresList />
              <MoviesList films={films} filmsCount={filmsCount} />
            </>
          ) : (
            <Spinner />
          )}

          {filmsCount < films.length && <ShowMoreButton />}
        </section>
        <Footer />
      </div>
    </>
  );
}
