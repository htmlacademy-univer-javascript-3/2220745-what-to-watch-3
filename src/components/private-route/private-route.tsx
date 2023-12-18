import { AppRoute } from '../../const.ts';
import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../../redux/hooks.ts';
import { getAuthorized } from '../../redux/user-slice/selectors.ts';

type PrivateRouteProps = {
  children: React.ReactElement;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authorized = useAppSelector(getAuthorized);
  return authorized ? children : <Navigate to={AppRoute.SignIn()} />;
}
