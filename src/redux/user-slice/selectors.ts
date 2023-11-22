import { State } from '../types.ts';
import { AuthorizationStatus, NameSpace } from '../../const.ts';
import { ImageUrl } from '../../types.ts';

export const getAuthorizationStatus = (state: Pick<State, NameSpace.User>): AuthorizationStatus =>
  state.User.authorizationStatus;
export const getAuthorized = (state: Pick<State, NameSpace.User>): boolean =>
  state.User.authorizationStatus === AuthorizationStatus.Auth;
export const getUserImage = (state: Pick<State, NameSpace.User>): ImageUrl => state.User.userImage;
