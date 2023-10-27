import { useAppSelector } from '../redux/hooks.ts';
import { AuthorizationStatus } from '../const.ts';
import { Link } from 'react-router-dom';

export default function UserBlock() {
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
  return (
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img src={userImage} alt="User avatar" width="63" height="63" />
        </div>
      </li>
      <li className="user-block__item">
        <a className="user-block__link">Sign out</a>
      </li>
    </ul>
  );
}
