import MainPage from './pages/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus, Film, PromoFilm } from './const.ts';
import SignIn from './pages/SignIn.tsx';
import Player from './pages/Player.tsx';
import MoviePage from './pages/MoviePage.tsx';
import AddReview from './pages/AddReview.tsx';
import NotFound from './pages/NotFound.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import MyList from './pages/MyList.tsx';
import { filmCard } from './mocks/filmCard.ts';

type AppProps = {
  films: Film[];
  promoFilm: PromoFilm;
};

export default function App({ films, promoFilm }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage promoFilm={promoFilm} />}
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
              <MyList films={films} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player film={filmCard} />} />
        <Route
          path={AppRoute.Film}
          element={
            <MoviePage
              filmCard={filmCard}
              authorizationStatus={AuthorizationStatus.Auth}
            />
          }
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReview film={filmCard} />}
        />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
