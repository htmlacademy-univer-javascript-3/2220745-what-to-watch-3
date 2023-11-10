import MoviesList from '../../components/movies-list/movies-list.tsx';
import Logo from '../../components/logo/logo.tsx';
import Footer from '../../components/footer/footer.tsx';
import UserBlock from '../../components/user-block/user-block.tsx';
import { useAppSelector } from '../../redux/hooks.ts';
import { getMyList } from '../../redux/films-slice/selectors.ts';

export default function MyListPage() {
  const films = useAppSelector(getMyList);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{films.length}</span>
        </h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList films={films} />
      </section>

      <Footer />
    </div>
  );
}
