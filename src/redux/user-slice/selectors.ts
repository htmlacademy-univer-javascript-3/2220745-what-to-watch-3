import { State } from '../types.ts';
import { AuthorizationStatus } from '../../const.ts';
import { ImageUrl } from '../../types.ts';

export const getAuthorizationStatus = (state: State): AuthorizationStatus =>
  state.User.authorizationStatus;
export const getAuthorized = (state: State): boolean =>
  state.User.authorizationStatus === AuthorizationStatus.Auth;
export const getUserImage = (state: State): ImageUrl => state.User.userImage;
