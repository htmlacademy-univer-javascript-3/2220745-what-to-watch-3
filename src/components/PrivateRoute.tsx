import { AppRoute, AuthorizationStatus } from '../const.ts';
import { Navigate } from 'react-router-dom';
import React from 'react';

type PrivateRouteProps = {
  children: React.ReactElement;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const authorizationStatus = AuthorizationStatus.Auth;
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}
