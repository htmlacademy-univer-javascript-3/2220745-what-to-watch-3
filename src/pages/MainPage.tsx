import MoviesList from '../components/MoviesList.tsx';
import GenresList from '../components/GenresList.tsx';
import { useAppSelector } from '../redux/hooks.ts';
import ShowMoreButton from '../components/ShowMoreButton.tsx';
import PromoFilm from '../components/PromoFilm.tsx';
import Footer from '../components/Footer.tsx';

export default function MainPage() {
  const filmsCount = useAppSelector((state) => state.filmsCount);
  const films = useAppSelector((state) => state.films);

  return (
    <>
      <PromoFilm />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <MoviesList films={films} filmsCount={filmsCount} />
          {filmsCount < films.length && <ShowMoreButton />}
        </section>
        <Footer />
      </div>
    </>
  );
}
