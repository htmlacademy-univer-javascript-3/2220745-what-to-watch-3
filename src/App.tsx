import MainPage, { MainPageProps } from './pages/MainPage.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from './const.ts';
import SignIn from './pages/SignIn.tsx';
import Player from './pages/Player.tsx';
import Movie from './pages/Movie.tsx';
import AddReview from './pages/AddReview.tsx';
import NotFound from './pages/NotFound.tsx';
import PrivateRoute from './components/PrivateRoute.tsx';
import MyList from './pages/MyList.tsx';
//
export default function App({ title, genre, date }: MainPageProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainPage title={title} genre={genre} date={date} />}
        />
        <Route path={AppRoute.SignIn} element={<SignIn />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <MyList />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<Player />} />
        <Route path={AppRoute.Film} element={<Movie />} />
        <Route path={AppRoute.AddReview} element={<AddReview />} />
        <Route path={AppRoute.NotFound} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
