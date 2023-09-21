import { AppRoute, AuthorizationStatus } from '../const.ts';
import { Navigate } from 'react-router-dom';
import React from 'react';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: React.ReactElement;
};

export default function PrivateRoute(props: PrivateRouteProps) {
  const { authorizationStatus, children } = props;
  return authorizationStatus === AuthorizationStatus.Auth ? (
    children
  ) : (
    <Navigate to={AppRoute.SignIn} />
  );
}
