import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../redux/api-actions.ts';
import { getAuthorizationStatus, getUserImage } from '../../redux/user-slice/selectors.ts';
import { AppRoute, AuthorizationStatus } from '../../const.ts';

export default function UserBlock() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userImage = useAppSelector(getUserImage);

  const handleSignOutClick = () => {
    dispatch(logoutAction());
  };

  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return null;
  }

  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return (
      <div className="user-block">
        <Link to={AppRoute.SignIn()} className="user-block__link">
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={AppRoute.MyList()}>
            <img src={userImage} alt="User avatar" width="63" height="63" />
          </Link>
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link" onClick={handleSignOutClick}>
          Sign out
        </a>
      </li>
    </ul>
  );
}
