import MainPage from './pages/main-page/main-page.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppRoute } from './const.ts';
import SignInPage from './pages/sign-in-page/sign-in-page.tsx';
import PlayerPage from './pages/player-page/player-page.tsx';
import MoviePage from './pages/movie-page/movie-page.tsx';
import AddReviewPage from './pages/add-review-page/add-review-page.tsx';
import NotFoundPage from './pages/not-found-page/not-found-page.tsx';
import PrivateRoute from './components/private-route/private-route.tsx';
import MyListPage from './pages/my-list-page/my-list-page.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainPage />} />
        <Route path={AppRoute.SignIn} element={<SignInPage />} />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute>
              <MyListPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Player} element={<PlayerPage />} />
        <Route path={AppRoute.Film} element={<MoviePage />} />
        <Route path={AppRoute.AddReview} element={<AddReviewPage />} />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
