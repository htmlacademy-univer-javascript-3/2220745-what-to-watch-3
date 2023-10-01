import MoviesList from '../components/MoviesList.tsx';
import { Film } from '../const.ts';
import Logo from '../components/Logo.tsx';
import Footer from '../components/Footer.tsx';
import UserBlock from '../components/UserBlock.tsx';

type MyListProps = {
  films: Film[];
};

export default function MyList({ films }: MyListProps) {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList films={films} filmsCount={8} />
      </section>

      <Footer />
    </div>
  );
}
