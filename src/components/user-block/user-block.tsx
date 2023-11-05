import { useAppDispatch, useAppSelector } from '../../redux/hooks.ts';
import { AuthorizationStatus } from '../../const.ts';
import { Link } from 'react-router-dom';
import { logout } from '../../redux/api-actions.ts';

export default function UserBlock() {
  const dispatch = useAppDispatch();
  const authorizationStatus = useAppSelector(
    (state) => state.authorizationStatus
  );
  const userImage = useAppSelector((state) => state.userImage);
  if (authorizationStatus !== AuthorizationStatus.Auth) {
    return (
      <div className="user-block">
        <Link to="/login" className="user-block__link">
          Sign in
        </Link>
      </div>
    );
  }

  const handleSignOutClick = () => {
    dispatch(logout());
  };

  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <Link to={'/mylist'}>
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
