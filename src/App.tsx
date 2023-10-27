import MainPage from './pages/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const.ts';
import SignIn from './pages/SignIn.tsx';
import Player from './pages/Player.tsx';
import MoviePage from './pages/MoviePage.tsx';
import AddReview from './pages/AddReview.tsx';
import NotFound from './pages/NotFound.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import MyList from './pages/MyList.tsx';
import { filmCard } from './mocks/filmCard.ts';
import { FilmType } from './types.ts';

type AppProps = {
  films: FilmType[];
};

export default function App({ films }: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
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
