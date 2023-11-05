import { AppRoute, AuthorizationStatus } from '../../const.ts';
import { Navigate } from 'react-router-dom';
import React from 'react';
import { useAppSelector } from '../../redux/hooks.ts';

type PrivateRouteProps = {
  children: React.ReactElement;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}
