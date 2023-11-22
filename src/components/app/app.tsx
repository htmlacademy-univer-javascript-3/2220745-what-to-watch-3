import MainPage from '../../pages/main-page/main-page.tsx';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const.ts';
import SignInPage from '../../pages/sign-in-page/sign-in-page.tsx';
import PlayerPage from '../../pages/player-page/player-page.tsx';
import MoviePage from '../../pages/movie-page/movie-page.tsx';
import AddReviewPage from '../../pages/add-review-page/add-review-page.tsx';
import NotFoundPage from '../../pages/not-found-page/not-found-page.tsx';
import PrivateRoute from '../private-route/private-route.tsx';
import MyListPage from '../../pages/my-list-page/my-list-page.tsx';
import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { getIsDataLoading } from '../../redux/films-slice/selectors.ts';
import Spinner from '../spinner/spinner.tsx';
import { useEffect } from 'react';
import { getAuthorized } from '../../redux/user-slice/selectors.ts';
import { fetchMyListAction } from '../../redux/api-actions.ts';
import { HelmetProvider } from 'react-helmet-async';

export default function App() {
  const isDataLoading = useAppSelector(getIsDataLoading);
  const dispatch = useAppDispatch();
  const authorized = useAppSelector(getAuthorized);

  useEffect(() => {
    if (authorized) {
      dispatch(fetchMyListAction());
    }
  }, [authorized, dispatch]);

  if (isDataLoading) {
    return <Spinner />;
  }

  return (
    <HelmetProvider>
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
        <Route
          path={AppRoute.AddReview}
          element={
            <PrivateRoute>
              <AddReviewPage />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
      </Routes>
    </HelmetProvider>
  );
}
